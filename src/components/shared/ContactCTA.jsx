import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function ContactCTA() {
  return (
    <section className="py-8 md:py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
          Ready to Transform Your Fitness Journey?
        </h2>
        <p className="text-sm md:text-lg text-slate-300 mb-6 md:mb-8 max-w-2xl mx-auto">
          Join hundreds of clients who've achieved their fitness goals with personalized training and expert coaching.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
          <Link to={createPageUrl('Contact')} className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm md:text-base px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-2xl shadow-amber-400/20 transition-all hover:scale-105">
              <Calendar className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Book a Free Session
            </Button>
          </Link>
          
          <a href="mailto:support@labbuilt210.com" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-sm md:text-base px-6 py-4 md:px-10 md:py-6 rounded-xl shadow-2xl shadow-amber-400/20 transition-all hover:scale-105">
              <MessageCircle className="mr-2 w-4 h-4 md:w-5 md:h-5" />
              Contact Coach Mike
            </Button>
          </a>
        </div>

        <p className="text-xs md:text-sm text-slate-400 mt-4 md:mt-6">
          Free session • No commitment required • Response within 24 hours
        </p>
      </div>
    </section>
  );
}