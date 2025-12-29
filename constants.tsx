
import React from 'react';
import { 
  Cloud, 
  Code, 
  RefreshCcw, 
  Database, 
  Cpu, 
  Settings, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { Service, NavItem, Testimonial, TeamMember, BlogPost, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'implementation',
    icon: <Cloud className="w-8 h-8" />,
    title: 'Salesforce Implementation',
    shortDescription: 'Expert setup of Sales, Service, and Experience Clouds to drive business efficiency.',
    fullDescription: `A successful Salesforce implementation is about more than just technology—it's about aligning your CRM with your business goals. We specialize in end-to-end implementation of Sales Cloud, Service Cloud, and Experience Cloud. Our methodology ensures that your team adopts the platform quickly and effectively.`,
    process: ['Discovery & Requirements Gathering', 'Environment Configuration', 'User Acceptance Testing (UAT)', 'Final Launch & Support'],
    timeline: '4-12 weeks depending on complexity',
    pricing: 'Starting at $10,000',
    benefits: ['Faster deployment times', 'Industry best practices', 'Smooth user adoption'],
  },
  {
    id: 'development',
    icon: <Code className="w-8 h-8" />,
    title: 'Custom Development & Automation',
    shortDescription: 'Tailored Apex and LWC solutions with advanced Flow automation for your unique needs.',
    fullDescription: 'When out-of-the-box features aren\'t enough, our development team steps in. We build high-performance Lightning Web Components (LWC), robust Apex triggers, and complex Flow automations that transform standard Salesforce into a custom-built power engine for your specific workflows.',
    process: ['Technical Architecture Design', 'Code Development', 'Security Review', 'Deployment'],
    timeline: 'Variable based on scope',
    pricing: 'Request a custom quote',
    benefits: ['Bespoke functionality', 'Enterprise-grade scalability', 'Reduced manual workloads'],
  },
  {
    id: 'integration',
    icon: <RefreshCcw className="w-8 h-8" />,
    title: 'Integration Services',
    shortDescription: 'Seamlessly connect Salesforce with ERP, Marketing, and Accounting systems.',
    fullDescription: 'Siloed data is the enemy of productivity. We build seamless integrations between Salesforce and your existing tech stack, including SAP, NetSuite, Marketo, QuickBooks, and Shopify. Whether via REST API or middleware like MuleSoft, we ensure your data flows smoothly across the enterprise.',
    process: ['System Mapping', 'API Development', 'Data Validation', 'Sync Monitoring'],
    timeline: '6-14 weeks',
    pricing: 'Starting at $15,000',
    benefits: ['Unified data view', 'Eliminated manual data entry', 'Real-time reporting'],
  },
  {
    id: 'migration',
    icon: <Database className="w-8 h-8" />,
    title: 'Data Migration & Management',
    shortDescription: 'Legacy CRM migration and data cleaning with zero downtime and total accuracy.',
    fullDescription: 'Moving to Salesforce shouldn\'t be painful. We handle complex data migrations from Excel, legacy CRMs, and SQL databases. Our process includes deep data cleansing, deduplication, and mapping to ensure that your new Salesforce instance starts with pristine, reliable information.',
    process: ['Data Audit', 'Cleansing & Deduplication', 'Trial Migration', 'Full Import'],
    timeline: '2-6 weeks',
    pricing: 'Starting at $5,000',
    benefits: ['100% data integrity', 'Zero downtime transition', 'Simplified data structures'],
  },
  {
    id: 'ai-solutions',
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI & Agentforce Implementation',
    shortDescription: 'Leverage Einstein and Agentforce for predictive analytics and intelligent chatbots.',
    fullDescription: 'Step into the future with Salesforce AI. We implement Einstein Analytics and Agentforce to bring predictive insights and autonomous agents into your workflow. From sentiment analysis to automated customer service agents, we help you leverage AI to stay ahead of the competition.',
    process: ['AI Strategy Planning', 'Data Preparation', 'Model Configuration', 'Agent Training'],
    timeline: '8-16 weeks',
    pricing: 'Starting at $20,000',
    benefits: ['Proactive decision making', '24/7 autonomous support', 'Hyper-personalized customer experiences'],
  },
  {
    id: 'managed-services',
    icon: <Settings className="w-8 h-8" />,
    title: 'Managed Services & Support',
    shortDescription: 'Ongoing optimization and support to keep your Salesforce instance running at its peak.',
    fullDescription: 'Salesforce is not a set-it-and-forget-it platform. Our managed services provide monthly retainers for ongoing optimization, release management (Spring, Summer, Winter), and on-demand user support. We act as your fractional Salesforce admin and developer team.',
    process: ['Instance Health Check', 'Monthly Roadmapping', 'Standard Support Requests', 'Release Planning'],
    timeline: 'Ongoing (Monthly)',
    pricing: 'Packages: Basic, Pro, Enterprise',
    benefits: ['Fixed monthly costs', 'Always-optimized platform', 'Reduced technical debt'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    title: 'COO',
    company: 'FinTech Dynamics',
    content: 'SalesforceTroopAi transformed our sales process. Our team productivity increased by 40% within the first three months of implementation.',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Michael Chen',
    title: 'Director of IT',
    company: 'Global Retail Solutions',
    content: 'The AI integration they provided via Agentforce has been a game changer for our customer service department. Highly professional and deeply technical.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
  },
  {
    name: 'Jessica Ramos',
    title: 'Marketing Manager',
    company: 'GrowthScale Inc.',
    content: 'Our data migration was complex, but the TroopAi team handled it with zero downtime. We finally have a single source of truth for our marketing data.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Alex Thompson',
    title: 'CEO & Founder',
    bio: '15 years of Salesforce architecture experience with a passion for leveraging AI to solve complex business problems.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000',
  },
  {
    name: 'Priya Sharma',
    title: 'CTO',
    bio: 'Salesforce Certified Technical Architect (CTA) specializing in complex integrations and AI development.',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800&h=1000',
  },
  {
    name: 'David Wilson',
    title: 'Lead Consultant',
    bio: 'Expert in business process mapping and ensuring that Salesforce implementations align with C-level objectives.',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=1000',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Customer Success Manager',
    bio: 'Dedicated to ensuring our clients see maximum ROI and user adoption across all their Salesforce clouds.',
    photo: 'https://images.unsplash.com/photo-1598550874175-4d0fe4a2c906?auto=format&fit=crop&q=80&w=800&h=1000',
  },
];

export const FAQS: FAQItem[] = [
  { category: 'General', question: 'What is SalesforceTroopAi?', answer: 'We are a premier Salesforce consulting partner focused on delivering AI-powered CRM solutions that drive measurable business growth.' },
  { category: 'General', question: 'Are you a certified Salesforce Partner?', answer: 'Yes, we are official Salesforce Certified Partners with certifications spanning Architecture, Development, and Administration.' },
  { category: 'General', question: 'Do you work with small businesses?', answer: 'We serve companies of all sizes, from growing startups needing their first CRM to Fortune 500 enterprises optimizing complex global instances.' },
  { category: 'General', question: 'What is your typical project timeline?', answer: 'Implementation projects typically last 4 to 12 weeks, while smaller custom development tasks can be completed in 1-3 weeks.' },
  { category: 'General', question: 'Do you offer remote services?', answer: 'We are a remote-first team capable of serving clients globally, with key hubs in North America and Europe.' },
  
  { category: 'Services', question: 'What Salesforce Clouds do you support?', answer: 'We support Sales Cloud, Service Cloud, Experience Cloud, Marketing Cloud, and Health Cloud.' },
  { category: 'Services', question: 'Can you help with Agentforce setup?', answer: 'Absolutely. We are early adopters of Agentforce and specialize in building autonomous AI agents for customer service and sales.' },
  { category: 'Services', question: 'Do you provide training for our users?', answer: 'Yes, every implementation includes a comprehensive training package for both end-users and administrators.' },
  { category: 'Services', question: 'What types of systems can you integrate with?', answer: 'We integrate Salesforce with ERPs (SAP, NetSuite), Marketing Automation (HubSpot, Marketo), Accounting (QuickBooks), and custom APIs.' },
  { category: 'Services', question: 'What is "Custom Development" in Salesforce?', answer: 'It involves using Apex, Lightning Web Components, and advanced automation logic to build features not available in standard Salesforce.' },

  { category: 'Pricing', question: 'How much does a typical implementation cost?', answer: 'Starter implementations begin at $10,000. Complex enterprise projects are custom-quoted based on requirements.' },
  { category: 'Pricing', question: 'Do you offer fixed-price or hourly billing?', answer: 'We prefer fixed-price projects for clarity, but offer hourly billing or monthly retainers for ongoing managed services.' },
  { category: 'Pricing', question: 'Is training included in the pricing?', answer: 'Standard training is included in our Professional and Enterprise tiers. For Starter, basic documentation is provided.' },
  { category: 'Pricing', question: 'Are there any hidden fees?', answer: 'No. All costs are outlined in our initial proposal. Salesforce license fees are paid directly to Salesforce and are separate from our services.' },
  { category: 'Pricing', question: 'What is your payment structure?', answer: 'Typically 40% upfront, 40% at key milestone, and 20% upon final delivery/launch.' },

  { category: 'Support', question: 'What happens after the project is live?', answer: 'We provide post-launch support for 30-90 days depending on your package. We also offer ongoing Managed Services.' },
  { category: 'Support', question: 'What is a Managed Services retainer?', answer: 'A monthly agreement where we provide a set number of hours for maintenance, updates, and new feature development.' },
  { category: 'Support', question: 'How do we contact support during a project?', answer: 'All clients get access to our dedicated project management portal and a Slack channel for real-time communication.' },
  { category: 'Support', question: 'Do you handle Salesforce releases?', answer: 'Yes, as part of our managed services, we review and prepare your instance for the three major Salesforce releases each year.' },
  { category: 'Support', question: 'Can you fix a broken Salesforce instance?', answer: 'Yes, we offer "Rescue Projects" to clean up technical debt and fix broken automations in existing instances.' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'salesforce-implementation-guide',
    title: 'Complete Guide to Salesforce Implementation in 2025',
    excerpt: 'Master the complexities of a modern Salesforce rollout with our comprehensive step-by-step framework.',
    date: 'Jan 15, 2025',
    author: 'Alex Thompson',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=400',
    content: `
      <h2>The Future of CRM Implementation</h2>
      <p>In 2025, a Salesforce implementation is no longer just a database migration; it's a strategic digital transformation. As businesses become more data-driven, the pressure to get the initial setup right has never been higher. This guide breaks down the critical phases of a successful rollout.</p>
      
      <h3>Phase 1: Strategic Discovery</h3>
      <p>Before touching a single setting in Salesforce, you must define "success." We start by interviewing stakeholders across sales, marketing, and customer service. What are the KPIs? Is it pipeline velocity? Case resolution time? Data accuracy? Without clear goals, your implementation will lack direction.</p>
      
      <h3>Phase 2: Data Architecture & Prep</h3>
      <p>Clean data is the lifeblood of Salesforce. This phase involves auditing your current data sources. We often find that 20-30% of legacy CRM data is redundant or inaccurate. Clean it before you move it. This is also where we define your object model—standard objects like Accounts and Leads, or custom objects for specific industry needs.</p>
      
      <h3>Phase 3: Configuration & Automation</h3>
      <p>Now the magic happens. We configure the UI (Lightning App Builder), set up security profiles, and build the "engine" using Salesforce Flow. In 2025, Flow is the primary tool for automation. We aim to replace manual tasks like lead assignment and follow-up reminders with robust, automated logic.</p>
      
      <h3>Phase 4: Testing (UAT)</h3>
      <p>User Acceptance Testing is where your actual team tries to "break" the system. We provide testing scripts that cover everyday scenarios. Feedback here is crucial—it's much easier to fix a workflow now than it is after thousands of records have been created.</p>
      
      <h3>Phase 5: Deployment & Adoption</h3>
      <p>The "Go-Live" is just the beginning. We focus heavily on adoption strategies. This includes gamification of CRM usage, executive sponsorship, and "Office Hours" where users can get immediate help. Remember: Salesforce is only valuable if people use it.</p>
      
      <h3>Phase 6: Continuous Improvement</h3>
      <p>Post-launch, we review the metrics against the KPIs defined in Phase 1. This leads to a roadmap for future enhancements, ensuring the platform evolves with your business.</p>
    `,
  },
  {
    id: 'agentforce',
    title: 'Agentforce: The New Era of Salesforce Artificial Intelligence',
    excerpt: 'Discover how autonomous agents are changing the customer service and sales landscape forever.',
    date: 'Feb 02, 2025',
    author: 'Priya Sharma',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400',
    content: `
      <h2>Beyond Chatbots: Meet Agentforce</h2>
      <p>For years, we've talked about AI as a tool that helps humans work better. With the launch of Agentforce, Salesforce has shifted the paradigm. We are moving from "Copilots" to "Autonomous Agents."</p>
      
      <h3>What is Agentforce?</h3>
      <p>Agentforce is a suite of autonomous AI agents that can perform tasks, make decisions, and interact with customers or employees without constant human intervention. Unlike traditional chatbots that follow rigid "if-then" trees, Agentforce uses generative AI to understand intent and context.</p>
      
      <h3>The Architecture of Autonomy</h3>
      <p>At the core of Agentforce is the "Atlas Reasoning Engine." This engine allows the agent to look at your Salesforce data, understand the customer's history, and decide on the best course of action. It doesn't just suggest a reply; it can actually book an appointment, process a return, or update a lead score.</p>
      
      <h3>Key Use Cases for 2025</h3>
      <ul>
        <li><strong>Service Agent:</strong> Handling high-volume inquiries like "Where is my order?" or "How do I reset my password?" with human-level empathy and context.</li>
        <li><strong>Sales Development Agent:</strong> Nurturing leads by answering technical questions and automatically scheduling meetings for your human sales reps.</li>
        <li><strong>Merchant Agent:</strong> Assisting e-commerce shoppers with product recommendations based on past purchases and current inventory levels.</li>
      </ul>
      
      <h3>Security and Trust</h3>
      <p>A major concern with AI is "hallucination" and data privacy. Salesforce's Einstein Trust Layer ensures that your data never leaves your secure environment to train public models. Every interaction is grounded in your specific business data, ensuring accuracy and compliance.</p>
      
      <h3>How to Prepare</h3>
      <p>To leverage Agentforce, you need a solid data foundation (Data Cloud). Your data must be accessible and clean. We recommend starting with one high-impact use case, like tier-1 customer support, before scaling to other departments.</p>
    `,
  },
  {
    id: 'salesforce-roi-first-year',
    title: 'ROI of Salesforce: What to Expect in Your First Year',
    excerpt: 'A data-backed breakdown of the costs, gains, and milestones you should target in year one.',
    date: 'Feb 10, 2025',
    author: 'David Wilson',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=400',
    content: `
      <h2>Measuring the Value of Transformation</h2>
      <p>One of the most common questions from CEOs is: "When will this pay for itself?" Salesforce is a significant investment. Understanding the ROI timeline is critical for setting expectations and securing internal buy-in.</p>
      
      <h3>The Cost Breakdown</h3>
      <p>Your first-year investment typically includes three buckets: Salesforce License Fees (Direct to Salesforce), Implementation Fees (Consulting Partner), and Internal Resource Costs (Your team's time). While the upfront implementation fee is a one-time cost, the licenses and managed support are recurring.</p>
      
      <h3>The Revenue Impact</h3>
      <p>Our data shows that a well-implemented Sales Cloud can increase win rates by 15-20% through better lead tracking and automated follow-ups. If your average deal size is $10k, even a 5% increase in win rate can often cover the entire implementation cost within 6 months.</p>
      
      <h3>Efficiency Gains (The Hidden ROI)</h3>
      <p>How much is an hour of your salesperson's time worth? Automation typically saves 4-6 hours per week per user by eliminating manual data entry and report generation. For a team of 20 people, that's 4,000+ hours of "recovered" selling time per year.</p>
      
      <h3>Real ROI Milestones</h3>
      <ul>
        <li><strong>Month 1-3:</strong> Focus on "Data Visibility." The ROI here is transparency—knowing exactly where every lead and case stands.</li>
        <li><strong>Month 4-6:</strong> Focus on "Process Efficiency." This is where automation starts saving hours and case resolution times drop.</li>
        <li><strong>Month 7-12:</strong> Focus on "Predictive Growth." With 6 months of data, you can now forecast revenue accurately and identify which marketing channels are actually driving sales.</li>
      </ul>
      
      <h3>Maximizing Your Return</h3>
      <p>The biggest ROI killers are poor user adoption and "stale" configuration. Investing in ongoing training and periodic system audits ensures that you are getting the most out of every license dollar. Companies that use a managed services partner typically see 25% higher ROI than those that try to "DIY" their administration.</p>
    `,
  },
];
