
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Clock,
  Search
} from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-navy pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Resources & Insights</h1>
              <p className="text-xl text-gray-400">Deep dives into Salesforce strategy, AI advancements, and CRM success frameworks.</p>
            </div>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-12 text-white focus:outline-none focus:border-salesforce"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="group bg-white flex flex-col h-full border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-navy shadow-sm">
                    {post.readTime}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-navy group-hover:text-salesforce transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="pt-4">
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-salesforce font-bold hover:gap-4 transition-all">
                      Read Full Article <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8 p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
             <div className="w-16 h-16 bg-salesforce/10 text-salesforce rounded-full flex items-center justify-center mx-auto mb-6">
               <Clock className="w-8 h-8" />
             </div>
             <h3 className="text-3xl font-bold text-navy">Never Miss an Update</h3>
             <p className="text-gray-600">Join 5,000+ Salesforce professionals getting our bi-weekly insights on AI and CRM strategy.</p>
             <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onClick={(e) => e.preventDefault()}>
               <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-grow px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-salesforce"
               />
               <button className="px-8 py-4 bg-salesforce text-white rounded-full font-bold hover:bg-navy transition-all">
                 Subscribe
               </button>
             </form>
             <p className="text-xs text-gray-400">Zero spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
