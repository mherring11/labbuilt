import React from 'react';
import { Button } from '@/components/ui/button';
import { Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CoachBio() {
  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69234111cd92a5db1dcb3e37/def5606fb_coach-mike.jpg"
                alt="Coach Mike"
                className="w-full h-[300px] md:h-[450px] object-cover object-[center_20%]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-4 md:p-8">
                <h4 className="text-xl md:text-3xl font-black text-white">Coach Mike</h4>
              </div>
            </div>

          </div>

          {/* Content */}
          <div>
            <h2 className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 md:mb-4">
              Meet Your Coach
            </h2>
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-3 md:mb-4 leading-tight">
              Developing Strong, Confident Young Athletes
            </h3>
            
            <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
              My mission is to help young athletes build strength, confidence, and movement skills that translate directly to sports and life. At The Lab, training is designed to support long-term development — not just short-term fatigue.
            </p>

            <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">
              Every program is structured around proper movement mechanics, age-appropriate strength training, and progressive skill development. Whether your athlete needs to improve speed, coordination, or overall athleticism, sessions are designed with purpose and progression.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
              {[
                { icon: Award, label: 'Youth Performance Specialist' },
                { icon: Zap, label: 'Speed & Agility Coach' }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 md:gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
                    </div>
                    <span className="font-bold text-slate-900 text-sm md:text-base">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link to={createPageUrl('About')}>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-6 py-4 md:px-8 md:py-6 text-sm md:text-base">
                  Meet Your Coach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}