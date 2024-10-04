import React from 'react';

interface ComponentProps {
  adjective: string;
  title: string;
  description: string;
  imgSrc: string;
}

const Component: React.FC<ComponentProps> = ({ adjective, title, description, imgSrc }) => {
  return (
    <li className="md:flex-1">
      <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4 mb-7">
        <span className="text-sm font-medium" style={{ color: '#e342f5' }}>{adjective}</span>
        <span className="text-xl font-semibold">{title}</span>
        <span className="mt-2 text-zinc-700">{description}</span>
      </div>
      <div className="relative h-64 md:h-80">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover p-3 rounded-lg box-border bg-white shadow-2xl ring-1 ring-gray-900/10"
        />
      </div>
    </li>
  );
};

export default Component;
