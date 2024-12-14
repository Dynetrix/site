import React from 'react';
import { Brain, Code, Bot, Database, MessageSquare, Package } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
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
    <section id="services" className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-amber-500 to-yellow-300 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;