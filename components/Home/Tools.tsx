import Image from "next/image";

export default function Tools() {
    const tools = [
        { name: "Figma", icon: "/figma.svg" },
        { name: "Photoshop", icon: null, isPs: true },
        { name: "Illustrator", icon: "/illustrator.svg" },
        { name: "Framer", icon: "/framer.png" },
        { name: "Sketch", icon: "/sketch.svg" },
    ];

    return (
        <section className="px-6 max-w-7xl mx-auto pb-24 space-y-12">
            {/* Section Header */}
            <div className="flex justify-center">
                <div className="bg-[#FF6B00] text-white px-10 py-3 rounded-full font-black text-xl shadow-[0_0_20px_rgba(255,107,0,0.2)]">
                    Tools & Technologies
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {tools.map((tool) => (
                    <div 
                        key={tool.name} 
                        className="bg-[#111111]/40 backdrop-blur-xl p-5 rounded-2xl border border-white/30 flex items-center gap-4 hover:border-[#FF6B00]/40 transition-all group cursor-default"
                    >
                        <div className="w-12 h-12 flex items-center justify-center shrink-0">
                            {tool.isPs ? (
                                <div className="w-10 h-10 bg-[#001E36] border-2 border-[#31A8FF] rounded-lg flex items-center justify-center">
                                    <span className="text-[#31A8FF] font-black text-xl">Ps</span>
                                </div>
                            ) : (
                                <Image 
                                    src={tool.icon || "/file.svg"} 
                                    alt={tool.name} 
                                    width={32} 
                                    height={32} 
                                    className="object-contain"
                                />
                            )}
                        </div>
                        <span className="text-white font-bold text-lg">{tool.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
