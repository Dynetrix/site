import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-amber-500/20 hover:border-amber-500 transition-all">
    <Icon className="w-8 h-8 text-amber-500 mb-3" />
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default ServiceCard;