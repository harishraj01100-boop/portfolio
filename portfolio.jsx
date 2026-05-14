import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, ChevronDown, Code, Database, Smartphone, Globe, Award, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Intersection observer for fade-in animations
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          section.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'Python', 'C++', 'JavaScript', 'PHP', 'MySQL'],
    web: ['HTML5', 'CSS3', 'React', 'REST APIs', 'WordPress'],
    mobile: ['Flutter', 'Android Studio', 'Firebase'],
    tools: ['Git', 'GitHub', 'Figma', 'Visual Studio', 'cPanel']
  };

  const projects = [
    {
      title: 'Billing System Management',
      type: 'Full-Stack Application',
      description: 'Cross-platform billing application built with Flutter for Android, iOS, and Web with comprehensive invoice and customer management.',
      tech: ['Flutter', 'MySQL', 'REST API'],
      features: [
        'Invoice, quotation & receipt management',
        'Customer database with CRUD operations',
        'Optimized MySQL schema design',
        'Cross-platform deployment (Android/iOS/Web)'
      ],
      link: '#'
    },
    {
      title: 'College Website',
      type: 'WordPress Development',
      description: 'Responsive college website with custom theme development and SEO optimization.',
      tech: ['WordPress', 'HTML5', 'CSS3', 'JavaScript', 'cPanel'],
      features: [
        'Custom theme with HTML/CSS/JS',
        'Integrated contact forms & SEO plugins',
        'Mobile-responsive design',
        'cPanel deployment & management'
      ],
      link: '#'
    }
  ];

  const experience = [
    {
      company: 'Pentagon Innovations',
      role: 'Flutter Developer',
      period: 'Dec 2025 – Apr 2026',
      type: 'Internship',
      icon: <Smartphone className="w-5 h-5" />
    },
    {
      company: 'Folkus Network',
      role: 'Web Developer',
      period: 'Jun 2025 – Aug 2025',
      type: 'Internship',
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              HARISH RAJ T
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-amber-600 ${
                    activeSection === item.toLowerCase() ? 'text-amber-600' : 'text-slate-700'
                  }`}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in-section mb-6">
            <div className="inline-block px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-8">
              <span className="text-amber-700 font-medium text-sm tracking-wide">AVAILABLE FOR FULL-TIME ROLES</span>
            </div>
          </div>
          
          <h1 className="fade-in-section text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight" style={{ animationDelay: '0.1s' }}>
            Full-Stack Developer
            <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              Building Scalable Solutions
            </span>
          </h1>
          
          <p className="fade-in-section text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: '0.2s' }}>
            MCA Graduate specializing in cross-platform development, database optimization, 
            and creating user-centric applications with clean, maintainable code.
          </p>
          
          <div className="fade-in-section flex flex-wrap justify-center gap-4 mb-16" style={{ animationDelay: '0.3s' }}>
            <a 
              href="mailto:harishraj01100@gmail.com"
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="https://github.com/harishraj01100-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('about')}
              className="animate-bounce"
            >
              <ChevronDown className="w-8 h-8 text-slate-400" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in-section text-4xl font-bold text-slate-900 mb-16 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold text-amber-400 mb-6">Professional Summary</h3>
                <p className="text-slate-200 leading-relaxed mb-6">
                  Enthusiastic MCA graduate with expertise in Full-stack development, problem-solving, 
                  and database management. Proficient in building scalable, high-performance web applications 
                  with a strong emphasis on clean code and user-centric design.
                </p>
                <p className="text-slate-200 leading-relaxed">
                  Passionate about continuous learning and delivering impactful solutions in a collaborative 
                  environment. Currently seeking full-time opportunities to contribute to innovative projects.
                </p>
              </div>
            </div>
            
            <div className="fade-in-section" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Education</h4>
                    <p className="text-slate-700">Masters in Computer Applications</p>
                    <p className="text-slate-500 text-sm">SRM Institute of Science and Technology (May 2026)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Code className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Specialization</h4>
                    <p className="text-slate-700">Flutter Development • Full-Stack Web • Database Design</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Experience</h4>
                    <p className="text-slate-700">2 Internships in Flutter & Web Development</p>
                    <p className="text-slate-500 text-sm">Pentagon Innovations • Folkus Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in-section text-4xl font-bold text-white mb-16 text-center">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in-section bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Languages</h3>
              </div>
              <ul className="space-y-3">
                {skills.languages.map((skill) => (
                  <li key={skill} className="text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="fade-in-section bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Web Development</h3>
              </div>
              <ul className="space-y-3">
                {skills.web.map((skill) => (
                  <li key={skill} className="text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="fade-in-section bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Mobile & Cloud</h3>
              </div>
              <ul className="space-y-3">
                {skills.mobile.map((skill) => (
                  <li key={skill} className="text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="fade-in-section bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold text-white">Tools & Platforms</h3>
              </div>
              <ul className="space-y-3">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-slate-200 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in-section text-4xl font-bold text-slate-900 mb-16 text-center">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="fade-in-section bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-amber-600 font-medium text-sm">{project.type}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-slate-600 text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-slate-900 text-white text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="fade-in-section text-center mt-12" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://github.com/harishraj01100-boop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in-section text-4xl font-bold text-slate-900 mb-16 text-center">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div 
                key={exp.company}
                className="fade-in-section bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-amber-50 rounded-xl">
                    {exp.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <p className="text-amber-600 font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-slate-500">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="fade-in-section text-4xl font-bold text-white mb-8">
            Let's Build Something Together
          </h2>
          
          <p className="fade-in-section text-xl text-slate-300 mb-12" style={{ animationDelay: '0.1s' }}>
            Available for full-time roles in Full-Stack Development. Let's discuss how I can contribute to your team.
          </p>
          
          <div className="fade-in-section grid md:grid-cols-3 gap-6 mb-12" style={{ animationDelay: '0.2s' }}>
            <a 
              href="mailto:harishraj01100@gmail.com"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium mb-1">Email</p>
              <p className="text-slate-300 text-sm">harishraj01100@gmail.com</p>
            </a>
            
            <a 
              href="tel:+919092890495"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium mb-1">Phone</p>
              <p className="text-slate-300 text-sm">+91 9092890495</p>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/harishraj25/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <Linkedin className="w-8 h-8 text-amber-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-white font-medium mb-1">LinkedIn</p>
              <p className="text-slate-300 text-sm">harishraj25</p>
            </a>
          </div>
          
          <div className="fade-in-section" style={{ animationDelay: '0.3s' }}>
            <p className="text-slate-400 text-sm">
              Based in Chennai, Tamil Nadu • Open to relocation
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400 mb-4">
            © 2026 Harish Raj T. Built with React & Tailwind CSS.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/harishraj01100-boop" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/harishraj25/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:harishraj01100@gmail.com" className="text-slate-400 hover:text-amber-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=Work+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'Work Sans', sans-serif;
        }
        
        h1, h2, h3 {
          font-family: 'Crimson Pro', serif;
        }
        
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
