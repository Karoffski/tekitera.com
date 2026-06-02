"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ArrowRight, Mail, MapPin, Clock, Users, Award, 
  Code2, Palette, Brain, Rocket, Globe 
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  description: string;
  longDescription: string;
  impact: string;
  tech: string[];
  year: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Lumora",
    client: "EcoForge",
    category: "AI Platform",
    description: "AI-powered sustainability intelligence platform for global enterprises.",
    longDescription: "Lumora helps large organizations measure, reduce, and report their environmental impact with real-time AI insights. We built the entire product from strategy to scalable infrastructure.",
    impact: "Reduced carbon tracking time by 87% for 40+ enterprise clients",
    tech: ["Next.js", "Python", "PostgreSQL", "AWS", "LangChain"],
    year: "2024"
  },
  {
    id: 2,
    title: "Aether",
    client: "Banque Privée Laurent",
    category: "Fintech",
    description: "Premium private banking client portal with seamless wealth management tools.",
    longDescription: "A complete redesign and rebuild of the digital experience for high-net-worth clients. Features real-time portfolio analytics, secure document vault, and personalized advisory workflows.",
    impact: "Increased client engagement by 63% and digital onboarding completion to 94%",
    tech: ["Next.js", "TypeScript", "tRPC", "Prisma", "Plaid"],
    year: "2023"
  },
  {
    id: 3,
    title: "Vesper",
    client: "Studio Atlas",
    category: "Design Systems",
    description: "Collaborative design system and component library powering 12 creative teams.",
    longDescription: "We partnered with Studio Atlas to create a living design system used across web, mobile, and marketing. Includes tokenized foundations, interactive docs, and Figma-to-code automation.",
    impact: "Cut design-to-production time by 55% across the organization",
    tech: ["React", "Storybook", "Tailwind", "Framer Motion", "Figma API"],
    year: "2024"
  },
  {
    id: 4,
    title: "Helios",
    client: "Translogix",
    category: "Logistics",
    description: "Real-time logistics optimization platform for European supply chains.",
    longDescription: "Helios orchestrates complex multi-modal logistics with predictive ETAs, dynamic routing, and automated exception handling. Powers operations for 3 of the top 10 European 3PLs.",
    impact: "Saved clients an average of €2.4M annually in operational costs",
    tech: ["Next.js", "Node.js", "Redis", "TimescaleDB", "Google Maps API"],
    year: "2023"
  }
];

const services = [
  {
    icon: Palette,
    title: "Product Strategy & Design",
    description: "From discovery workshops to pixel-perfect interfaces. We shape ideas into clear, desirable products."
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "High-quality, maintainable codebases built for scale. Web platforms, APIs, and internal tools."
  },
  {
    icon: Globe,
    title: "Web & Mobile Experiences",
    description: "Fast, accessible, beautiful digital products. Marketing sites to complex SaaS applications."
  },
  {
    icon: Brain,
    title: "AI Integration & Automation",
    description: "Thoughtful application of modern AI. RAG systems, intelligent workflows, and automation layers."
  },
  {
    icon: Rocket,
    title: "Digital Transformation",
    description: "End-to-end modernization of legacy systems and processes for ambitious organizations."
  }
];

const stats = [
  { number: "5", label: "Years", suffix: "" },
  { number: "48", label: "Projects shipped", suffix: "" },
  { number: "12", label: "Team members", suffix: "" },
  { number: "94", label: "Client NPS", suffix: "" }
];

