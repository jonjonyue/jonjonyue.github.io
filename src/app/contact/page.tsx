'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <div className="space-y-16">
      <section className="text-center py-8 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h1>
        <p className="text-xl text-secondary-text mb-6 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello!
        </p>
      </section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Email</h3>
                <a href="mailto:yuejonathan@gmail.com" className="text-secondary-text hover:text-accent transition-colors duration-300">
                  yuejonathan@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/jonathanyue97" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary-text hover:text-accent transition-colors duration-300"
                >
                  linkedin.com/in/jonathanyue97
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mt-1 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-1">Portfolio</h3>
                <a 
                  href="https://yonyonjue.itch.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-text hover:text-accent transition-colors duration-300"
                >
                  yonyonjue.itch.io
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-foreground mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300 text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-foreground mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300 text-foreground"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-foreground mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-card-bg border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors duration-300 text-foreground resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 
                ${formStatus === 'submitting' ? 'bg-accent/50 cursor-not-allowed' : 'bg-accent hover:bg-accent-light'} 
                text-white`}
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            
            {formStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-500">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {formStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
} 