
import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube,
  CheckCircle2
} from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-xl text-center space-y-8 border border-gray-100 animate-in fade-in zoom-in duration-500">
           <div className="w-24 h-24 bg-teal-accent/10 text-teal-accent rounded-full flex items-center justify-center mx-auto">
             <CheckCircle2 className="w-12 h-12" />
           </div>
           <h2 className="text-4xl font-bold text-navy">Message Received!</h2>
           <p className="text-xl text-gray-600">Thank you for reaching out. One of our senior Salesforce architects will review your request and contact you within the next 24 hours.</p>
           <button 
            onClick={() => setSubmitted(false)}
            className="px-12 py-4 bg-salesforce text-white rounded-full font-bold hover:bg-navy transition-all"
           >
            Back to Form
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-24 pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Let's Build the Future Together</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Book your free 30-minute strategic consultation and discover the ROI of AI-powered Salesforce.</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-24 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy mb-2">Schedule Your Strategy Call</h3>
                <p className="text-gray-500">Fill out the form below and we'll reach out to coordinate a time.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Email Address *</label>
                    <input required type="email" placeholder="john@company.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Company Name</label>
                    <input type="text" placeholder="Company Inc." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Service Interest</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all appearance-none cursor-pointer">
                      <option>Implementation</option>
                      <option>Custom Development</option>
                      <option>Integration</option>
                      <option>Data Migration</option>
                      <option>AI / Agentforce</option>
                      <option>Managed Support</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Timeline</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all appearance-none cursor-pointer">
                      <option>Immediate</option>
                      <option>1-3 Months</option>
                      <option>3-6 Months</option>
                      <option>6+ Months</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-navy uppercase tracking-widest">Budget</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all appearance-none cursor-pointer">
                      <option>$10k - $25k</option>
                      <option>$25k - $75k</option>
                      <option>$75k+</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-navy uppercase tracking-widest">Message</label>
                  <textarea rows={4} placeholder="Tell us about your project goals..." className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-salesforce transition-all"></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-5 bg-salesforce text-white rounded-full font-bold text-lg hover:bg-navy transition-all shadow-xl shadow-salesforce/20 flex items-center justify-center gap-3 group">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-center text-sm text-gray-400 mt-6 font-medium italic">We typically respond within 24 business hours.</p>
                </div>
              </form>
            </div>

            {/* Right: Info Panels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-navy text-white p-10 rounded-[3rem] shadow-xl space-y-10">
                <h3 className="text-2xl font-bold">Contact Details</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-salesforce rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-400">info@salesforcetroopai.com</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-salesforce rounded-2xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Phone</h4>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-salesforce rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                      <p className="text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-salesforce rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Location</h4>
                      <p className="text-gray-400">Remote-First Team Serving Clients Nationwide</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="font-bold mb-6 text-gray-400 uppercase tracking-widest text-sm">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-salesforce transition-all"><Linkedin /></a>
                    <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-salesforce transition-all"><Twitter /></a>
                    <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-salesforce transition-all"><Youtube /></a>
                  </div>
                </div>
              </div>

              {/* Trust Badge Small */}
              <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                   <CheckCircle2 className="w-8 h-8 text-teal-accent" />
                </div>
                <div>
                   <h4 className="font-bold text-navy">Verified Partner</h4>
                   <p className="text-sm text-gray-500">Multicloud certified with 98% CSAT score.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
