import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "../ui/FadeIn";

export default function Portfolio() {
    return (
        <section id="portfolio" className="scroll-mt-32 px-6 max-w-7xl mx-auto pb-32 space-y-24">
            {/* Header */}
            <FadeIn delay={0.1} className="space-y-12">
                <div className="flex justify-center">
                    <div className="bg-[#FF6B00] text-white px-10 py-3 rounded-full font-semibold text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                        Portfolio
                    </div>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-8">
                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter uppercase">
                        Selected Works
                    </h2>
                    <button className="px-8 py-3 rounded-full border border-solid border-[#ff6b00] text-white font-semibold text-sm hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300">
                        View All
                    </button>
                </div>
            </FadeIn>

            {/* Project 1: Gathering */}
            <div className="relative pt-10">
                <div className="grid grid-cols-12 items-center">
                    {/* Background Image */}
                    <FadeIn delay={0.2} direction="right" className="col-span-12 relative aspect-18/7 rounded-2xl overflow-hidden bg-[#111111]/50 group">
                        <Image
                            src="/gathering.png"
                            alt="Gathering App"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent pointer-events-none" />
                    </FadeIn>

                    {/* Glass Card */}
                    <FadeIn delay={0.4} direction="up" className="col-span-12 lg:w-[45%] lg:absolute lg:right-0 p-6 md:p-8 rounded-2xl space-y-5 mt-[-100px] lg:mt-0 z-10
                        bg-white/0.04
                        backdrop-blur-2xl
                        [background:linear-gradient(135deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_100%)]
                        relative
                        before:absolute before:inset-0 before:rounded-2xl before:p-px
                        before:[background:linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.04)_50%,rgba(255,107,0,0.25)_100%)]
                        before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                        before:[mask-composite:exclude]
                        before:pointer-events-none
                        after:absolute after:top-0 after:left-[10%] after:right-[10%] after:h-px
                        after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]
                        after:pointer-events-none shadow-2xl">
                        <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                            Case Study
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                                Gathering
                            </h3>
                            <p className="text-white/60 text-base font-medium leading-relaxed max-w-md">
                                Event Discovery &amp; Social Networking App
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                        >
                            View Case
                            <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                    </FadeIn>
                </div>
            </div>

            {/* Project 2: Photopia */}
            <div className="relative pt-24 lg:pt-10">
                <div className="grid grid-cols-12 items-center">
                    {/* Glass Card */}
                    <FadeIn delay={0.4} direction="up" className="col-span-12 lg:w-[45%] lg:absolute lg:left-0 p-6 md:p-8 rounded-2xl space-y-5 mb-[-100px] lg:mb-0 lg:mt-0 z-10 order-2 lg:order-1
                        bg-white/0.04
                        backdrop-blur-2xl
                        [background:linear-gradient(135deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.02)_100%)]
                        relative
                        before:absolute before:inset-0 before:rounded-2xl before:p-px
                        before:[background:linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.04)_50%,rgba(255,107,0,0.25)_100%)]
                        before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
                        before:[mask-composite:exclude]
                        before:pointer-events-none
                        after:absolute after:top-0 after:left-[10%] after:right-[10%] after:h-px
                        after:[background:linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]
                        after:pointer-events-none shadow-2xl">
                        <div className="inline-block border border-[#FF6B00] text-[#FF6B00] px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                            Case Study
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight uppercase leading-none">
                                Photopia App
                            </h3>
                            <p className="text-white/60 text-base font-medium leading-relaxed max-w-md">
                                Connect with the world&apos;s best Photography &amp; Videos
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-3 text-[#FF6B00] font-semibold text-sm uppercase tracking-wider group/link hover:brightness-110 transition-all"
                        >
                            View Case
                            <ArrowUpRight className="w-5 h-5 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </a>
                    </FadeIn>

                    {/* Background Image */}
                    <FadeIn delay={0.2} direction="left" className="col-span-12 relative aspect-[18/7] rounded-2xl overflow-hidden bg-[#111111]/50 group order-1 lg:order-2">
                        <Image
                            src="/photopia.png"
                            alt="Photopia App"
                            fill
                            className="object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent pointer-events-none" />
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
