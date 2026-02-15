import React from 'react';
import { Link } from 'react-router-dom';


export default function SpringBreakSpeedCamp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/spring-break-camp-group.jpeg"
            alt="Spring Break Camp Group"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center z-10">
          <div className="h-2 w-24 bg-[#F5C400] rounded-full mb-6 mx-auto" />
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight" style={{letterSpacing: '0.06em'}}>
            SPRING BREAK<br />SPEED & AGILITY CAMP
          </h1>
          <div className="inline-block bg-[#F5C400] text-black font-extrabold rounded-full px-5 py-1 text-lg mb-3 mt-3 shadow">March 9 – 12</div>
          <h2 className="text-xl md:text-2xl font-bold mb-4 tracking-wide">4 DAYS. 2 TIME SLOTS. REAL DEVELOPMENT.</h2>
          <div className="text-[#F5C400] font-bold text-base mb-2">Limited spots per session.</div>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-4 mt-2">
            <Link to="/spring-break-speed-camp/register">
              <button className="bg-[#F5C400] hover:bg-yellow-400 text-black font-extrabold py-3 px-8 rounded-xl text-lg shadow transition tracking-wide uppercase">RESERVE YOUR SPOT</button>
            </Link>
            <a href="#camp-details">
              <button className="border-2 border-[#F5C400] text-[#F5C400] font-extrabold py-3 px-8 rounded-xl text-lg shadow transition hover:bg-[#F5C400] hover:text-black bg-transparent tracking-wide uppercase">VIEW DETAILS</button>
            </a>
          </div>
        </div>
      </section>

      {/* Spots Remaining Counter - visually prominent */}
      <section className="w-full flex flex-col items-center bg-gradient-to-r from-slate-100 via-white to-slate-50 py-8">
        <div className="flex flex-col md:flex-row gap-8 text-center w-full max-w-3xl justify-center">
          <div className="flex-1 bg-white border-2 border-[#F5C400] rounded-2xl px-8 py-6 flex flex-col items-center shadow-xl min-w-[220px] transition-all hover:scale-105">
            <div className="text-lg font-extrabold text-[#F5C400] mb-1 tracking-wide">10:30–11:30 Spots Remaining:</div>
            <div className="text-4xl font-black text-slate-900">--</div>
          </div>
          <div className="flex-1 bg-white border-2 border-[#F5C400] rounded-2xl px-8 py-6 flex flex-col items-center shadow-xl min-w-[220px] transition-all hover:scale-105">
            <div className="text-lg font-extrabold text-[#F5C400] mb-1 tracking-wide">11:30–12:30 Spots Remaining:</div>
            <div className="text-4xl font-black text-slate-900">--</div>
          </div>
        </div>
      </section>

      {/* Camp Details Section */}
      <section id="camp-details" className="bg-white text-[#111111] py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-center">Camp Information</h2>
          <ul className="text-lg font-semibold mb-6 space-y-2">
            <li><span className="font-bold">Location:</span> Bulverde Park</li>
            <li><span className="font-bold">Dates:</span> March 9–12</li>
            <li><span className="font-bold">Ages:</span> 7–16</li>
            <li><span className="font-bold">Sessions:</span> 10:30 AM – 11:30 AM <span className="mx-2">|</span> 11:30 AM – 12:30 PM</li>
          </ul>
          <div className="mb-6">
            <div className="text-lg font-bold mb-1">Pricing:</div>
            <div className="mb-1">Full Camp (All 4 Days): <span className="font-bold text-[#F5C400]">$120</span> per athlete</div>
            <div>Per-Day Drop-In Option: <span className="font-bold text-[#F5C400]">$30</span> per session</div>
            <div className="text-sm text-slate-600 mt-1">Select full week or choose specific days during registration.</div>
          </div>
          <div className="mb-6">
            <div className="text-lg font-bold mb-1">Payment Method:</div>
            <div>Venmo only<br />Send payment to: <span className="font-bold">@Michael-Herring-13</span></div>
            <div className="text-sm text-slate-600 mt-1">Include athlete name + time slot in Venmo note.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
