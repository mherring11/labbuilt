import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data: testimonialsApi = [], isLoading } = useQuery({
    queryKey: ['testimonials-featured'],
    queryFn: () => base44.entities.Testimonial.filter({ featured: true, approved: true }),
    initialData: []
  });

  // Add Lauren L.'s testimonial as a featured testimonial
  const testimonials = [
    {
      client_name: 'Lauren L.',
      quote: "We couldn’t be happier with the progress our 11-year-old son has made since training with Coach Herring. In a relatively short amount of time, we’ve seen a noticeable improvement in his endurance, speed, and agility.",
      rating: 5,
      client_photo_url: '',
      program_type: '',
      featured: true
    },
    ...testimonialsApi
  ];

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  if (isLoading || testimonials.length === 0) {
    return (
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Client Success Stories</h2>
          <p className="text-slate-400">Loading testimonials...</p>
        </div>
      </section>
    );
  }

  const current = testimonials[currentIndex];

  return (
    <section className="py-8 md:py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-wider mb-2 md:mb-3">
            Success Stories
          </h2>
          <h3 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
            Real Results, Real People
          </h3>
        </div>

        <div className="relative bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 pb-20 md:pb-24 shadow-2xl min-h-[400px] md:min-h-[450px] flex flex-col">
          <Quote className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-16 md:h-16 text-amber-400 opacity-20" />
          
          <div className="relative z-10 flex-1 flex flex-col">
            <div className="flex justify-center mb-4 md:mb-6">
              {Array.from({ length: current.rating || 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <blockquote className="text-sm md:text-lg font-medium text-slate-900 text-center mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto flex-1 flex items-center">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-3 md:gap-4">
              {current.client_photo_url && (
                <img
                  src={current.client_photo_url}
                  alt={current.client_name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 md:border-4 border-amber-400"
                />
              )}
              <div className="text-center">
                <div className="font-bold text-slate-900 text-base md:text-lg">{current.client_name}</div>
                {current.program_type && (
                  <div className="text-xs md:text-sm text-slate-600 capitalize">
                    {current.program_type.replace(/_/g, ' ')}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation - Positioned outside the main content */}
          <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full bg-white border-2 border-slate-300 hover:border-amber-400 hover:bg-amber-50 w-12 h-12 md:w-14 md:h-14 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-amber-400 w-8' : 'bg-slate-300 w-2'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full bg-white border-2 border-slate-300 hover:border-amber-400 hover:bg-amber-50 w-12 h-12 md:w-14 md:h-14 shadow-lg"
            >
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}