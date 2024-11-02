"use client";

import { SkillCard } from "@/components";

const SKILLS = [
  {
    img: "/image/entrustlogo.png",
    title: "Entrust - Software Engineering Intern",
    children: "Sept 2023 - Sept 2024",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Work Experience
        </h2>
      </div>
      <div className="flex justify-center">
        <div className={`grid grid-cols-1 gap-y-10 ${
          SKILLS.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : ''
        }`}>
          {SKILLS.map((props, idx) => (
            <div className="flex justify-center" key={idx}>
              <SkillCard {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;