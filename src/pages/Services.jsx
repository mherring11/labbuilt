import React from 'react';
import { Button } from '@/components/ui/button';
import { User, Users2, CheckCircle, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import ContactCTA from '../components/shared/ContactCTA';

const services = [
  {
    icon: User,
    title: 'Personal Training',
    price: '$50',
    unit: 'per session',
    description: 'One-on-one athlete development designed specifically for your goals, fitness level, and performance targets.',
    features: [
      'One-on-one athlete development',
      'Personalized strength and speed training',
      'Movement mechanics and skill refinement',
      'Progress tracking and performance focus',
      'Dedicated coaching and guidance'
    ],
    useIconBackground: true,
    popular: false
  },
  {
    icon: Users2,
    title: 'Group Training',
    price: '$30',
    unit: 'per person / session',
    description: 'Small group performance training that combines individual attention with the energy of training with peers.',
    features: [
      '2-6 athletes per group',
      'Small-group performance training',
      'Speed, agility, and strength development',
      'Competitive, high-energy environment',
      'Team accountability and motivation'
    ],
    useIconBackground: true,
    popular: true
  }
];

const packages = [
  {
    name: 'Personal Training',
    sessions: '8 sessions/month',
    price: 380,
    savings: 'Save $20',
    description: 'Most popular option for consistent athletic development with one-on-one coaching',
    features: [
      '8 personal training sessions',
      'Detailed training plan',
      'Bi-weekly progress check-ins',
      'Performance assessments',
      'Video analysis',
      'Text support between sessions'
    ],
    recommended: false,
    type: 'personal'
  },
  {
    name: 'Group Training',
    sessions: '8 sessions/month',
    price: 220,
    savings: 'Save $20',
    description: 'Cost-effective monthly group training with small group energy and accountability',
    features: [
      '8 group training sessions',
      '2-6 athletes per group',
      'Speed & agility focus',
      'Strength development',
      'Team accountability',
      'Progress tracking',
      'Competitive environment'
    ],
    recommended: true,
    type: 'group'
  }
];



export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
            alt="Training"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Programs & Pricing
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Choose the right development path for your athlete. From focused one-on-one training to competitive small group sessions — every program is designed to build long-term athletic success.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div
                  key={idx}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative ${!isEven ? 'lg:order-2' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-400 px-8 py-2.5 rounded-full font-black text-sm uppercase shadow-xl z-20">
                        Most Popular
                      </div>
                    )}
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                      {service.useIconBackground ? (
                        <div className="w-full h-[500px] bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 flex items-center justify-center">
                          <Icon className="w-48 h-48 text-slate-900/40" />
                        </div>
                      ) : (
                        <>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        </>
                      )}
                      
                      {/* Badge Overlay */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[calc(100%-4rem)]">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 text-center shadow-xl">
                          <div className="text-sm font-bold text-slate-600 uppercase tracking-wider mb-1">
                            Starting at
                          </div>
                          <div className="text-3xl font-black text-slate-900">{service.price}</div>
                          <div className="text-sm text-slate-600">{service.unit}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:order-1' : ''}>

                    <h2 className="text-4xl font-black text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{service.description}</p>

                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex justify-center lg:justify-start">
                      <Link to={createPageUrl('Contact')}>
                        <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl px-8">
                          Get Started
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Monthly Training Packages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-amber-600 uppercase tracking-wider mb-4">
              Personal & Group Training
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              Monthly Training Packages
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Save more when you commit to regular training. All packages can be customized to fit your schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl shadow-xl border-2 ${
                  pkg.recommended ? 'border-amber-400 scale-105' : 'border-slate-200'
                } transition-all hover:shadow-2xl`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-slate-900 text-amber-400 px-6 py-2 rounded-full font-bold text-sm uppercase shadow-lg z-10">
                    Most Popular
                  </div>
                )}

                <div className="p-8 pt-10">
                  <h4 className="text-2xl font-black text-slate-900 mb-2">{pkg.name}</h4>
                  <div className="text-sm text-slate-600 mb-6">{pkg.sessions}</div>

                  <div className="mb-6">
                    <span className="text-5xl font-black text-slate-900">${pkg.price}</span>
                    <span className="text-slate-600 ml-2">/month</span>
                    {pkg.savings && (
                      <div className="text-green-600 font-bold text-sm mt-2">{pkg.savings}</div>
                    )}
                  </div>

                  <p className="text-slate-600 mb-8">{pkg.description}</p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={createPageUrl('Contact')}>
                    <Button
                      className={`w-full font-bold rounded-xl py-6 ${
                        pkg.recommended
                          ? 'bg-amber-400 hover:bg-amber-500 text-slate-900'
                          : 'bg-slate-900 hover:bg-slate-800 text-white'
                      }`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}