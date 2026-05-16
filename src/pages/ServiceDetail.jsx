import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowUpRight, Rocket, Shield, Zap, BarChart3, Globe, Code, Bot, Megaphone, Cloud, Smartphone, Target, TrendingUp, Users, Clock, MessageSquare, ShoppingCart, Server, Workflow, Search, PenTool, Database, Lock } from 'lucide-react';

const servicesData = {
  'web-development': {
    title: 'Web Development',
    subtitle: 'Building Digital Experiences That Convert',
    description: 'Your website is often the first interaction customers have with your brand. We build websites that not only look professional but also drive real business results. Our development process focuses on performance, user experience, and conversion optimization.',
    fullDescription: 'In today\'s digital age, your website is your most important business asset. It works 24/7, reaching customers across the globe while you focus on running your business. Our web development services are designed to help you capture more leads, increase sales, and build brand authority.',
    whyChoose: [
      'Performance-optimized code that loads fast',
      'Mobile-first design for all devices',
      'SEO-friendly architecture',
      'Secure and reliable infrastructure',
      'Easy content management',
      'Integration with your existing tools'
    ],
    features: [
      { icon: <Globe />, title: 'Corporate Websites', desc: 'Professional websites that establish your brand presence' },
      { icon: <ShoppingCart />, title: 'E-commerce Solutions', desc: 'Online stores that drive sales and revenue' },
      { icon: <Code />, title: 'Custom Web Apps', desc: 'Tailored applications for specific business needs' },
      { icon: <PenTool />, title: 'UI/UX Design', desc: 'User-centered design that converts visitors' },
      { icon: <Search />, title: 'SEO Optimization', desc: 'Built-in search engine optimization' },
      { icon: <Server />, title: 'CMS Development', desc: 'Easy-to-manage content systems' }
    ],
    process: [
      { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and target audience' },
      { step: '02', title: 'Strategy', desc: 'We create a detailed plan aligned with your objectives' },
      { step: '03', title: 'Design', desc: 'We design intuitive user interfaces that engage' },
      { step: '04', title: 'Development', desc: 'We build with clean, maintainable code' },
      { step: '05', title: 'Testing', desc: 'We ensure everything works perfectly' },
      { step: '06', title: 'Launch', desc: 'We deploy and monitor for optimal performance' }
    ],
    color: '#0D6EFD'
  },
  'app-development': {
    title: 'App Development',
    subtitle: 'Mobile Apps That Engage Your Customers',
    description: 'Mobile apps have become essential for business success. We create mobile experiences that keep your customers engaged and coming back. Whether you need iOS, Android, or cross-platform apps, we deliver solutions that work seamlessly.',
    fullDescription: 'With over 3 billion smartphone users worldwide, mobile apps have become a critical channel for reaching and engaging customers. Our app development team builds applications that not only look great but also provide real value to your users, helping you build lasting relationships and drive business growth.',
    whyChoose: [
      'Native performance for each platform',
      'Intuitive user interfaces',
      'Offline functionality',
      'Push notifications for engagement',
      'Analytics integration',
      'App store optimization'
    ],
    features: [
      { icon: <Smartphone />, title: 'iOS Development', desc: 'Native iPhone and iPad apps' },
      { icon: <Smartphone />, title: 'Android Development', desc: 'Native Android applications' },
      { icon: <Code />, title: 'React Native', desc: 'Cross-platform with single codebase' },
      { icon: <Code />, title: 'Flutter Apps', desc: 'Beautiful native UI on any device' },
      { icon: <PenTool />, title: 'App UI/UX', desc: 'Design that users love' },
      { icon: <Rocket />, title: 'App Launch', desc: 'Full submission support' }
    ],
    process: [
      { step: '01', title: 'Requirements', desc: 'We gather detailed specifications' },
      { step: '02', title: 'Design', desc: 'We create engaging UI/UX' },
      { step: '03', title: 'Development', desc: 'We build with best practices' },
      { step: '04', title: 'Testing', desc: 'We ensure quality across devices' },
      { step: '05', title: 'Submission', desc: 'We handle app store process' },
      { step: '06', title: 'Support', desc: 'We provide ongoing maintenance' }
    ],
    color: '#3B82F6'
  },
  'software-development': {
    title: 'Software Development',
    subtitle: 'Custom Solutions for Complex Challenges',
    description: 'Every business has unique needs that off-the-shelf software can\'t address. We build custom software solutions that perfectly fit your requirements, helping you streamline operations and achieve your business goals.',
    fullDescription: 'Generic software solutions often require you to change your processes to fit the software. Our custom software development flips this around - we build software that fits your exact processes. This means faster adoption, better efficiency, and real return on your investment.',
    whyChoose: [
      'Solutions built specifically for your needs',
      'Full ownership of the code',
      'Seamless integration with existing systems',
      'Scalable as your business grows',
      'Dedicated support and maintenance',
      'Competitive advantage'
    ],
    features: [
      { icon: <Users />, title: 'CRM Systems', desc: 'Customer relationship management' },
      { icon: <BarChart3 />, title: 'ERP Solutions', desc: 'Enterprise resource planning' },
      { icon: <Database />, title: 'Data Dashboards', desc: 'Real-time business insights' },
      { icon: <Workflow />, title: 'Workflow Automation', desc: 'Streamline business processes' },
      { icon: <Server />, title: 'API Development', desc: 'Connect your systems' },
      { icon: <Lock />, title: 'Legacy Modernization', desc: 'Upgrade old systems' }
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'We understand your requirements' },
      { step: '02', title: 'Planning', desc: 'We design the solution architecture' },
      { step: '03', title: 'Development', desc: 'We build with agile methodology' },
      { step: '04', title: 'Testing', desc: 'We ensure quality and security' },
      { step: '05', title: 'Deployment', desc: 'We launch and integrate' },
      { step: '06', title: 'Training', desc: 'We ensure your team can use it' }
    ],
    color: '#1D4ED8'
  },
  'ai-automation': {
    title: 'AI & Automation',
    subtitle: 'Smart Solutions That Save Time & Money',
    description: 'Automate repetitive tasks, provide instant customer support, and make data-driven decisions with our AI and automation solutions. We help you work smarter, not harder.',
    fullDescription: 'Manual processes cost your business time and money. Our AI automation services eliminate repetitive tasks, provide instant responses to customers, and uncover insights from your data. The result? Your team focuses on high-value work while automation handles the rest.',
    whyChoose: [
      'Reduce operational costs significantly',
      '24/7 availability for customer support',
      'Faster response times',
      'Scalable operations',
      'Continuous learning and improvement',
      'Data-driven insights'
    ],
    features: [
      { icon: <MessageSquare />, title: 'AI Chatbots', desc: 'Intelligent customer support bots' },
      { icon: <Bot />, title: 'Voice Assistants', desc: 'Voice-controlled automation' },
      { icon: <Workflow />, title: 'Workflow Automation', desc: 'Automate business processes' },
      { icon: <Target />, title: 'Lead Generation AI', desc: 'Smart lead qualification' },
      { icon: <BarChart3 />, title: 'Data Analysis', desc: 'AI-powered insights' },
      { icon: <Zap />, title: 'Process Optimization', desc: 'Efficiency improvements' }
    ],
    process: [
      { step: '01', title: 'Analysis', desc: 'We identify automation opportunities' },
      { step: '02', title: 'Design', desc: 'We plan the AI workflow' },
      { step: '03', title: 'Development', desc: 'We build and train models' },
      { step: '04', title: 'Integration', desc: 'We connect with your systems' },
      { step: '05', title: 'Testing', desc: 'We ensure accuracy' },
      { step: '06', title: 'Optimization', desc: 'We continuously improve' }
    ],
    color: '#2563EB'
  },
  'digital-marketing': {
    title: 'Digital Marketing',
    subtitle: 'Growth Strategies That Deliver Results',
    description: 'Grow your business with data-driven marketing strategies. We help you reach the right audience, generate quality leads, and convert visitors into customers.',
    fullDescription: 'Marketing without data is like flying blind. Our digital marketing services are backed by analytics and focused on measurable results. Whether it\'s SEO, paid ads, or social media, every strategy is designed to deliver real return on your investment.',
    whyChoose: [
      'Data-driven decision making',
      'Transparent reporting',
      'Focus on ROI',
      'Custom strategies',
      'Industry expertise',
      'Continuous optimization'
    ],
    features: [
      { icon: <Search />, title: 'SEO', desc: 'Search engine optimization' },
      { icon: <PenTool />, title: 'Content Marketing', desc: 'Valuable content that attracts' },
      { icon: <Target />, title: 'PPC Ads', desc: 'Google and Meta advertising' },
      { icon: <Users />, title: 'Social Media', desc: 'Build engaged communities' },
      { icon: <MessageSquare />, title: 'Email Marketing', desc: 'Nurture and convert leads' },
      { icon: <BarChart3 />, title: 'Analytics', desc: 'Track and optimize performance' }
    ],
    process: [
      { step: '01', title: 'Research', desc: 'We analyze market and competition' },
      { step: '02', title: 'Strategy', desc: 'We create customized plan' },
      { step: '03', title: 'Execution', desc: 'We implement campaigns' },
      { step: '04', title: 'Monitoring', desc: 'We track performance' },
      { step: '05', title: 'Optimization', desc: 'We improve continuously' },
      { step: '06', title: 'Reporting', desc: 'We provide clear insights' }
    ],
    color: '#0D6EFD'
  },
  'cloud-solutions': {
    title: 'Cloud Solutions',
    subtitle: 'Infrastructure That Scales With You',
    description: 'Leverage the power of cloud computing to reduce costs, improve reliability, and scale effortlessly. We help businesses migrate to cloud and optimize their infrastructure.',
    fullDescription: 'Cloud computing has transformed how businesses operate. It offers flexibility, scalability, and cost savings that traditional infrastructure can\'t match. We help you navigate your cloud journey, from migration to optimization, ensuring you get the maximum benefit from cloud technologies.',
    whyChoose: [
      'Reduce infrastructure costs',
      'Improve reliability and uptime',
      'Scale on demand',
      'Enhanced security',
      'Better collaboration',
      'Disaster recovery'
    ],
    features: [
      { icon: <Cloud />, title: 'Cloud Migration', desc: 'Move to cloud seamlessly' },
      { icon: <Server />, title: 'AWS Services', desc: 'Amazon Web Solutions' },
      { icon: <Cloud />, title: 'Azure Solutions', desc: 'Microsoft Azure expertise' },
      { icon: <Code />, title: 'DevOps', desc: 'Automated deployments' },
      { icon: <Lock />, title: 'Cloud Security', desc: 'Protect your data' },
      { icon: <Zap />, title: 'Performance', desc: 'Optimized infrastructure' }
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'We evaluate current setup' },
      { step: '02', title: 'Planning', desc: 'We design cloud strategy' },
      { step: '03', title: 'Migration', desc: 'We move smoothly to cloud' },
      { step: '04', title: 'Optimization', desc: 'We tune for performance' },
      { step: '05', title: 'Security', desc: 'We implement safeguards' },
      { step: '06', title: 'Support', desc: 'We provide ongoing maintenance' }
    ],
    color: '#3B82F6'
  }
};

