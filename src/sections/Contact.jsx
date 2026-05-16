import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-accent/40 border border-gray-100 rounded-[40px] overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-12 lg:p-20 bg-primary text-black">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's start a <br /> conversation.</h2>
              <p className="text-lg font-medium mb-12 opacity-80">
                Have a project in mind? We'd love to hear from you. 
                Fill out the form and our team will get back to you 
                within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center">
                    <Send size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold opacity-60">Email Us</p>
                    <p className="text-xl font-bold">hello@gofsditigal.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-12 lg:p-20">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-primary" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-900/60">Thank you for reaching out. We'll be in touch soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900/60 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900/60 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900/60 uppercase tracking-widest">Subject</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors appearance-none">
                      <option className="bg-white">Web Development</option>
                      <option className="bg-white">UI/UX Design</option>
                      <option className="bg-white">Mobile App</option>
                      <option className="bg-white">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900/60 uppercase tracking-widest">Message</label>
                    <textarea 
                      rows={4}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-primary transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
