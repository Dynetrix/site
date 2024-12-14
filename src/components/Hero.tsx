import React from 'react';
import { ArrowRight, Code, Database, Bot } from 'lucide-react';
import { scrollToElement } from '../utils/scroll';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                Innovate
              </span>{' '}
              with Confidence
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Transform your business with cutting-edge technology solutions. From AI/ML to full-stack development, we deliver excellence at every step.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToElement('about')}
                className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2"
              >
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border border-amber-500 text-amber-500 px-8 py-3 rounded-lg hover:bg-amber-500/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { icon: Code, title: 'Full-Stack Dev' },
              { icon: Database, title: 'MLOps & DevOps' },
              { icon: Bot, title: 'AI Solutions' }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 hover:border-amber-500 transition-all group"
              >
                <item.icon className="w-12 h-12 text-amber-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">Innovative solutions that drive business growth</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;