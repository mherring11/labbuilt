import React from 'react';

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 md:mb-6">
            This Isn't Just Training. This Is Athletic Development.
          </h2>
          
          <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto">
            Most youth programs focus on drills or conditioning. At The Lab, we focus on building better athletes from the ground up. Every session is designed to improve movement quality, strength foundations, coordination, and confidence — the physical tools young athletes need to succeed in any sport.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
          {[
            'Age-appropriate strength training',
            'Proper running, jumping, and landing mechanics',
            'Speed and agility built with purpose',
            'Balance, coordination, and body control',
            'Confidence that carries into competition',
            'Built for long-term athletic development'
          ].map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-2 md:gap-3 bg-slate-50 rounded-xl p-3 md:p-4 shadow-sm border border-slate-200">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0" />
              <span className="text-slate-700 font-semibold text-sm md:text-base">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}