function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-transparent pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[var(--text-color)] mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>Service Not Found</h1>
          <Link to="/services" className="text-[#0D6EFD] font-mono uppercase tracking-widest text-sm hover:underline">Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/services" className="inline-flex items-center text-[var(--text-muted)] hover:text-[#0D6EFD] mb-12 transition-colors font-mono text-xs uppercase tracking-widest">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D6EFD]/10 border border-[#0D6EFD]/30 text-[#0D6EFD] text-[11px] font-bold tracking-[0.2em] uppercase mb-8 font-mono">
            {service.title}
          </div>
          <h1 className="text-4xl md:text-8xl font-black text-[var(--text-color)] tracking-tight mb-10 leading-[1.05]" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            {service.subtitle}
          </h1>
          <p className="max-w-3xl text-[var(--text-color)]/70 text-lg md:text-xl leading-relaxed mb-8">
            {service.description}
          </p>
          <p className="max-w-3xl text-[var(--text-muted)] leading-relaxed mb-16 text-base">
            {service.fullDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-24"
        >
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-10 md:p-16 rounded-none">
            <h2 className="text-2xl md:text-4xl font-black text-[var(--text-color)] mb-12 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>Why Choose Our {service.title} Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.whyChoose.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 bg-[var(--tag-bg)] border border-[var(--tag-border)] rounded-none hover:border-[#0D6EFD]/30 transition-all group">
                  <CheckCircle className="w-5 h-5 text-[#0D6EFD] flex-shrink-0" />
                  <span className="text-[var(--text-muted)] group-hover:text-[var(--text-color)] transition-colors text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-4xl font-black text-[var(--text-color)] mb-12 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div key={i} className="p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-none hover:border-[#0D6EFD]/50 transition-all group">
                <div className="w-14 h-14 rounded-none bg-[var(--tag-bg)] border border-[var(--tag-border)] flex items-center justify-center text-[var(--text-color)] mb-8 group-hover:scale-110 group-hover:bg-[#0D6EFD] group-hover:border-[#0D6EFD] group-hover:text-white transition-all duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-[var(--text-color)] mb-4 group-hover:text-[#0D6EFD] transition-colors" style={{ fontFamily: "'Unbounded', sans-serif" }}>{feature.title}</h3>
                <p className="text-[var(--text-muted)] text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-24"
        >
          <h2 className="text-2xl md:text-4xl font-black text-[var(--text-color)] mb-16 text-center tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>Our Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="text-center p-8 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-none hover:border-[#0D6EFD]/30 transition-all">
                <div className="text-[#0D6EFD] text-4xl font-black mb-4 font-mono">{step.step}</div>
                <h3 className="text-xs font-bold text-[var(--text-color)] mb-3 uppercase tracking-widest font-mono">{step.title}</h3>
                <p className="text-[var(--text-muted)] text-[10px] leading-relaxed uppercase font-bold tracking-wider">{step.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-[var(--card-bg)] border border-[var(--card-border)] p-12 md:p-24 max-w-5xl mx-auto rounded-none">
            <h2 className="text-3xl md:text-6xl font-black text-[var(--text-color)] mb-8 leading-tight tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>Ready to Get <span className="text-[#0D6EFD]">Started?</span></h2>
            <p className="text-[var(--text-muted)] mb-12 max-w-2xl mx-auto font-medium text-lg leading-relaxed">
              Let's discuss your project and how our {service.title.toLowerCase()} services can help you achieve your business goals.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-[#0D6EFD] hover:bg-[#2563EB] text-white font-black px-12 py-6 transition-all rounded-none uppercase tracking-[0.2em] text-[13px] font-mono hover:shadow-[0_0_20px_rgba(217,255,0,0.4)]"
            >
              Start Your Project <ArrowUpRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ServiceDetail;