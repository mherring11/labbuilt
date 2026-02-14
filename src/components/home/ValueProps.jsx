import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronRight } from 'lucide-react';

const features = [
  'Personalized Fitness Assessments',
  'Custom Training Programs',
  'Progress Tracking and Milestone Celebrations',
  'Nutrition Guidance for Sustainable Results'
];

export default function ValueProps() {
  return (
    <section className="py-12 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
              ACHIEVE RESULTS WITH<br />
              WORKOUTS THAT WORK{' '}
              <span className="text-amber-400">FOR YOU</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-6 md:mt-10 mb-6 md:mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold text-lg px-8 py-6 rounded-xl">
                BEGIN YOUR JOURNEY
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80"
              alt="Training equipment"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}