import React from 'react';
import { Github, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, expertise, image }) => (
  <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-amber-500/20 hover:border-amber-500 transition-all">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/3">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
      <div className="w-full md:w-2/3 space-y-4">
        <h3 className="text-2xl font-bold text-white">{name}</h3>
        <p className="text-amber-500 font-medium">{role}</p>
        <p className="text-gray-300 leading-relaxed">{description}</p>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold text-white">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {expertise.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-amber-500/10 text-amber-500 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TeamMember;