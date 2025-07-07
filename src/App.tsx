import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Linkedin as LinkedIn, Github, Calendar, GraduationCap, Award, Code, Cloud, Server, Globe, Download, User, BookOpen, Target, Menu, X, GitBranchPlusIcon } from 'lucide-react';
import profileImage from './assets/shime.png';

<img 
  src={profileImage} 
  alt="Shimelis Techane" 
  className="w-full h-full object-cover"
/>

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['about', 'experience', 'education', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['about', 'experience', 'education', 'skills', 'contact'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold text-gray-900">
              Shimelis Techane
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium capitalize relative ${
                    activeSection === section ? 'text-blue-600' : ''
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                {navItems.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`text-left px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors font-medium capitalize ${
                      activeSection === section ? 'text-blue-600 bg-blue-50' : ''
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={`order-2 lg:order-1 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                  Hi, I'm <span className="text-blue-600">Shimelis</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 mb-6 font-light">
                  Senior MuleSoft Developer & Technical Educator
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                  Experienced software developer with 7+ years in the industry, specializing in MuleSoft integration, 
                  enterprise software development, and technical education. Passionate about building scalable solutions 
                  and sharing knowledge through teaching.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <Download size={20} />
                  <span className="font-medium">Download Resume</span>
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Mail size={20} />
                  <span className="font-medium">Get In Touch</span>
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">7+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">150+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
            
            <div className={`order-1 lg:order-2 flex justify-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="../dist/assets/shime.png?auto=compress&cs=tinysrgb&w=800" 
                    alt="Shimelis Techane" 
                    className="w-full h-full object-cover"
                  />
                  
                </div>
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <Code size={24} className="text-gray-800" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <GraduationCap size={20} className="text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {[
              { 
                icon: User, 
                color: 'blue', 
                title: 'Who I Am', 
                desc: 'A dedicated software developer with a strong background in Information Systems and extensive experience in both academic and industry settings.' 
              },
              { 
                icon: Target, 
                color: 'green', 
                title: 'What I Do', 
                desc: 'I specialize in MuleSoft integration, enterprise software development, and technical education, helping organizations build scalable solutions.' 
              },
              { 
                icon: BookOpen, 
                color: 'purple', 
                title: 'My Passion', 
                desc: 'I believe in continuous learning and sharing knowledge, which is why I\'ve combined my technical expertise with teaching the next generation of developers.' 
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mb-6`}>
                  <item.icon size={32} className={`text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { icon: MapPin, color: 'blue', title: 'Location', value: 'Addis Ababa, Ethiopia' },
                { icon: Calendar, color: 'green', title: 'Experience', value: '7+ Years' },
                { icon: Code, color: 'purple', title: 'Specialization', value: 'Full-Stack Development' },
                { icon: GraduationCap, color: 'orange', title: 'Education', value: 'BSc Information Systems' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={24} className={`text-${item.color}-600`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm lg:text-base">{item.title}</h4>
                  <p className="text-gray-600 text-sm lg:text-base">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              My journey through various roles in academia and industry, building expertise in software development and technical education.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {[
                {
                  title: 'MuleSoft Lecturer',
                  company: 'Evangadi Tech',
                  period: '2023 - Present (1.5 years)',
                  color: 'blue',
                  icon: GraduationCap,
                  tasks: [
                    'Designed and delivered comprehensive MuleSoft training programs for students and professionals',
                    'Created practical lab exercises and real-world integration scenarios',
                    'Mentored 150+ students in MuleSoft development best practices',
                    'Developed curriculum covering API-led connectivity, DataWeave, and enterprise integration patterns'
                  ]
                },
                {
                  title: 'MuleSoft Developer',
                  company: 'Freelancer',
                  period: '2021 - 2023 (2 years)',
                  color: 'green',
                  icon: Cloud,
                  tasks: [
                    'Developed and deployed 20+ integration solutions for various clients',
                    'Specialized in API development, system integration, and data transformation',
                    'Worked with clients across banking, retail, and healthcare sectors',
                    'Implemented secure, scalable integration architectures using MuleSoft Anypoint Platform'
                  ]
                },
                {
                  title: 'Software Developer',
                  company: 'Commercial Bank of Ethiopia',
                  period: '2017 - 2021 (4 years)',
                  color: 'purple',
                  icon: Code,
                  tasks: [
                    'Developed and maintained core banking applications serving millions of customers',
                    'Built RESTful APIs and microservices for digital banking platforms',
                    'Collaborated with cross-functional teams to deliver critical financial software',
                    'Implemented security measures and compliance standards for banking systems'
                  ]
                },
                {
                  title: 'Assistant Lecturer',
                  company: 'Salale University',
                  period: '2019 - 2021 (2 years)',
                  color: 'orange',
                  icon: Award,
                  tasks: [
                    'Taught computer science courses to undergraduate students',
                    'Supervised student projects and research initiatives',
                    'Developed course materials and conducted practical lab sessions',
                    'Mentored students in programming fundamentals and software development'
                  ]
                }
              ].map((job, index) => (
                <div key={index} className="relative lg:ml-20">
                  <div className={`absolute -left-14 top-8 w-6 h-6 bg-${job.color}-600 rounded-full border-4 border-white shadow-lg hidden lg:block`}></div>
                  <div className={`bg-gradient-to-r from-${job.color}-50 to-white p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-${job.color}-100`}>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                        <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-${job.color}-100 rounded-xl flex items-center justify-center`}>
                          <job.icon size={24} className={`text-${job.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{job.title}</h3>
                          <p className={`text-${job.color}-600 font-semibold text-base lg:text-lg`}>{job.company}</p>
                        </div>
                      </div>
                      <div className={`bg-${job.color}-600 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-full text-sm font-medium self-start lg:self-center`}>
                        {job.period}
                      </div>
                    </div>
                    <ul className="text-gray-700 space-y-2 lg:space-y-3 text-base lg:text-lg">
                      {job.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-${job.color}-600 rounded-full mt-2 lg:mt-3 flex-shrink-0`}></div>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="bg-white p-6 lg:p-10 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
              <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap size={40} className="text-white" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Bachelor of Science in Information Systems</h3>
                <p className="text-blue-600 font-semibold text-lg lg:text-xl mb-4">Wolkite University</p>
                <p className="text-gray-600 text-base lg:text-lg mb-8">Graduated: June 2019</p>
                
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-base lg:text-lg">Core Subjects:</h4>
                    <div className="space-y-3">
                      {['Database Management Systems', 'Software Engineering', 'Data Structures & Algorithms', 'Web Development'].map((subject, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm lg:text-base">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 text-base lg:text-lg">Specializations:</h4>
                    <div className="space-y-3">
                      {['System Analysis & Design', 'Network Security', 'Project Management', 'Business Information Systems'].map((spec, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700 text-sm lg:text-base">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various technologies and platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Integration & APIs',
                icon: Globe,
                color: 'blue',
                skills: [
                  { name: 'MuleSoft', level: 95, label: 'Expert' },
                  { name: 'REST APIs', level: 85, label: 'Advanced' },
                  { name: 'SOAP', level: 80, label: 'Advanced' },
                  { name: 'DataWeave', level: 90, label: 'Expert' }
                ]
              },
              {
                title: 'Programming',
                icon: Code,
                color: 'green',
                skills: [
                  { name: 'Java', level: 85, label: 'Advanced' },
                  { name: 'JavaScript', level: 80, label: 'Advanced' },
                  { name: 'Python', level: 70, label: 'Intermediate' },
                  { name: 'C#', level: 65, label: 'Intermediate' }
                ]
              },
              {
                title: 'Technologies',
                icon: Server,
                color: 'purple',
                skills: [
                  { name: 'Spring Boot', level: 85, label: 'Advanced' },
                  { name: 'React', level: 70, label: 'Intermediate' },
                  { name: 'Docker', level: 65, label: 'Intermediate' },
                  { name: 'AWS', level: 50, label: 'Basic' }
                ]
              }
            ].map((category, categoryIndex) => (
              <div key={categoryIndex} className={`bg-gradient-to-br from-${category.color}-50 to-${category.color}-100 p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-${category.color}-200 md:col-span-1 ${categoryIndex === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center space-x-4 mb-6 lg:mb-8">
                  <div className={`w-12 h-12 lg:w-16 lg:h-16 bg-${category.color}-600 rounded-xl flex items-center justify-center shadow-lg`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-4 lg:space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-800 font-medium text-sm lg:text-base">{skill.name}</span>
                        <span className={`text-${category.color}-600 font-bold text-sm lg:text-base`}>{skill.label}</span>
                      </div>
                      <div className={`w-full bg-${category.color}-200 rounded-full h-2 lg:h-3 overflow-hidden`}>
                        <div 
                          className={`bg-${category.color}-600 h-2 lg:h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{width: `${skill.level}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or simply connecting with fellow developers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Contact Information</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, color: 'blue', title: 'Email', value: 'shimelis.techane@email.com' },
                  { icon: Phone, color: 'green', title: 'Phone', value: '+251 910 750 228' },
                  { icon: MapPin, color: 'purple', title: 'Location', value: 'Addis Ababa, Ethiopia' },
                  { icon: LinkedIn, color: 'blue', title: 'LinkedIn', value: 'https://www.linkedin.com/in/shimelis-techane-137338183/' },
                  { icon: GitBranchPlusIcon, color: 'blue', title: 'GitHub', value: 'https://github.com/shimebet' }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 lg:space-x-6">
                    <div className={`w-12 h-12 lg:w-14 lg:h-14 bg-${contact.color}-100 rounded-xl flex items-center justify-center`}>
                      <contact.icon size={20} className={`text-${contact.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm lg:text-base">{contact.title}</h4>
                      <p className="text-gray-600 text-sm lg:text-base">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 lg:p-10 rounded-2xl shadow-lg">
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or how we can work together..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 lg:py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-base lg:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl lg:text-2xl font-bold mb-2">Shimelis Techane</h3>
              <p className="text-gray-400 text-sm lg:text-base">Senior MuleSoft Developer & Technical Educator</p>
            </div>
            <div className="flex space-x-4 lg:space-x-6">
              {[LinkedIn, Github, Mail].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center">
            <p className="text-gray-400 text-sm lg:text-base">
              © 2024 Shimelis Techane. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;