export default function Tekitera() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / processing
    await new Promise(resolve => setTimeout(resolve, 900));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after showing success
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 2800);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#22c7a3] selection:text-[#050505]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 rounded-full bg-[#22c7a3] flex items-center justify-center">
              <span className="text-[#050505] font-semibold text-xl tracking-[-1px]">T</span>
            </div>
            <span className="font-semibold tracking-[-0.5px] text-xl">tekitera</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('work')} className="nav-link text-[#a1a1aa] hover:text-white">Work</button>
            <button onClick={() => scrollToSection('services')} className="nav-link text-[#a1a1aa] hover:text-white">Services</button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-[#a1a1aa] hover:text-white">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-[#a1a1aa] hover:text-white">Contact</button>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-primary px-6 py-2.5 rounded-full text-sm flex items-center gap-2"
            >
              Start a project <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[#222] bg-[#050505]"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-lg">
                {[
                  { label: 'Work', id: 'work' },
                  { label: 'Services', id: 'services' },
                  { label: 'About', id: 'about' },
                  { label: 'Contact', id: 'contact' }
                ].map(item => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="text-left py-1 text-[#a1a1aa] active:text-white"
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary mt-4 py-3.5 rounded-full flex items-center justify-center gap-2"
                >
                  Start a project <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section className="pt-20 min-h-[100dvh] flex items-center border-b border-[#111]">
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#222] text-xs tracking-[2px] text-[#71717a] mb-8">
              PARIS • EST. 2021
            </div>
            
            <h1 className="text-6xl md:text-[76px] leading-[0.92] tracking-[-3.2px] font-semibold mb-8">
              We craft digital<br />products that last.
            </h1>
            
            <p className="max-w-lg text-2xl tracking-[-0.4px] text-[#a1a1aa] mb-12">
              Tekitera is a Paris-based studio building thoughtful software and digital experiences for ambitious teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('work')}
                className="btn-primary px-8 h-14 rounded-full text-base flex items-center justify-center gap-3 group"
              >
                Explore our work 
                <ArrowRight className="group-hover:translate-x-0.5 transition" size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-secondary px-8 h-14 rounded-full text-base flex items-center justify-center gap-3"
              >
                Start a conversation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Stats bar */}
      <div className="border-b border-[#111] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <div className="stat-number text-4xl font-semibold tracking-[-1.5px] tabular-nums">
                {stat.number}<span className="text-[#22c7a3]">{stat.suffix}</span>
              </div>
              <div className="text-[#71717a] mt-1 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Work Section */}
      <section id="work" className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#22c7a3] mb-3">SELECTED WORK</div>
            <h2 className="section-heading text-5xl tracking-[-2px] font-semibold">Things we&apos;ve built</h2>
          </div>
          <div className="hidden md:block text-[#a1a1aa] max-w-xs text-right text-sm">
            Every project is a collaboration. We work as an extension of your team.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -2 }}
              onClick={() => openProject(project)}
              className="project-card group cursor-pointer card rounded-3xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="font-mono text-xs text-[#71717a] tracking-[1px]">{project.year} — {project.category.toUpperCase()}</div>
                  <h3 className="text-3xl tracking-[-1.2px] font-semibold mt-3 group-hover:text-[#22c7a3] transition-colors">{project.title}</h3>
                </div>
                <ArrowRight className="mt-2 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
              
              <p className="text-[#a1a1aa] text-[15px] leading-relaxed mb-auto">{project.description}</p>
              
              <div className="pt-8 mt-auto flex items-center justify-between text-xs text-[#71717a]">
                <div>{project.client}</div>
                <div className="font-mono tracking-widest">VIEW CASE →</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 text-sm text-[#71717a]">
          More projects available upon request
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-[#0a0a0a] border-y border-[#111] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-xl mb-12">
            <div className="uppercase tracking-[3px] text-xs text-[#22c7a3] mb-3">WHAT WE DO</div>
            <h2 className="text-5xl tracking-[-2px] font-semibold leading-none">Capabilities that compound.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card rounded-3xl p-8 group">
                  <div className="w-11 h-11 rounded-2xl bg-[#1f1f1f] flex items-center justify-center mb-8 text-[#22c7a3] group-hover:bg-[#22c7a3] group-hover:text-[#050505] transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold text-2xl tracking-[-0.6px] mb-3">{service.title}</h3>
                  <p className="text-[#a1a1aa] leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-x-8 gap-y-12 items-center">
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3px] text-xs text-[#22c7a3] mb-3">OUR STORY</div>
            <h2 className="text-5xl md:text-[52px] tracking-[-2.4px] font-semibold leading-[1.05] mb-8">
              We believe great software<br />is a form of care.
            </h2>
          </div>
          <div className="md:col-span-5 text-lg text-[#a1a1aa] space-y-6 leading-relaxed">
            <p>Tekitera was founded in Paris in 2021 by a small group of engineers and designers who wanted to work differently — slower, deeper, and with more intention.</p>
            <p>We partner with organizations that care about craft, longevity, and the people who use their products. No fluff. No theater. Just rigorous, beautiful work.</p>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-[#222] grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#22c7a3]">
              <Users size={18} />
              <span className="font-medium tracking-widest text-xs">TEAM</span>
            </div>
            <p className="text-[#a1a1aa]">A tight-knit collective of product engineers, designers, and strategists. We work in small teams on every engagement.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#22c7a3]">
              <MapPin size={18} />
              <span className="font-medium tracking-widest text-xs">BASED IN</span>
            </div>
            <p className="text-[#a1a1aa]">Paris, France. We collaborate with clients across Europe and occasionally beyond. Remote-first by default.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4 text-[#22c7a3]">
              <Award size={18} />
              <span className="font-medium tracking-widest text-xs">APPROACH</span>
            </div>
            <p className="text-[#a1a1aa]">We favor long-term partnerships over one-off projects. Most of our clients have worked with us for multiple years.</p>
          </div>
        </div>
      </section>

      {/* Process / Values CTA */}
      <section className="border-y border-[#111] bg-[#0a0a0a] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-[#22c7a3] text-xs tracking-[3px] mb-4">HOW WE WORK</div>
          <h3 className="text-4xl tracking-[-1.5px] font-semibold mb-4">Small teams. Deep focus. Clear outcomes.</h3>
          <p className="text-[#a1a1aa] max-w-md mx-auto">We embed with your team for 3–9 month engagements. Expect weekly demos, transparent process, and software you can be proud of for years.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">
          <div>
            <div className="uppercase tracking-[3px] text-xs text-[#22c7a3] mb-3">LET&apos;S TALK</div>
            <h2 className="text-5xl tracking-[-2.2px] font-semibold leading-none mb-6">Tell us about your project.</h2>
            <p className="text-xl text-[#a1a1aa] max-w-sm">We reply to every serious inquiry within two business days.</p>

            <div className="mt-12 space-y-6 text-sm">
              <a href="mailto:hello@tekitera.fr" className="flex items-center gap-4 group">
                <div className="text-[#22c7a3]"><Mail size={18} /></div>
                <span className="group-hover:text-[#22c7a3] transition">hello@tekitera.fr</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="text-[#22c7a3]"><MapPin size={18} /></div>
                <span>Paris, France</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-[#22c7a3]"><Clock size={18} /></div>
                <span>Usually available for projects starting in 6–10 weeks</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card rounded-3xl p-8 md:p-10">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-[340px] flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#22c7a3]/10 flex items-center justify-center mb-6">
                    <Award className="text-[#22c7a3]" size={32} />
                  </div>
                  <h4 className="text-2xl tracking-tight font-semibold mb-2">Thank you.</h4>
                  <p className="text-[#a1a1aa]">We received your message and will get back to you shortly.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-widest text-[#71717a] mb-2">YOUR NAME</label>
                      <input 
                        type="text" name="name" required value={formData.name} onChange={handleInputChange}
                        className="form-input w-full rounded-2xl px-5 h-12 text-sm" placeholder="Alex Chen"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-widest text-[#71717a] mb-2">EMAIL ADDRESS</label>
                      <input 
                        type="email" name="email" required value={formData.email} onChange={handleInputChange}
                        className="form-input w-full rounded-2xl px-5 h-12 text-sm" placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs tracking-widest text-[#71717a] mb-2">COMPANY OR ORGANIZATION</label>
                    <input 
                      type="text" name="company" value={formData.company} onChange={handleInputChange}
                      className="form-input w-full rounded-2xl px-5 h-12 text-sm" placeholder="Acme Inc."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs tracking-widest text-[#71717a] mb-2">WHAT ARE YOU WORKING ON?</label>
                    <textarea 
                      name="message" required value={formData.message} onChange={handleInputChange}
                      rows={5}
                      className="form-input w-full rounded-3xl px-5 py-4 text-sm resize-y min-h-[120px]" 
                      placeholder="We are rebuilding our customer dashboard and exploring AI features to help users..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full h-14 rounded-2xl mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"} 
                    {!isSubmitting && <ArrowRight size={17} />}
                  </button>
                  <p className="text-center text-[10px] text-[#71717a] pt-1">We respect your time. No spam, ever.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111] bg-[#0a0a0a] py-10 text-xs text-[#71717a]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-3">
          <div>© {new Date().getFullYear()} Tekitera. All rights reserved.</div>
          <div className="flex gap-x-6">
            <a href="https://github.com/Karoffski" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="mailto:hello@tekitera.fr" className="hover:text-white transition">Email</a>
            <span>Paris, France</span>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8 bg-black/90" onClick={closeProject}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.2 }}
              onClick={e => e.stopPropagation()}
              className="bg-[#0a0a0a] border border-[#222] rounded-3xl max-w-3xl w-full overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={closeProject} 
                  className="float-right text-[#71717a] hover:text-white -mr-2 -mt-2 p-2"
                >
                  <X size={22} />
                </button>

                <div className="uppercase font-mono tracking-[2px] text-xs text-[#22c7a3] mb-2">{selectedProject.year} — {selectedProject.category}</div>
                <h3 className="text-5xl tracking-[-1.8px] font-semibold pr-8">{selectedProject.title}</h3>
                <div className="text-[#a1a1aa] mt-1 text-lg">{selectedProject.client}</div>

                <div className="mt-8 prose prose-invert max-w-none">
                  <p className="text-[#e4e4e7] text-[15px] leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div className="mt-9 pt-8 border-t border-[#222] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm">
                  <div>
                    <div className="text-[#71717a] text-xs tracking-widest mb-2.5">THE IMPACT</div>
                    <p className="text-[#e4e4e7]">{selectedProject.impact}</p>
                  </div>
                  <div>
                    <div className="text-[#71717a] text-xs tracking-widest mb-3">TECHNOLOGY</div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="inline-block px-4 py-1 rounded-full border border-[#333] text-[#a1a1aa] text-xs tracking-wide">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#222] px-8 md:px-12 py-5 flex justify-end bg-black/30">
                <button 
                  onClick={closeProject}
                  className="text-sm font-medium text-[#a1a1aa] hover:text-white flex items-center gap-2"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
