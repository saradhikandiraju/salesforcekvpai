
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Cpu, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Award,
  Calendar
} from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  const [stats, setStats] = useState({ projects: 0, clients: 0, satisfaction: 0, years: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        projects: prev.projects < 500 ? prev.projects + 5 : 500,
        clients: prev.clients < 50 ? prev.clients + 1 : 50,
        satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 1 : 98,
        years: prev.years < 15 ? prev.years + 1 : 15,
      }));
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Helper for unique background gradients per service card
  const getServiceVisual = (id: string, icon: React.ReactNode) => {
    const gradients: Record<string, string> = {
      'implementation': 'from-blue-600 to-indigo-700',
      'development': 'from-navy to-blue-900',
      'integration': 'from-teal-accent to-blue-500',
      'migration': 'from-indigo-500 to-purple-600',
      'ai-solutions': 'from-salesforce via-teal-accent to-blue-400',
      'managed-services': 'from-navy via-salesforce to-indigo-800'
    };
    
    return (
      <div className={`w-full h-40 rounded-3xl bg-gradient-to-br ${gradients[id] || 'from-salesforce to-blue-600'} flex items-center justify-center mb-8 relative overflow-hidden group-hover:scale-[1.02] transition-all duration-500 shadow-xl border border-white/10`}>
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`grid-${id}`} width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${id})`} />
          </svg>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Icon Container with Glass Effect for better visibility */}
        <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl flex items-center justify-center text-white relative z-10 shadow-inner group-hover:scale-110 transition-transform">
          {icon}
        </div>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-navy overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#051f3e] to-salesforce opacity-90"></div>
        
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
        
        {/* Decorative Blur Blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-teal-accent/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-salesforce/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Abstract Floating Shapes */}
        <div className="absolute top-1/4 left-10 w-24 h-24 border border-white/10 rounded-full hidden lg:block animate-bounce" style={{ animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-white/10 rounded-2xl rotate-45 hidden lg:block animate-spin" style={{ animationDuration: '15s' }}></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-teal-accent animate-pulse"></span>
            Agentforce Early Adopters
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight max-w-5xl mx-auto drop-shadow-lg">
            Transform Your Business with <span className="text-teal-accent">AI-Powered</span> Salesforce Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Get 30% more productivity and 2X ROI with our expert Salesforce implementation and strategic AI integration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 bg-salesforce hover:bg-white hover:text-navy text-white rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              Book Free Consultation <Calendar className="w-5 h-5" />
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-10 py-5 bg-white/5 border-2 border-white/20 hover:bg-white hover:text-navy hover:border-white text-white rounded-full text-lg font-bold transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
              View Our Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-12 border-t border-white/10">
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-white tracking-tight">500+</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center gap-2 border-x border-white/10">
              <span className="text-3xl font-bold text-white tracking-tight">98%</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl font-bold text-white tracking-tight">Certified</span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Salesforce Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold text-salesforce uppercase tracking-[0.2em] mb-4">The TroopAi Advantage</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-navy">Why Choose SalesforceTroopAi?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-salesforce transition-colors">
                <Cpu className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">AI-Powered Solutions</h4>
              <p className="text-gray-600 leading-relaxed">Leverage the latest Agentforce and Einstein AI technology to automate complex workflows autonomously.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-salesforce transition-colors">
                <Award className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">Certified Experts</h4>
              <p className="text-gray-600 leading-relaxed">Work with multi-cloud certified architects and developers who follow rigorous industry best practices.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-salesforce transition-colors">
                <TrendingUp className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">Proven ROI</h4>
              <p className="text-gray-600 leading-relaxed">We don't just implement software; we drive measurable business results that pay for your investment quickly.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all group border border-transparent hover:border-gray-100">
              <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-salesforce transition-colors">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-4">End-to-End Support</h4>
              <p className="text-gray-600 leading-relaxed">From initial discovery to ongoing managed services, we are your long-term strategic partner for success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-base font-bold text-salesforce uppercase tracking-[0.2em] mb-4">Our Services</h2>
              <h3 className="text-4xl font-bold text-navy max-w-xl">Deep Expertise Across the Entire Salesforce Ecosystem</h3>
            </div>
            <Link to="/services" className="text-salesforce font-bold flex items-center gap-2 hover:gap-4 transition-all group">
              Explore All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 hover:border-salesforce/20">
                {getServiceVisual(service.id, service.icon)}
                <h4 className="text-2xl font-bold text-navy mb-4">{service.title}</h4>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed font-light">{service.shortDescription}</p>
                <Link to="/services" className="text-salesforce font-bold inline-flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Subtle Background Pattern for Stats */}
        <div className="absolute inset-0 opacity-[0.03] scale-150 rotate-12" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23ffffff'/%3E%3C/svg%3E")` }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-extrabold text-teal-accent tracking-tighter">{stats.projects}+</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Projects Completed</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-extrabold text-teal-accent tracking-tighter">{stats.clients}+</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Happy Clients</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-extrabold text-teal-accent tracking-tighter">{stats.satisfaction}%</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Satisfaction Rate</div>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-extrabold text-teal-accent tracking-tighter">{stats.years}</div>
              <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-navy mb-6">What Our Clients Say</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Don't just take our word for it. We've helped hundreds of businesses unlock their true potential with Salesforce.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-10 rounded-3xl border border-gray-100 bg-white hover:border-salesforce/30 hover:shadow-2xl transition-all duration-500 flex flex-col">
                <div className="flex gap-1 text-salesforce mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-5 h-5 fill-salesforce/20" />)}
                </div>
                <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                  <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-salesforce/10" />
                  <div>
                    <h5 className="font-bold text-navy">{t.name}</h5>
                    <p className="text-sm text-gray-500 font-medium">{t.title}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-salesforce rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-salesforce/30">
            {/* CTA Background blobs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/30 rounded-full -ml-48 -mb-48 blur-3xl"></div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10 leading-tight">Ready to Transform Your Salesforce Experience?</h3>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto relative z-10 font-light">
              Book your free 30-minute consultation today and discover how AI can drive your business forward.
            </p>
            <div className="flex flex-col items-center gap-6 relative z-10">
              <Link to="/contact" className="px-12 py-5 bg-white text-salesforce rounded-full text-lg font-bold hover:bg-navy hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                Schedule Free Consultation <MessageSquare className="w-5 h-5" />
              </Link>
              <span className="text-white/70 text-sm font-semibold tracking-wide uppercase">No commitment required • 24h response time</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
