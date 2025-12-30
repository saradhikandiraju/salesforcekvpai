import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  Target, 
  Eye, 
  Heart,
  Award,
  Calendar,
  CheckCircle2,
  Linkedin,
  Twitter
} from 'lucide-react'
import { TEAM, COMPANY_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: 'About Us | SalesforceTroopAi - Redefining Salesforce Consulting',
  description: 'Founded in 2015, SalesforceTroopAi is a global remote-first team of architects, developers, and strategists specializing in AI-powered Salesforce solutions.',
  keywords: ['About SalesforceTroopAi', 'Salesforce Consultants', 'Salesforce Team', 'Salesforce Experts'],
  openGraph: {
    title: 'About Us | SalesforceTroopAi - Redefining Salesforce Consulting',
    description: 'We blend deep ecosystem expertise with cutting-edge AI strategy to build the CRM solutions of tomorrow.',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-navy pt-24 pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-salesforce/10 skew-x-12"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8">Redefining Salesforce Consulting</h1>
            <p className="text-xl text-gray-300 leading-relaxed font-light">We blend deep ecosystem expertise with cutting-edge AI strategy to build the CRM solutions of tomorrow.</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-light">
                <p>
                  Founded in 2015, SalesforceTroopAi began with a simple mission: to help businesses harness the full power of Salesforce without the typical consulting friction. We saw too many companies struggling with "shelfware"—expensive software that nobody used.
                </p>
                <p>
                  Over the last decade, we have evolved into a global remote-first team of architects, developers, and strategists. We were early adopters of AI within the ecosystem, recognizing that the future of CRM isn't just data entry, but intelligent action.
                </p>
                <p>
                  Today, we are proud to be at the forefront of the Agentforce revolution, helping our clients build autonomous businesses that scale effortlessly. We remain committed to our core values: innovation, technical excellence, and genuine partnership.
                </p>
              </div>
              <div className="flex gap-12 pt-4">
                <div className="text-center">
                  <div className="text-4xl font-black text-salesforce tracking-tighter">15+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-salesforce tracking-tighter">500+</div>
                  <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Successful Rollouts</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000&h=1000" alt="Team collaborating" width={1000} height={1000} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-xs transform hover:-translate-y-2 transition-transform">
                <Heart className="w-10 h-10 text-salesforce mb-4" />
                <h4 className="font-bold text-navy mb-2">Customer First</h4>
                <p className="text-sm text-gray-500">Our success is entirely dependent on yours. That's our promise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-salesforce/10 text-salesforce rounded-2xl flex items-center justify-center mb-8 group-hover:bg-salesforce group-hover:text-white transition-colors">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                Empowering businesses through intelligent Salesforce solutions that drive measurable growth, operational efficiency, and superior customer experiences.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-teal-accent/10 text-teal-accent rounded-2xl flex items-center justify-center mb-8 group-hover:bg-teal-accent group-hover:text-white transition-colors">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                To be the leading global partner for AI-powered Salesforce consulting, setting the standard for technical excellence and autonomous business architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-base font-bold text-salesforce uppercase tracking-[0.2em] mb-4">Our Leadership</h2>
            <h3 className="text-4xl font-bold text-navy tracking-tight">Meet the Experts Behind Your Success</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {TEAM.map((member, i) => (
              <div key={i} className="group relative">
                <div className="aspect-[4/5] bg-navy rounded-[2.5rem] overflow-hidden mb-6 relative shadow-xl transform transition-transform duration-500 hover:-translate-y-4">
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy via-transparent to-salesforce/20 mix-blend-overlay z-10"></div>
                  <Image 
                    src={member.photo} 
                    alt={member.name} 
                    width={800}
                    height={1000}
                    className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-1000 ease-out brightness-90 group-hover:brightness-100"
                    unoptimized
                  />
                  
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    SF Master
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end z-20">
                    <p className="text-white text-sm leading-relaxed mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-light italic">"{member.bio}"</p>
                    <div className="flex gap-3">
                      {COMPANY_CONFIG.social.linkedin && (
                        <a href={COMPANY_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-salesforce transition-colors"><Linkedin size={14}/></a>
                      )}
                      {COMPANY_CONFIG.social.twitter && (
                        <a href={COMPANY_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-salesforce transition-colors"><Twitter size={14}/></a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-navy mb-1 group-hover:text-salesforce transition-colors">{member.name}</h4>
                  <p className="text-gray-500 font-semibold text-xs uppercase tracking-widest">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-navy tracking-tight">Our Technical Credentials</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
            {['Administrator', 'Developer', 'Architect', 'Marketing Cloud', 'Sales Cloud', 'Service Cloud'].map((cert) => (
              <div key={cert} className="flex flex-col items-center gap-3 group/cert">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-salesforce/20 shadow-sm group-hover/cert:border-salesforce group-hover/cert:scale-110 transition-all">
                   <Award className="text-salesforce w-8 h-8" />
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter group-hover/cert:text-navy transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { title: 'Innovation', desc: 'Pushing the boundaries of what is possible with AI.' },
              { title: 'Excellence', desc: 'Rigorous technical standards in every line of code.' },
              { title: 'Partnership', desc: 'We act as an extension of your own internal team.' },
              { title: 'Results', desc: 'Metrics-driven approach to every implementation.' }
            ].map((v, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-teal-accent/10 flex items-center justify-center text-teal-accent group-hover:bg-teal-accent group-hover:text-white transition-all">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-navy">{v.title}</h4>
                <p className="text-gray-500 font-light">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-salesforce/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-3xl font-bold text-white mb-8">Want to work with a world-class team?</h3>
          <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-5 bg-salesforce text-white rounded-full font-bold hover:bg-teal-accent transition-all shadow-xl shadow-salesforce/20">
            Schedule a Discovery Call <Calendar className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

