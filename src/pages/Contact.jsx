import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: <Phone />, label: 'Phone', value: '+91 63742 70471', href: 'tel:+916374270471' },
    { icon: <Mail />, label: 'Email', value: 'hello@gofstech.com', href: 'mailto:hello@gofstech.com' },
    { icon: <MessageCircle />, label: 'WhatsApp', value: '+91 63742 70471', href: 'https://wa.me/916374270471' },
    { icon: <MapPin />, label: 'Location', value: 'India', href: null },
    { icon: <Clock />, label: 'Business Hours', value: 'Mon - Sat: 9AM - 7PM', href: null }
  ];

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-medium tracking-[0.15em] uppercase mb-6 font-mono">
            Contact Us
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            Let's <span className="text-[#0D6EFD]">Talk</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[var(--text-muted)] text-lg leading-relaxed">
            Have a project in mind? We'd love to hear from you. Fill out the form or reach out directly — our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-8 md:p-12 rounded-none">
              <h2 className="text-2xl font-black text-[var(--text-color)] mb-8" style={{ fontFamily: "'Unbounded', sans-serif" }}>Reach Out</h2>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-none bg-[var(--tag-bg)] flex items-center justify-center text-[#0D6EFD] flex-shrink-0 border border-[var(--tag-border)]">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-[var(--text-muted)] text-xs font-mono uppercase tracking-wider mb-1">{info.label}</div>
                      {info.href ? (
                        <a href={info.href} className="text-[var(--text-color)] hover:text-[#0D6EFD] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-[var(--text-color)]">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[var(--card-border)]">
                <h3 className="text-sm font-black text-[var(--text-color)] uppercase tracking-widest mb-6 font-mono">Follow Us</h3>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                    <a key={social} href="#" className="px-6 py-3 bg-[var(--tag-bg)] text-[var(--text-muted)] text-[10px] font-bold uppercase tracking-widest border border-[var(--tag-border)] hover:border-[#0D6EFD] hover:text-[#0D6EFD] transition-all rounded-none font-mono">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-8 md:p-12 rounded-none">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-[#0D6EFD]/20 flex items-center justify-center mb-6">
                    <CheckCircle className="text-[#0D6EFD]" size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-color)] mb-4" style={{ fontFamily: "'Unbounded', sans-serif" }}>Message Sent!</h3>
                  <p className="text-[var(--text-muted)]">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider font-mono">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-[var(--tag-bg)] border border-[var(--card-border)] px-6 py-4 text-[var(--text-color)] placeholder-[var(--text-muted)] focus:border-[#0D6EFD] outline-none transition-colors rounded-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider font-mono">Email Address</label>
                      <input
                        type="email"
                        required
                        className="w-full bg-[var(--tag-bg)] border border-[var(--card-border)] px-6 py-4 text-[var(--text-color)] placeholder-[var(--text-muted)] focus:border-[#0D6EFD] outline-none transition-colors rounded-none"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider font-mono">Service Interest</label>
                    <select className="w-full bg-[var(--tag-bg)] border border-[var(--card-border)] px-6 py-4 text-[var(--text-color)] focus:border-[#0D6EFD] outline-none transition-colors appearance-none rounded-none">
                      <option className="bg-[var(--bg-color)]">Select a Service</option>
                      <option className="bg-[var(--bg-color)]">Web Development</option>
                      <option className="bg-[var(--bg-color)]">App Development</option>
                      <option className="bg-[var(--bg-color)]">Software Development</option>
                      <option className="bg-[var(--bg-color)]">AI Automation</option>
                      <option className="bg-[var(--bg-color)]">Digital Marketing</option>
                      <option className="bg-[var(--bg-color)]">Cloud Solutions</option>
                      <option className="bg-[var(--bg-color)]">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wider font-mono">Message</label>
                    <textarea
                      rows={5}
                      required
                      className="w-full bg-[var(--tag-bg)] border border-[var(--card-border)] px-6 py-4 text-[var(--text-color)] placeholder-[var(--text-muted)] focus:border-[#0D6EFD] outline-none transition-colors resize-none rounded-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-black py-5 flex items-center justify-center gap-3 transition-all rounded-none uppercase tracking-widest text-xs font-mono hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;