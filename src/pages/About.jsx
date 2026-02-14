import React from 'react';
import { Award, Heart, Target, TrendingUp, Users, Zap } from 'lucide-react';
import ContactCTA from '../components/shared/ContactCTA';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69234111cd92a5db1dcb3e37/def5606fb_coach-mike.jpg"
            alt="Coach Mike"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Meet Coach Mike
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Building young athletes through movement, strength, and confidence—not just workouts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-4xl font-black text-slate-900 mb-6">My Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              My mission is to develop young athletes who are strong, confident, and prepared for any sport or life challenge. Through personalized training and small group sessions, I help athletes build a foundation of proper movement, strength, speed, and mental toughness.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Personal training is about individual athlete development—crafting a program tailored to each young athlete's goals, sport, and current fitness level. Whether they're preparing for their season, recovering from injury, or looking to gain a competitive edge, every session is designed to maximize their athletic potential.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Group training provides a competitive, high-energy environment where 2-6 athletes train together. It's perfect for young athletes who thrive on competition and accountability while developing speed, agility, and strength alongside their peers.
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-2xl mb-12">
              <p className="text-xl font-semibold text-slate-900 italic">
                "Every young athlete has untapped potential. My job is to help them discover it through proper training, smart programming, and consistent effort. Athletic development isn't about shortcuts—it's about building athletes who are prepared for any challenge."
              </p>
            </div>

            <h2 className="text-4xl font-black text-slate-900 mb-6">My Approach</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Athletic development is about more than just working hard—it's about working smart. At The Lab, we focus on age-appropriate training that builds proper movement patterns, improves coordination, and develops real athletic skills that translate to any sport.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Every young athlete I train learns the fundamentals: how to move efficiently, build strength safely, develop speed and agility, and maintain balance and coordination under pressure. But more importantly, they build confidence, discipline, and a love for training that sets them up for long-term athletic success.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-white mb-8 text-center">Core Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Athletic Development',
                  description: 'Every program focuses on building well-rounded athletes through proper movement, strength, and sport-specific skills.'
                },
                {
                  icon: Heart,
                  title: 'Long-Term Success',
                  description: 'We prioritize injury prevention, age-appropriate training, and building habits that create lifelong athletes.'
                },
                {
                  icon: Zap,
                  title: 'Youth-Focused',
                  description: 'Training designed specifically for young athletes to build confidence, coordination, and competitive edge.'
                }
              ].map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="w-14 h-14 bg-amber-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-slate-900" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}