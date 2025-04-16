'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-card-bg/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="relative group">
              <span className="text-xl font-bold text-gradient">
                Jonathan Yue
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <NavLink href="/" active={pathname === '/'}>
              Resume
            </NavLink>
            <NavLink href="/projects" active={pathname === '/projects'}>
              Projects
            </NavLink>
            <NavLink href="/contact" active={pathname === '/contact'}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  active: boolean;
  children: React.ReactNode;
}

const NavLink = ({ href, active, children }: NavLinkProps) => {
  return (
    <Link 
      href={href} 
      className={`relative font-medium transition-colors duration-300 py-1 ${
        active ? 'text-accent' : 'text-foreground hover:text-accent'
      }`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-accent transform transition-transform duration-300 ${
        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </Link>
  );
};

export default Navbar; 