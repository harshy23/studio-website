import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';
import { LogoPrimary } from '../logos';

const navItems = [
  // { name: 'Home', path: '/' },
  { name: 'Work', path: '/work' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? 'py-4 bg-white-bg/60'
          : 'py-6 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={LogoPrimary}
              alt="Studio Biscut logo"
              className="w-14 h-12 rounded-3xl bg-white/5 border border-white/10 object-cover shadow-lg shadow-primary/10"
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Magnetic key={item.name} strength={0.2}>
                  <Link
                    to={item.path}
                    className={`text-sm font-medium tracking-wide transition-colors relative text-black py-1 px-3 ${active
                      ? 'text-secondary font-semibold'
                      : 'text-black hover:text-secondary'
                      }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-primary rounded-full" />
                    )}
                  </Link>
                </Magnetic>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-primary transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 text-black z-40 bg-dark-bg/95 backdrop-blur-xl border-l border-dark-border md:hidden transition-all duration-500 ease-in-out flex flex-col justify-center px-8 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
      >
        <div className="flex flex-col gap-6">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-3xl font-heading font-semibold transition-colors ${isActive(item.path) ? 'text-primary' : 'text-slate-200 hover:text-primary'
                }`}
              style={{
                transitionDelay: `${idx * 50}ms`,
              }}
            >
              {item.name}
            </Link>
          ))}
          <div className="h-[1px] bg-dark-border/60 my-4" />
        </div>
      </div>
    </>
  );
}
