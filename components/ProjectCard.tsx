import React from "react";
import Image from "next/image";
import amazonClone from "../public/img/projects/amazonClone.webp";
import { type } from "os";

type Props = {
  title?: string;
  img: string;
  link: string;
};

const ProjectCard = ({ title, img, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-80 h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[65%] transition-transform duration-[3s] "
          src={img}
          width={350}
          height={350}
          alt="Amazon Clone"
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full bg-blue-600 text-white text-center font-normal duration-500">
          {title}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
