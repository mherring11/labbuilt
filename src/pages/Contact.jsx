import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail, Calendar, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    preferred_start_date: '',
    service_type: '',
    goals: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = useMutation({
    mutationFn: async (data) => {
      await base44.entities.ContactSubmission.create({
        ...data,
        status: 'new',
        source: 'website_contact_form'
      });
    },
    onSuccess: () => {
      toast.success('Message sent! We will get back to you within 24 hours.');
      setIsSubmitted(true);
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        preferred_start_date: '',
        service_type: '',
        goals: ''
      });
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    },
    onError: (error) => {
      console.error('Contact form submission error:', error);
      toast.error('Something went wrong. Please try again or email us directly at support@labbuilt210.com');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.full_name || !formData.email || !formData.service_type) {
      toast.error('Please fill in all required fields');
      return;
    }
    submitMutation.mutate(formData);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            Let's Start Your Journey
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to transform your fitness? Get in touch and we'll create a personalized plan to help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Free Session Banner */}
            <div className="lg:col-span-2">
              <div className="bg-amber-50 border-2 border-amber-400 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">Free Session</h4>
                    <p className="text-sm text-slate-600">
                      Every new athlete gets a complimentary first session to discuss goals and create a personalized training plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-8">Start Your Fitness Journey</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="full_name">Full Name *</Label>
                    <Input
                      id="full_name"
                      value={formData.full_name}
                      onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                      placeholder="John Doe"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(210) 555-1234"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="preferred_start_date">Preferred Start Date</Label>
                      <Input
                        id="preferred_start_date"
                        type="date"
                        value={formData.preferred_start_date}
                        onChange={(e) => setFormData({ ...formData, preferred_start_date: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service_type">Service Type *</Label>
                      <Select
                        value={formData.service_type}
                        onValueChange={(value) => setFormData({ ...formData, service_type: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="personal_training">Personal Training</SelectItem>
                          <SelectItem value="group_training">Group Training</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="goals">Tell Us About Your Fitness Goals</Label>
                    <Textarea
                      id="goals"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      placeholder="What do you want to achieve? Share your goals, challenges, and what success looks like for you..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitMutation.isPending || isSubmitted}
                    className={`w-full font-bold text-lg py-6 rounded-xl ${
                      isSubmitted 
                        ? 'bg-green-500 hover:bg-green-500 text-white' 
                        : 'bg-amber-400 hover:bg-amber-500 text-slate-900'
                    }`}
                  >
                    {submitMutation.isPending ? (
                      'Sending...'
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : (
                      'Start My Free Session'
                    )}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    By submitting this form, you will receive a response within 24 hours. We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}