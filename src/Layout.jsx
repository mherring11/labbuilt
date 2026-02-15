import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Footer from './components/shared/Footer';
import ChatWidget from './components/shared/ChatWidget';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Start', path: 'Home' },
    { name: 'Programs', path: 'Services' },
    { name: 'Spring Break Camp', path: 'spring-break-speed-camp' },
    { name: 'Philosophy', path: 'About' },
    { name: 'Results', path: 'Results' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69234111cd92a5db1dcb3e37/dc9181a0c_logo.png"
                alt="The Lab"
                className="h-12 group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`font-semibold transition-colors ${
                    currentPageName === item.path
                      ? 'text-amber-600'
                      : 'text-slate-900 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 rounded-xl">
                  Start Evaluation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-900 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200">
            <nav className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={createPageUrl(item.path)}
                  className={`block font-semibold py-2 transition-colors ${
                    currentPageName === item.path
                      ? 'text-amber-600'
                      : 'text-slate-900 hover:text-amber-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={createPageUrl('Contact')}>
                <Button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl">
                  Start Evaluation
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
}