import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-900 pt-12 md:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Brand - Centered */}
        <div className="text-center mb-10 lg:mb-16">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69234111cd92a5db1dcb3e37/dc9181a0c_logo.png"
              alt="The Lab"
              className="h-12 md:h-14"
            />
          </div>
          <p className="text-slate-600 text-sm md:text-base font-medium">
            Built in The Lab, Validated by Effort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="font-black text-slate-900 mb-6 text-base md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Start', page: 'Home' },
                { name: 'Programs', page: 'Services' },
                { name: 'Philosophy', page: 'About' },
                { name: 'Results', page: 'Testimonials' },
                { name: 'Contact', page: 'Contact' }
              ].map((item) => (
                <li key={item.page}>
                  <Link
                    to={createPageUrl(item.page)}
                    className="text-slate-600 hover:text-amber-600 transition-colors text-sm md:text-base font-medium group inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="text-center lg:text-left">
            <h4 className="font-black text-slate-900 mb-6 text-base md:text-lg">
              Location
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-700 font-medium">San Antonio, TX 78260</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center lg:text-left">
            <h4 className="font-black text-slate-900 mb-6 text-base md:text-lg">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <a href="tel:+12102841082" className="text-sm text-slate-700 font-medium hover:text-amber-600 transition-colors">
                    (210) 284-1082
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <a href="mailto:support@labbuilt210.com" className="text-sm text-slate-700 font-medium hover:text-amber-600 transition-colors break-words">
                    support@labbuilt210.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="text-center lg:text-left">
            <h4 className="font-black text-slate-900 mb-6 text-base md:text-lg">
              Follow Us
            </h4>
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61571518048845"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Facebook className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
              <a
                href="https://www.instagram.com/thelab210/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 hover:bg-amber-400 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-slate-900" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs md:text-sm text-slate-500">
          <div>© {new Date().getFullYear()} The Lab. All rights reserved.</div>
          <div className="flex gap-4 md:gap-6">
            <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}