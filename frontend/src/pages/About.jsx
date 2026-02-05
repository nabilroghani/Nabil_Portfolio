import React from 'react'
import progImg from "../assets/programmer.jpeg"

const About = () => {
    return (
        <section id="about" className="bg-[#020617] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white inline-block relative">
                        About <span className="text-cyan-400">Me</span>
                        <div className="h-1.5 w-1/2 bg-cyan-500 absolute -bottom-2 left-0 rounded-full"></div>
                    </h2>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    
                    {/* Image Side with Decorative Border */}
                    <div className="flex-1 relative group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative bg-[#0f172a] p-3 rounded-2xl border border-slate-800">
                            <img 
                                src={progImg} 
                                alt="Nabil Programmer" 
                                className="rounded-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl"
                            />
                        </div>
                        {/* Floating Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-cyan-500 p-4 rounded-xl shadow-xl hidden md:block">
                            <p className="text-slate-900 font-black text-2xl leading-none">5+</p>
                            <p className="text-slate-900 text-xs font-bold uppercase tracking-tighter">Years Exp.</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex-[1.5] space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-100">
                            Building digital products, brands, and experience.
                        </h3>
                        
                        <p className="text-slate-400 text-lg leading-relaxed">
                            I am a <span className="text-white font-medium">Full-Stack Developer</span> specializing in the MERN stack. I create dynamic, responsive, and user-friendly web applications that solve real-world problems.
                        </p>

                        <p className="text-slate-400 text-lg leading-relaxed">
                            Using a combination of cutting-edge technologies like <span className="text-cyan-400 italic">React, Node.js, and MongoDB</span>, I build user-focused, performant websites that look stunning on smartphones, tablets, and desktops.
                        </p>

                        {/* Quick Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                                <h4 className="text-cyan-400 font-bold text-xl">100%</h4>
                                <p className="text-slate-500 text-sm">Dedication</p>
                            </div>
                            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                                <h4 className="text-cyan-400 font-bold text-xl">MERN</h4>
                                <p className="text-slate-500 text-sm">Stack Focus</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About