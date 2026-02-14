import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    client_name: 'Lauren L.',
    quote: "We couldn’t be happier with the progress our 11-year-old son has made since training with Coach Herring. In a relatively short amount of time, we’ve seen a noticeable improvement in his endurance, speed, and agility.",
    rating: 5,
  },
  // Add more testimonials here as needed
];

export default function Results() {
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real transformations from real people. See what's possible when you commit to your fitness journey with expert guidance and support.
          </p>
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Client Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-black text-xl">
                    {testimonial.client_name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{testimonial.client_name}</div>
                  </div>
                </div>
                <div className="flex mb-2">
                  {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-xs leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
