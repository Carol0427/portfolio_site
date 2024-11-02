import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  tags?: string[];
}

export function ProjectCard({ img, title, desc, tags = [] }: ProjectCardProps) {
  const handleClick = () => {
    const projectLinks: Record<string, string> = {
      "AnonyVent": "https://anonyvent.xyz",
      "LeafSafe": "https://leafsafe.xyz",
      "FixItFund": "https://fixitfund.site"
    };
    
    if (title in projectLinks) {
      window.open(projectLinks[title], '_blank');
    }
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white transition-shadow hover:shadow-md">
      {/* Card Header */}
      <div className="mb-6 h-48 overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Card Body */}
      <div className="p-6">
        <a
          href="#"
          className="text-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-semibold">
            {title}
          </h5>
        </a>
        <p className="mb-6 font-normal text-gray-500">
          {desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex cursor-pointer items-center justify-center rounded border border-black px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Spacing */}
        <div className="mt-6"></div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Try it out!
        </button>
      </div>
    </div>
    
  );
}

export default ProjectCard;
