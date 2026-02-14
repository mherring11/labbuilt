import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Star } from 'lucide-react';
import ContactCTA from '../components/shared/ContactCTA';

export default function Testimonials() {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ['testimonials-all'],
    queryFn: () => base44.entities.Testimonial.filter({ approved: true }),
    initialData: []
  });

  const { data: results = [] } = useQuery({
    queryKey: ['results-all'],
    queryFn: () => base44.entities.Result.filter({ approved: true }),
    initialData: []
  });

  return (
    <div>
      {/* Hero */}
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

      {/* Testimonials Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Client Testimonials</h2>
          
          {isLoading ? (
            <div className="text-center text-slate-600">Loading testimonials...</div>
          ) : testimonials.length === 0 ? (
            <div className="text-center text-slate-600">No testimonials available yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Hardcoded testimonial from Lauren L. */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-black text-2xl">
                    L
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Lauren L.</div>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-700 leading-relaxed mb-4">
                  "We couldn’t be happier with the progress our 11-year-old son has made since training with Coach Herring. In a relatively short amount of time, we’ve seen a noticeable improvement in his endurance, speed, and agility."
                </blockquote>
              </div>
              {/* Render the rest of the testimonials */}
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    {testimonial.client_photo_url ? (
                      <img
                        src={testimonial.client_photo_url}
                        alt={testimonial.client_name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-amber-400"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-black text-2xl">
                        {testimonial.client_name[0]}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.client_name}</div>
                      {testimonial.program_type && (
                        <div className="text-sm text-slate-600 capitalize">
                          {testimonial.program_type.replace(/_/g, ' ')}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <blockquote className="text-slate-700 leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>

                  {testimonial.result_category && (
                    <div className="inline-block bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-bold capitalize">
                      {testimonial.result_category.replace(/_/g, ' ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Results Gallery removed. Only testimonials and ContactCTA remain. */}

      <ContactCTA />
    </div>
  );
}