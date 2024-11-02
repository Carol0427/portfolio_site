"use client";
import Image from "next/image";

interface FixedPluginProps {
  className?: string;
  buttonClassName?: string;
  imageClassName?: string;
  textClassName?: string;
}

export function FixedPlugin({
  className = "",
  buttonClassName = "",
  imageClassName = "",
  textClassName = ""
}: FixedPluginProps) {
  return (
    <a 
      href="https://www.material-tailwind.com" 
      target="_blank"
      rel="noopener noreferrer" // Added for security reasons
      className={`fixed bottom-4 right-4 z-50 ${className}`}
    >
      <button
        className={`
          inline-flex items-center gap-1 
          rounded-lg border border-gray-200 
          bg-white px-3 py-2 text-sm
          font-medium text-gray-900
          shadow-sm transition-all
          hover:bg-gray-50 hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-gray-200
          ${buttonClassName}
        `}
      >
        <Image
          width={128}
          height={128}
          className={`h-5 w-5 ${imageClassName}`}
          alt="Material Tailwind"
          src="https://www.material-tailwind.com/favicon.png"
        />
        <span className={`${textClassName}`}>
          Made With Material Tailwind
        </span>
      </button>
    </a>
  );
}

export default FixedPlugin;
