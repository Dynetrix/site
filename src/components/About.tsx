import React from 'react';
import { Brain, Code, Bot, Database, MessageSquare, Package } from 'lucide-react';
import TeamProfiles from './TeamProfiles';
import ServiceCard from './ServiceCard';

const About = () => {
  const services = [
    {
      icon: Brain,
      title: 'MLOps',
      description: 'Enabling efficient deployment and monitoring of machine learning models at scale.'
    },
    {
      icon: Database,
      title: 'DevOps',
      description: 'Streamlining software delivery and operations with continuous integration and automation.'
    },
    {
      icon: Code,
      title: 'Full-stack Development',
      description: 'Building robust, scalable web applications using modern technologies.'
    },
    {
      icon: Brain,
      title: 'AI/ML',
      description: 'Designing intelligent systems with machine learning and deep learning models.'
    },
    {
      icon: MessageSquare,
      title: 'Chatbots',
      description: 'Developing personalized conversational agents to enhance user experiences.'
    },
    {
      icon: Package,
      title: 'Software Development',
      description: 'Providing end-to-end software solutions, from ideation to deployment.'
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {/* Company Introduction */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                About Our Company
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At Dynetrix, we are driven by a passion for technological innovation and problem-solving. Our team consists of skilled engineers and professionals, including experts in Machine Learning, Computer Vision, AI, and Full-Stack Development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Our Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>

          {/* Team Profiles */}
          <TeamProfiles />

          {/* Mission Statement */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-gray-300 italic">
              "We believe in the power of AI to change the world and are committed to solving complex problems with structured, innovative approaches. By combining cutting-edge algorithms, a focus on scalability, and a collaborative team environment, we bring transformative ideas to life."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;