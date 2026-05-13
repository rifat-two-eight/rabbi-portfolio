import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">

            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center gap-16 pt-10 pb-20">

                {/* Left Content */}
                <div className="flex-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#FF6B00] text-sm font-medium">
                        <div className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                        Available for Projects
                    </div>

                    <h1 className="text-6xl font-black leading-[1.1] tracking-tight text-white">
                        Designing <br />
                        <span className="text-[#FF6B00]">Experiences</span> <br />
                        That Matter.
                    </h1>

                    <p className="text-sm text-white max-w-md leading-relaxed">
                        I&apos;m Shahriar, a Jr. UX/UI Designer dedicated to creating premium, functional, and casually stunning digital products.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <a
                            href="#work"
                            className="flex items-center gap-2 bg-[#FF6B00] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:brightness-110 transition-all"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="#contact"
                            className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white/5 transition-colors"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative flex justify-center lg:justify-end">
                    <div className="absolute -top-16 -left-16 w-56 h-56 bg-[#FF6B00]/20 rounded-full blur-[80px] -z-10" />
                    <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#FF6B00]/10 rounded-full blur-[80px] -z-10" />

                    <div className="relative w-72 md:w-96">
                        <div className="relative overflow-hidden aspect-square">
                            <Image
                                src="/hero2.png"
                                alt="Shahriar"
                                width={650}
                                height={650}
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

