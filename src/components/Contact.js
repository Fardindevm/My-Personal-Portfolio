import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    const templateParams = {
      user_name: e.target.user_name.value,
      user_email: e.target.user_email.value,
      message: e.target.message.value,
      reply_to: e.target.user_email.value
    };

    try {
      const result = await emailjs.send(
        process.env.REACT_APP_MAIL_SERVICE,
        process.env.REACT_APP_MAIL_TEMPLATE,
        templateParams,
        process.env.REACT_APP_MAIL_ID
      );

      if (result.text === 'OK') {
        const autoReplyParams = {
          to_email: templateParams.user_email,
          to_name: templateParams.user_name,
          reply_message: `Hi ${templateParams.user_name},\n\nThanks for your message! I've received it and will get back to you within 24-48 hours.\n\nBest regards,\nFardin Mohammadi`
        };

        await emailjs.send(
          process.env.REACT_APP_MAIL_SERVICE,
          process.env.REACT_APP_AUTO_REPLY_TEMPLATE,
          autoReplyParams,
          process.env.REACT_APP_MAIL_ID
        );

        setFormStatus('Message sent successfully!');
        e.target.reset();
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-400">Contact Me</span>
        </h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder='Your Name'
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder='your@email.com'
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder='Your message...'
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus && (
              <div className={`text-center ${formStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {formStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
