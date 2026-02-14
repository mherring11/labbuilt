import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-10" />
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69234111cd92a5db1dcb3e37/33e86f828_bootcamp-cones.jpg"
          alt="Bootcamp training"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-20 text-center">

        {/* Brand Slogan */}
        <div className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-widest mb-6">
          Built in The Lab. Validated by Effort.
        </div>

        <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white mb-8 md:mb-12 leading-tight">
          Youth Performance Training That Builds Stronger, Faster, More Confident Athletes
        </h1>

        <div className="flex justify-center">
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 py-4 md:px-10 md:py-7 rounded-xl shadow-2xl shadow-amber-400/20 transition-all hover:scale-105 hover:shadow-amber-400/40 text-base md:text-lg">
              Start Your Athlete's Evaluation
              <ChevronRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </Link>
        </div>
      </div>


    </section>
  );
}