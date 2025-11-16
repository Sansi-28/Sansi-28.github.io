import React, { useState } from 'react';
import Section from './Section';
import PixelatedButton from './PixelatedButton';

const Contact: React.FC = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formspreeEndpoint = "https://formspree.io/f/mvgdwrkk";
    if (!formspreeEndpoint) {
      setStatus('ERROR: The contact form is not configured.');
      return;
    }
    
    setStatus('Sending...');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message sent! Thanks for reaching out.');
        form.reset();
      } else {
        const responseData = await response.json();
        // FIX: Replaced Object.hasOwn with Object.prototype.hasOwnProperty.call for better browser compatibility.
        if (Object.prototype.hasOwnProperty.call(responseData, 'errors')) {
          setStatus(responseData.errors.map((error: { message: string }) => error.message).join(', '));
        } else {
          setStatus('Oops! There was a problem submitting your form.');
        }
      }
    } catch (error) {
      setStatus('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <Section id="contact" title="<Contact Me />">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm mb-8 leading-relaxed">
          Have a project, a question, or just want to say hi? Drop me a line!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-pixel-bg border-2 border-pixel-border p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pixel-pink shadow-pixel-inset"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-pixel-bg border-2 border-pixel-border p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pixel-pink shadow-pixel-inset"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full bg-pixel-bg border-2 border-pixel-border p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-pixel-pink shadow-pixel-inset"
          />
          <PixelatedButton type="submit">
            Send Message
          </PixelatedButton>
        </form>
        {status && <p className="mt-6 text-sm text-pixel-green">{status}</p>}
      </div>
    </Section>
  );
};

export default Contact;