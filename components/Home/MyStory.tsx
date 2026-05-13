import { MapPin, Briefcase, Heart } from "lucide-react";

export default function MyStory() {
    return (
        <section className="px-6 max-w-7xl mx-auto pb-20 space-y-12">
            {/* Section Header */}
            <div className="flex justify-center">
                <div className="bg-[#FF6B00] text-white px-10 py-3 rounded-full font-black text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                    My Story
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* About Me Card */}
                <div className="bg-white rounded-2xl p-10 flex flex-col justify-between text-[#0d0d0d] min-h-[400px] border border-white/30">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-black">About Me</h2>
                        <p className="text-base leading-relaxed font-medium opacity-80">
                            I am passionate about creating intuitive & human-centric approach to problem solving that blend aesthetics with functionality while always putting the users at the center of everything I do.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-[#e2f8f0] text-[#059669] px-4 py-1.5 rounded-full text-xs font-bold">Versatile Designer</span>
                            <span className="bg-[#e2f8f0] text-[#059669] px-4 py-1.5 rounded-full text-xs font-bold">Cool Guy</span>
                        </div>
                    </div>
                    <button className="w-full bg-[#111827] text-white py-4 rounded-2xl font-black text-sm hover:bg-black transition-all mt-8">
                        Get In Touch
                    </button>
                </div>

                {/* Social Media Agency Card */}
                <div className="bg-[#e1a221] rounded-2xl p-10 flex flex-col justify-between text-white relative overflow-hidden min-h-[400px] border border-white/30">
                    <div className="space-y-8">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#e1a221] shadow-lg">
                            <Heart className="w-7 h-7 fill-current" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black leading-tight">Social Media</h2>
                            <h2 className="text-3xl font-black leading-tight">Agency</h2>
                        </div>
                        <p className="text-base leading-relaxed font-medium opacity-90">
                            Lorem ipsum dolor sit amet consectetur adipiscing enim mi nulla.
                        </p>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-[#0d0d0d]/40 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-bold w-fit mt-6 border border-white/10">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                        UI/UX Designer
                    </div>
                </div>

                {/* Right Column (Stacked Cards) */}
                <div className="grid grid-rows-2 gap-6">
                    {/* Sparktech Card */}
                    <div className="bg-[#111111]/40 backdrop-blur-xl p-10 rounded-2xl border border-white/30 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#FF6B00]/30 transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-2 group-hover:scale-110 transition-transform">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white">Sparktech Agency</h3>
                            <p className="text-white/40 text-sm font-bold mt-1">Junior UX/UI Designer</p>
                        </div>
                    </div>

                    {/* Based In Card */}
                    <div className="bg-[#111111]/40 backdrop-blur-xl p-10 rounded-2xl border border-white/30 flex flex-col items-center justify-center text-center space-y-4 hover:border-[#FF6B00]/30 transition-all group">
                        <div className="w-16 h-16 rounded-2xl bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] mb-2 group-hover:scale-110 transition-transform">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-white">Based in</h3>
                            <p className="text-white/40 text-sm font-bold mt-1">Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
