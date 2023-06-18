import React from "react";
import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiFiverr, SiFreelancer, SiReactivex, SiToptal } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";
import { title } from "process";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <ExperienceCard
        title="ReactBD.com"
        subTitle="Web Developer 2022 - Present"
        icon={<SiReactivex/>}
      />
      <ExperienceCard
        title="Toptal"
        subTitle="Digital Marketer 2021 - 2022"
        icon={<SiToptal/>}
      />
      <ExperienceCard
        title="Freelancer"
        subTitle="Asparent 2020 - 2022"
        icon={<SiFreelancer/>}
      />
      <ExperienceCard
        title="Fiverr"
        subTitle="Asparent 2020 - 2022"
        icon={<SiFiverr/>}
      />
      </div>
    </div>
  );
};

export default Experience;
