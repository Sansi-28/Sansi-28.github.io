import React, { useState, useEffect, useRef } from 'react';
import AiAssistant from './AiAssistant.js';

const ChatBubbleIcon = () => (
  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-8 h-8 animate-bob pointer-events-none">
    <svg viewBox="0 0 24 24" fill="white" style={{ filter: 'drop-shadow(2px 2px 0px rgba(0,0,0,0.5))' }}>
      <path d="M4 2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4l-4 4-4-4H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2z"></path>
    </svg>
  </div>
);

const CompanionCharacter = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pupilsRef = useRef([]);
  const characterRef = useRef(null);
  const containerRef = useRef(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const [isMouseIdle, setIsMouseIdle] = useState(true);
  const idleTimeoutRef = useRef(null);

  const [animationState, setAnimationState] = useState('inHero');
  const [style, setStyle] = useState({});

  const physicsStateRef = useRef({
    x: 0, y: 0, vx: 0, vy: 0, rotation: 0, vRotation: 0, startTime: 0,
  });
  const animationFrameIdRef = useRef();


  // Effect for scroll-based trigger
  useEffect(() => {
    const handleScroll = () => {
      if (animationState !== 'inHero' || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      // Trigger when the character's container is fully off-screen at the top
      if (containerRect.bottom < 0) {
        startFallAnimation();
      }
    };

    const startFallAnimation = () => {
      if (!characterRef.current) return;
      const charRect = characterRef.current.getBoundingClientRect();
      
      // Initialize physics
      physicsStateRef.current = {
        x: charRect.left,
        y: charRect.top,
        vx: Math.random() * 6 - 3, // Initial horizontal push
        vy: Math.random() * -5 - 2, // Initial upward pop
        rotation: 0,
        vRotation: Math.random() * 10 - 5, // Initial spin
        startTime: performance.now(),
      };

      // Set initial fixed position and start animation
      setStyle({
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${charRect.width}px`,
        height: `${charRect.height}px`,
        transform: `translate3d(${charRect.left}px, ${charRect.top}px, 0)`,
        zIndex: 50,
      });

      setAnimationState('falling');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationState]);

  // The main physics animation loop
  useEffect(() => {
    if (animationState !== 'falling') return;

    const animate = () => {
      const state = physicsStateRef.current;
      const charWidth = characterRef.current?.offsetWidth || 70;
      const charHeight = characterRef.current?.offsetHeight || 60;
      const elapsed = performance.now() - state.startTime;

      // --- Physics Constants ---
      const gravity = 0.4;
      const bounceDamping = 0.7;
      const airDamping = 0.995;
      const SETTLE_DELAY = 3000; // Start settling after 3 seconds

      const targetX = window.innerWidth - 100;
      const targetY = window.innerHeight - 100;
      const dx = targetX - state.x;
      const dy = targetY - state.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // After a delay, switch to a guaranteed settling mode
      if (elapsed > SETTLE_DELAY) {
        // --- Settling Logic (Failsafe) ---
        const settlingSpring = 0.05;
        const settlingDamping = 0.90;

        // Spring force to guide to corner
        state.vx += dx * settlingSpring;
        state.vy += dy * settlingSpring;
        
        // Dampen velocity and rotation to settle
        state.vx *= settlingDamping;
        state.vy *= settlingDamping;
        state.vRotation *= settlingDamping;
        state.rotation *= settlingDamping;
      } else {
        // --- Bouncing Physics ---
        // Apply gravity
        state.vy += gravity;

        // Apply air damping to horizontal movement
        state.vx *= airDamping;

        // --- Collision Detection & Bounce ---
        if (state.x <= 0) {
          state.x = 0;
          state.vx *= -bounceDamping;
          state.vRotation *= -bounceDamping;
        }
        if (state.x >= window.innerWidth - charWidth) {
          state.x = window.innerWidth - charWidth;
          state.vx *= -bounceDamping;
          state.vRotation *= -bounceDamping;
        }
        if (state.y <= 0) {
          state.y = 0;
          state.vy *= -bounceDamping;
        }
        if (state.y >= window.innerHeight - charHeight) {
          state.y = window.innerHeight - charHeight;
          state.vy *= -bounceDamping;
          if(Math.abs(state.vy) < 2) state.vRotation += (Math.random() - 0.5) * 2;
        }
      }

      // --- Update Position & Rotation (Common to both modes) ---
      state.x += state.vx;
      state.y += state.vy;
      state.rotation += state.vRotation;

      // --- End Condition ---
      // If we are in settling mode and we are very close and slow, end the animation
      if (elapsed > SETTLE_DELAY && distance < 1 && Math.abs(state.vx) < 0.1 && Math.abs(state.vy) < 0.1) {
        setAnimationState('settled');
        setStyle({
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${charWidth}px`,
          height: `${charHeight}px`,
          transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(0.8)`,
          zIndex: 50,
          transition: 'transform 0.3s ease-out',
        });
        return; // Stop the loop
      }
      
      // Apply new styles
      setStyle(s => ({
        ...s,
        transform: `translate3d(${state.x}px, ${state.y}px, 0) rotate(${state.rotation}deg) scale(0.8)`,
      }));

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [animationState]);

  // Effect for handling window resize to keep the character in place when settled
  useEffect(() => {
    const handleResize = () => {
      if (animationState === 'settled') {
        const charWidth = characterRef.current?.offsetWidth || 70;
        const charHeight = characterRef.current?.offsetHeight || 60;
        
        const targetX = window.innerWidth - 100;
        const targetY = window.innerHeight - 100;

        setStyle(currentStyle => ({
          ...currentStyle,
          width: `${charWidth}px`,
          height: `${charHeight}px`,
          transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(0.8)`,
          transition: 'transform 0.1s ease-out', 
        }));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [animationState]);


  // Blinking effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, Math.random() * 5000 + 2000); // Blink every 2-7 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  // Effect for handling mouse movement and setting idle state
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current);
      setIsMouseIdle(false);
      
      pupilsRef.current.forEach(pupil => {
        if (!pupil) return;
        const eyeRect = pupil.parentElement.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const maxPupilOffset = eyeRect.width / 4;
        const pupilX = Math.cos(angle) * maxPupilOffset;
        const pupilY = Math.sin(angle) * maxPupilOffset;
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
      
      idleTimeoutRef.current = window.setTimeout(() => setIsMouseIdle(true), 2000);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimeoutRef.current) window.clearTimeout(idleTimeoutRef.current);
    };
  }, []);

  // Effect for idle "looking around" animation
  useEffect(() => {
    let idleInterval = null;
    if (isMouseIdle) {
      idleInterval = window.setInterval(() => {
        const randomAngle = Math.random() * 2 * Math.PI;
        pupilsRef.current.forEach(pupil => {
          if (!pupil) return;
          const eyeRect = pupil.parentElement.getBoundingClientRect();
          const maxPupilOffset = eyeRect.width / 4.5;
          const pupilX = Math.cos(randomAngle) * maxPupilOffset;
          const pupilY = Math.sin(randomAngle) * maxPupilOffset;
          pupil.style.transition = 'transform 0.4s ease-in-out';
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
      }, 1800);
    } else {
       pupilsRef.current.forEach(pupil => {
          if (pupil) pupil.style.transition = 'transform 0.075s ease-out';
       });
    }
    return () => {
      if (idleInterval) window.clearInterval(idleInterval);
    };
  }, [isMouseIdle]);
  
  const handleCharacterClick = () => {
    if (animationState === 'settled') {
      setIsChatOpen(true);
    }
  };

  return (
    <>
      <div ref={containerRef} className="w-full h-full">
        <div
          ref={characterRef}
          className={`
            cursor-pointer
            ${animationState === 'inHero' ? 'relative animate-float animate-appear' : ''}
            ${animationState === 'settled' ? 'relative' : ''}
          `}
          style={animationState !== 'inHero' ? style : {}}
          aria-hidden="true"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCharacterClick}
        >
          {animationState === 'settled' && <ChatBubbleIcon />}
          <div className="relative w-16 h-14 sm:w-20 sm:h-16 bg-pixel-blue shadow-pixel border-2 border-pixel-border rounded-lg p-1.5">
            <div className="flex justify-center items-center space-x-1.5 sm:space-x-2 h-full">
              {/* Eyes */}
              {[0, 1].map(i => (
                <div key={i} className="relative w-6 h-6 sm:w-7 sm:h-7 bg-white border-2 border-pixel-bg rounded-full flex items-center justify-center overflow-hidden">
                  <div 
                    className={`w-full h-full bg-pixel-blue absolute top-0 left-0 transition-transform duration-100 ease-in-out z-10 ${isBlinking ? 'scale-y-100' : 'scale-y-0'}`}
                    style={{ transformOrigin: 'top' }}
                  />
                  {/* Pupil */}
                  <div
                    ref={el => pupilsRef.current[i] = el}
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-pixel-bg rounded-full"
                  />
                </div>
              ))}
            </div>
            {/* Mouth */}
            <div className={`
                absolute left-1/2 -translate-x-1/2 
                border-pixel-bg
                transition-all duration-300 ease-in-out
                ${isHovered 
                  ? 'w-4 sm:w-5 h-2 sm:h-2.5 rounded-b-lg border-b-2 bottom-1.5 sm:bottom-2' 
                  : 'w-2.5 sm:w-3 h-0 border-b-2 bottom-2 sm:bottom-2.5'
                }`
              } />
          </div>
        </div>
      </div>
      <AiAssistant isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default CompanionCharacter;