import React from 'react';
import { LucideIcon, User } from 'lucide-react';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  onClick: () => void;
}

const TeamCard = ({ name, role, image, onClick }: TeamCardProps) => (
  <div 
    onClick={onClick}
    className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-xl border border-amber-500/20 hover:border-amber-500 transition-all cursor-pointer group"
  >
    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-lg font-semibold text-white">{name}</h3>
    <p className="text-amber-500 text-sm">{role}</p>
  </div>
);

export default TeamCard;