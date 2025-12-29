
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Youtube, Mail, Phone, Clock, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-salesforce rounded flex items-center justify-center">
                <span className="text-white font-black text-lg italic">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tight">SalesforceTroop<span className="text-salesforce">Ai</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Providing modern businesses with world-class, AI-driven Salesforce implementation and consulting services.
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-lg">Subscribe to our newsletter</h4>
              <div className="relative max-w-sm">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-salesforce transition-all"
                />
                <button className="absolute right-2 top-2 bg-salesforce p-1.5 rounded-full hover:bg-teal-accent transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-salesforce pl-3">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-salesforce transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-salesforce transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-salesforce transition-colors">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-salesforce transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-salesforce transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-salesforce transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-teal-accent pl-3">Our Expertise</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">Implementation</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">Custom Development</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">Integration</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">Data Migration</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="hover:text-teal-accent transition-colors">Managed Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-bold text-lg border-l-4 border-white pl-3">Contact</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-salesforce shrink-0" />
                <span>info@salesforcetroopai.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-salesforce shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-salesforce shrink-0" />
                <span>Mon-Fri: 9AM - 6PM EST</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-salesforce transition-all"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 SalesforceTroopAi. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
