import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Users, Users2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: User,
    title: 'Personal Training',
    price: '$50',
    unit: 'per session',
    features: [
      'One-on-one athlete development',
      'Personalized strength and speed training',
      'Movement mechanics and skill refinement',
      'Progress tracking and performance focus',
      'Dedicated coaching and guidance'
    ],
    popular: false
  },
  {
    icon: Users2,
    title: 'Group Training',
    price: '$30',
    unit: 'per person / session',
    features: [
      '2–6 athletes per group',
      'Small-group performance training',
      'Speed, agility, and strength development',
      'Competitive, high-energy environment',
      'Team accountability and motivation'
    ],
    popular: true
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-3 md:mb-4">
            Athlete Development Paths
          </h2>
          <h3 className="text-2xl md:text-5xl font-black text-slate-900 mb-3 md:mb-6">
            Choose the Right Development Path for Your Athlete
          </h3>
          <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
            Every athlete is at a different stage of development. Whether your child benefits most from focused one-on-one coaching or thrives in a small group environment, The Lab provides structured training designed to build long-term athletic success.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 mb-12 max-w-5xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all group flex flex-col"
              >
                {service.popular && (
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-amber-400 text-slate-900 px-2 md:px-4 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-bold uppercase z-10">
                    Popular
                  </div>
                )}

                <div className="relative h-32 md:h-48 overflow-hidden bg-gradient-to-br from-amber-400 to-amber-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="w-12 h-12 md:w-24 md:h-24 text-slate-900" />
                  </div>
                </div>

                <div className="p-4 md:p-8 flex flex-col flex-1">
                  <h4 className="text-base md:text-2xl font-bold text-slate-900 mb-2">{service.title}</h4>

                  <div className="mb-4 md:mb-6">
                    <span className="text-2xl md:text-4xl font-black text-amber-500">{service.price}</span>
                    <span className="text-slate-500 ml-1 md:ml-2 text-xs md:text-base">{service.unit}</span>
                  </div>

                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-8">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start text-slate-600 text-xs md:text-base">
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link to={createPageUrl('Contact')} className="mt-auto">
                    <Button className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl py-3 md:py-6 text-xs md:text-base">
                      Start Evaluation
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to={createPageUrl('Services')}>
            <Button variant="outline" size="lg" className="border-2 border-amber-400 text-amber-500 hover:bg-amber-400 hover:text-slate-900 font-bold rounded-xl px-8">
              View All Programs & Pricing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}