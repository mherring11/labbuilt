import React, { useState } from 'react';

const DAYS = [
  { label: 'March 9', value: '2026-03-09' },
  { label: 'March 10', value: '2026-03-10' },
  { label: 'March 11', value: '2026-03-11' },
  { label: 'March 12', value: '2026-03-12' },
];


export default function SpringBreakCampRegister() {
  const [form, setForm] = useState({
    parent_name: '',
    email: '',
    phone: '',
    athlete_name: '',
    athlete_age: '',
    time_slot: '',
    camp_option: '',
    selected_days: [],
    notes: '',
    consent: false,
  });
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    if (form.camp_option === 'full_week') {
      setTotal(120);
    } else if (form.camp_option === 'per_day') {
      setTotal(30 * form.selected_days.length);
    } else {
      setTotal(0);
    }
  }, [form.camp_option, form.selected_days]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'selected_days') {
      setForm((prev) => ({
        ...prev,
        selected_days: checked
          ? [...prev.selected_days, value]
          : prev.selected_days.filter((d) => d !== value),
      }));
    } else if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration submitted! (Backend logic not yet implemented)');
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white flex flex-col items-center py-10 px-2">
      <div className="w-full max-w-xl bg-[#181818] rounded-3xl shadow-2xl p-0 overflow-hidden border border-[#222]">
        {/* Gold Accent Bar */}
        <div className="h-3 w-full bg-[#F5C400] mb-0" />
        <div className="p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-2 tracking-tight" style={{letterSpacing: '0.04em'}}>Spring Break Camp Registration</h1>
          <div className="text-center text-[#F5C400] font-bold text-lg mb-6">March 9–12</div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-1">Parent/Guardian Name *</label>
                <input name="parent_name" value={form.parent_name} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-1">Email *</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-1">Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-1">Athlete Name *</label>
                <input name="athlete_name" value={form.athlete_name} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-1">Athlete Age *</label>
                <input name="athlete_age" type="number" min="7" max="16" value={form.athlete_age} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none" />
              </div>
              <div>
                <label className="block font-bold mb-1">Time Slot *</label>
                <select name="time_slot" value={form.time_slot} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none">
                  <option value="">Select...</option>
                  <option value="10:30-11:30">10:30–11:30</option>
                  <option value="11:30-12:30">11:30–12:30</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-bold mb-1">Camp Option *</label>
                <select name="camp_option" value={form.camp_option} onChange={handleChange} required className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none">
                  <option value="">Select...</option>
                  <option value="full_week">Full Week ($120)</option>
                  <option value="per_day">Per-Day ($30 per session)</option>
                </select>
              </div>
              {form.camp_option === 'per_day' && (
                <div>
                  <label className="block font-bold mb-1">Select Days *</label>
                  <div className="flex flex-wrap gap-3">
                    {DAYS.map((day) => (
                      <label key={day.value} className="flex items-center gap-2 font-semibold">
                        <input
                          type="checkbox"
                          name="selected_days"
                          value={day.value}
                          checked={form.selected_days.includes(day.value)}
                          onChange={handleChange}
                          className="accent-[#F5C400] w-5 h-5"
                        />
                        <span>{day.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <label className="block font-bold mb-1">Notes (optional)</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} className="w-full rounded-lg px-3 py-2 text-black font-semibold border-2 border-[#222] focus:border-[#F5C400] focus:outline-none min-h-[48px]" />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consent"
                checked={form.consent}
                onChange={handleChange}
                required
                className="accent-[#F5C400] w-5 h-5"
              />
              <span className="text-sm">I agree to the training waiver and acknowledge participation risk. *</span>
            </div>
            <div className="text-xl font-extrabold text-[#F5C400] text-center tracking-wide mt-2">Total: ${total}</div>
            <button type="submit" className="w-full bg-[#F5C400] hover:bg-yellow-400 text-black font-extrabold py-4 px-8 rounded-xl text-lg shadow-lg transition mt-2 tracking-wide uppercase">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
