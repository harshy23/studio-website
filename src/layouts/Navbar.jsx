import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import { LogoPrimary } from '../logos';

const navItems = [
  { name: 'Home', href: '#home' },
  // { name: 'Services', href: '#services' },
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Reviews', href: '#testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Section observer to update active nav state
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Target middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'showcase', 'about', 'services', 'projects', 'testimonials', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'py-4 bg-white-bg/60 backdrop-blur-md border-b border-dark-border/40'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <img
              src={LogoPrimary}
              alt="Studio Biscut logo"
              className="w-14 h-12 rounded-3xl bg-white/5 border border-white/10 object-cover shadow-lg shadow-primary/10"
            />
            {/* <span className="font-heading font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
              Studio Biscut
            </span> */}
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Magnetic key={item.name} strength={0.2}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-sm font-medium tracking-wide transition-colors relative py-1 px-3 ${activeSection === item.href.slice(1)
                    ? 'text-secondary'
                    : 'text-dark-muted hover:text-secondary'
                    }`}
                >
                  {item.name}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full" />
                  )}
                </a>
              </Magnetic>
            ))}
          </div>

          {/* Action Button (Desktop) */}
          {/* <div className="hidden md:block"> */}
          {/* <Magnetic strength={0.3}> */}
          {/* <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-primary-light py-2.5 px-5 rounded-full text-xs font-semibold tracking-wider uppercase text-white flex items-center gap-1.5 20 border-4 border-primary-light hover:border-secondary/85 transition-all duration-300"
            >
              Let's Talk
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </a> */}
          {/* </Magnetic> */}
          {/* </div> */}

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-primary transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav >

      {/* Mobile Menu Overlay */}
      < div
        className={`fixed inset-0 z-40 bg-dark-bg/95 backdrop-blur-xl border-l border-dark-border md:hidden transition-all duration-500 ease-in-out flex flex-col justify-center px-8 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`
        }
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-3xl font-heading font-semibold hover:text-primary transition-colors text-slate-200"
              style={{
                transitionDelay: `${idx * 50}ms`
              }}
            >
              {item.name}
            </a>
          ))}
          <div className="h-[1px] bg-dark-border/60 my-4" />
          {/* <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full text-center py-4 bg-primary text-white font-heading font-semibold rounded-xl hover:bg-primary-dark transition-colors"
          >
            Start a Project
          </a> */}
        </div>
      </div >
    </>
  );
}
