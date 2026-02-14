import React from 'react';
import { ClipboardCheck, Activity, FileText, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Athlete Evaluation',
    description: "We assess your athlete's movement, coordination, speed, and strength to understand their current development level."
  },
  {
    number: '02',
    icon: Activity,
    title: 'Movement & Mechanics Training',
    description: 'Athletes learn proper running, jumping, landing, and change-of-direction mechanics — the foundation for safe, explosive performance.'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Strength & Power Development',
    description: 'We build age-appropriate strength and explosive power that transfers directly to sports performance.'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ongoing Progression & Coaching',
    description: 'Athletes continue progressing through structured training phases with coaching, feedback, and performance tracking.'
  }
];

export default function Process() {
  return (
    <section className="py-8 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-wider mb-2 md:mb-4">
            How It Works
          </h2>
          <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-2 md:mb-4">
            The Lab Development Process
          </h3>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            A structured step-by-step system designed to develop stronger, faster, more confident young athletes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="relative group">
                {/* Connecting Line (desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-amber-400 to-transparent" />
                )}

                <div className="relative bg-white rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-100 h-full">
                  <div className="absolute -top-3 md:-top-6 left-4 md:left-8 bg-gradient-to-br from-amber-400 to-yellow-500 w-8 h-8 md:w-12 md:h-12 rounded-xl flex items-center justify-center font-black text-white shadow-lg text-xs md:text-base">
                    {step.number}
                  </div>

                  <div className="mt-4 md:mt-6 mb-3 md:mb-6">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-amber-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 md:w-8 md:h-8 text-amber-600" />
                    </div>
                  </div>

                  <h4 className="text-sm md:text-xl font-bold text-slate-900 mb-2 md:mb-3">{step.title}</h4>
                  <p className="text-xs md:text-base text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}