
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Clock, 
  Share2, 
  Linkedin, 
  Twitter, 
  Facebook,
  ChevronRight
} from 'lucide-react';
import { BLOG_POSTS } from '../constants';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  const relatedPosts = BLOG_POSTS.filter(p => p.id !== id).slice(0, 2);

  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Reading Progress Placeholder */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-gray-100 z-50">
        <div className="h-full bg-salesforce w-1/3"></div>
      </div>

      <article>
        {/* Header Section */}
        <header className="pt-24 pb-16 bg-navy text-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Link to="/blog" className="inline-flex items-center gap-2 text-salesforce font-bold mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" /> Back to Blog
            </Link>
            <div className="flex items-center gap-6 mb-8 text-sm font-bold uppercase tracking-widest text-gray-400">
               <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
               <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
               <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">{post.title}</h1>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 max-w-5xl -mt-12 mb-16">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src={post.image} alt={post.title} className="w-full h-auto" />
          </div>
        </div>

        {/* Post Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Sidebar Share */}
            <aside className="lg:w-16 flex lg:flex-col gap-4 lg:sticky lg:top-32 h-fit">
              <span className="text-xs font-black uppercase text-gray-400 tracking-tighter hidden lg:block mb-2">Share</span>
              <button className="p-3 rounded-full bg-gray-50 hover:bg-salesforce hover:text-white text-gray-400 transition-all"><Linkedin className="w-5 h-5" /></button>
              <button className="p-3 rounded-full bg-gray-50 hover:bg-salesforce hover:text-white text-gray-400 transition-all"><Twitter className="w-5 h-5" /></button>
              <button className="p-3 rounded-full bg-gray-50 hover:bg-salesforce hover:text-white text-gray-400 transition-all"><Facebook className="w-5 h-5" /></button>
            </aside>

            {/* Body */}
            <div className="flex-grow prose prose-lg max-w-none prose-navy prose-headings:font-bold prose-a:text-salesforce">
              <div 
                dangerouslySetInnerHTML={{ __html: post.content }} 
                className="space-y-8 text-gray-700 leading-relaxed text-lg"
              />
              
              {/* Post Footer */}
              <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-4">
                  <img src="https://picsum.photos/seed/author/100/100" className="w-16 h-16 rounded-full border-2 border-salesforce" alt={post.author} />
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Written By</p>
                    <h4 className="text-xl font-bold text-navy">{post.author}</h4>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link to="/contact" className="px-8 py-3 bg-salesforce text-white rounded-full font-bold hover:bg-navy transition-all">Contact Author</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="mt-24 py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h3 className="text-3xl font-bold text-navy mb-12">Related Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map(p => (
              <Link key={p.id} to={`/blog/${p.id}`} className="group bg-white p-6 rounded-[2rem] flex gap-6 items-center border border-transparent hover:border-salesforce/20 shadow-sm hover:shadow-xl transition-all">
                <div className="w-32 h-32 shrink-0 rounded-2xl overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                   <h4 className="text-lg font-bold text-navy leading-tight mb-2 group-hover:text-salesforce transition-colors">{p.title}</h4>
                   <p className="text-sm text-gray-500 mb-2">{p.date}</p>
                   <span className="text-xs font-bold text-salesforce flex items-center gap-1">Read Article <ChevronRight className="w-3 h-3" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Internal CTA */}
      <section className="container mx-auto px-4 max-w-4xl mt-24">
        <div className="bg-salesforce rounded-[3rem] p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Need help with your Salesforce strategy?</h3>
          <p className="text-white/80 mb-8">Our experts can help you implement the strategies discussed in this article.</p>
          <Link to="/contact" className="inline-flex px-8 py-4 bg-navy text-white rounded-full font-bold hover:bg-white hover:text-navy transition-all">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
