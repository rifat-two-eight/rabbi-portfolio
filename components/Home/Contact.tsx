"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                {/* Left Side: Info */}
                <FadeIn delay={0.2} direction="right" className="lg:col-span-5 space-y-10">
                    <div className="space-y-6">
                        <div className="inline-block bg-[#FF6B00] text-white px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                            Contact Me
                        </div>
                        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter uppercase leading-none">
                            Let&apos;s Work <br />
                            <span className="text-[#FF6B00]">Together</span>
                        </h2>
                        <p className="text-white/60 text-lg font-medium max-w-md">
                            I&apos;m currently available for freelance work and full-time opportunities. Have a project in mind? Let&apos;s talk.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Contact Items */}
                        {[
                            { icon: Mail, label: "Email", value: "hello@rabbi.design" },
                            { icon: Phone, label: "Phone", value: "+880 1700 000000" },
                            { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#FF6B00]/50 transition-colors">
                                    <item.icon className="w-6 h-6 text-[#FF6B00]" />
                                </div>
                                <div>
                                    <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">{item.label}</p>
                                    <p className="text-white text-xl font-semibold tracking-tight">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-6 space-y-4">
                        <p className="text-white/40 text-sm font-semibold uppercase tracking-widest">Follow Me</p>
                        <div className="flex gap-4">
                            {[
                                {
                                    name: "LinkedIn",
                                    url: "#",
                                    svg: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2z" />
                                },
                                {
                                    name: "Twitter",
                                    url: "#",
                                    svg: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                },
                                {
                                    name: "GitHub",
                                    url: "#",
                                    svg: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all group"
                                    aria-label={social.name}
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                                    >
                                        {social.svg}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                {/* Right Side: Form */}
                <FadeIn delay={0.4} direction="left" className="lg:col-span-7">
                    <div className="bg-white/[0.02] backdrop-blur-3xl p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                        {/* Subtle Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 blur-[100px] -z-10" />

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-white/40 text-xs font-semibold uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-white/40 text-xs font-semibold uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/40 text-xs font-semibold uppercase tracking-widest ml-1">Subject</label>
                                <input
                                    type="text"
                                    placeholder="How can I help you?"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-white/40 text-xs font-semibold uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Write your message here..."
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#FF6B00]/50 transition-colors resize-none"
                                />
                            </div>

                            <button className="w-full bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-semibold uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(255,107,0,0.2)]">
                                Send Message
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </FadeIn>

            </div>
        </section>
    );
}
