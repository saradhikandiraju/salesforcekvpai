
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Plus, 
  Minus, 
  MessageCircle,
  Mail,
  Phone
} from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Services', 'Pricing', 'Support'];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Got Questions? We Have Answers.</h1>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-full py-5 px-14 text-white placeholder-gray-400 focus:outline-none focus:border-salesforce transition-all"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all border-2 ${activeCategory === cat ? 'bg-salesforce border-salesforce text-white shadow-lg' : 'bg-transparent border-gray-100 text-gray-500 hover:border-gray-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-4 min-h-[400px]">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden transition-all hover:border-salesforce/20">
                  <button 
                    className="w-full flex items-center justify-between p-8 text-left hover:bg-gray-50/50 transition-colors"
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-salesforce uppercase tracking-widest">{faq.category}</span>
                      <h3 className="text-xl font-bold text-navy pr-12">{faq.question}</h3>
                    </div>
                    <div className={`shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${openIndex === idx ? 'bg-salesforce border-salesforce text-white rotate-180' : 'bg-transparent border-gray-100 text-gray-400'}`}>
                      {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  {openIndex === idx && (
                    <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg animate-in fade-in slide-in-from-top-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-20 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-500 font-medium">No questions found matching your criteria. Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Need More Help */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-navy mb-12">Still Have Questions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-salesforce/10 text-salesforce rounded-xl flex items-center justify-center"><Mail className="w-6 h-6" /></div>
                <h4 className="font-bold text-navy">Email Us</h4>
                <p className="text-gray-500 text-sm">Response within 24h</p>
                <a href="mailto:info@salesforcetroopai.com" className="text-salesforce font-bold hover:underline">info@salesforcetroopai.com</a>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center gap-4 border-2 border-salesforce">
                <div className="w-12 h-12 bg-salesforce text-white rounded-xl flex items-center justify-center"><MessageCircle className="w-6 h-6" /></div>
                <h4 className="font-bold text-navy">Direct Chat</h4>
                <p className="text-gray-500 text-sm">Mon-Fri: 9AM - 6PM</p>
                <Link to="/contact" className="text-salesforce font-bold hover:underline">Book a Call Now</Link>
              </div>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-salesforce/10 text-salesforce rounded-xl flex items-center justify-center"><Phone className="w-6 h-6" /></div>
                <h4 className="font-bold text-navy">Call Us</h4>
                <p className="text-gray-500 text-sm">Urgent inquiries</p>
                <a href="tel:+15551234567" className="text-salesforce font-bold hover:underline">+1 (555) 123-4567</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
