import React, { useState } from 'react';
import TeamCard from './TeamCard';
import Modal from './Modal';
import { teamMembers } from '../data/teamMembers';
import { Github, Linkedin } from 'lucide-react';

const TeamProfiles = () => {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-white">Our Team</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            {...member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      >
        {selectedMember && (
          <div className="p-6 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full aspect-square object-cover rounded-lg"
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
                <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                <p className="text-amber-500 font-medium">{selectedMember.role}</p>
                <p className="text-gray-300 leading-relaxed">{selectedMember.description}</p>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-white">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.expertise.map((skill, index) => (
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
        )}
      </Modal>
    </div>
  );
};

export default TeamProfiles;