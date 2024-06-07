import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Techno = () => {
  const iconStyles =
    "text-7xl text-white-800 border-4 border-purple-200 rounded-2xl";

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex justify-center">
        <div className="flex items-center gap-4">
          <RiReactjsLine className={iconStyles} />
          <TbBrandNextjs className={iconStyles} />
          <SiMongodb className={iconStyles} />
          <DiRedis className={iconStyles} />
          <FaNodeJs className={iconStyles} />
          <BiLogoPostgresql className={iconStyles} />
        </div>
      </div>
    </div>
  );
};

export default Techno;
