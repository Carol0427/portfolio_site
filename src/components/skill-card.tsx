import React from 'react';

interface SkillCardProps {
  title: string;
  img: string;
  children: React.ReactNode;
}

export function SkillCard({ img, title, children }: SkillCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="grid justify-center text-center">
        <div className="mx-auto mb-6 place-items-center p-2.5 text-white">
          <img src={img} width="150" height="150" alt={title} className="h-[150px] w-[150px]" />
        </div>
        <h5 className="mb-2 text-xl font-semibold text-gray-800">
          {title}
        </h5>
        <p className="px-8 text-gray-500">
          {children}
        </p>
      </div>
    </div>
  );
}

export default SkillCard;