import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Zap, MessageSquare, Globe, Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export const ContactPage = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Get in touch with us</h1>
          <p className="text-text-muted max-w-2xl mx-auto">Ready to source quality chemicals for your business? Our team is here to help you find the right solutions. Let's discuss your chemical supply needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { title: 'Sales', desc: 'Interested in our chemical products? Contact our sales team for pricing and availability.', icon: <Zap className="text-primary" /> },
            { title: 'Support', desc: 'Need technical specifications, product information, or assistance with your order? Our experts are here to help.', icon: <MessageSquare className="text-primary" /> },
            { title: 'General Inquiries', desc: 'For partnerships, bulk orders, or general questions, reach out to us.', icon: <Globe className="text-primary" /> },
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-xs text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass p-8 rounded-xs">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Email</p>
                    <p className="font-medium">akuye2005@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Phone</p>
                    <p className="font-medium">+251 911 086 926</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Office</p>
                    <p className="font-medium">Kirkos shopping center c320</p>
                    <p className="font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Hours</p>
                    <p className="font-medium">Mon-Fri, 8:30AM-5:30PM EAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-xs">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xs flex items-center gap-3 text-green-500">
                <CheckCircle size={20} />
                <p className="text-sm font-medium">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xs flex items-center gap-3 text-red-500">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text/40">First Name *</label>
                  <input 
                    name="first_name"
                    type="text" 
                    required
                    className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text/40">Last Name *</label>
                  <input 
                    name="last_name"
                    type="text" 
                    required
                    className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Email Address *</label>
                <input 
                  name="user_email"
                  type="email" 
                  required
                  className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Phone Number *</label>
                <input 
                  name="user_phone"
                  type="tel" 
                  required
                  className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Message *</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xs font-bold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
