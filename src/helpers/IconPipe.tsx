import {
  FaAngular,
  FaAws,
  FaCloud,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaSass,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import { SiPostman, SiRedux, SiTailwindcss } from "react-icons/si";
import { IconType } from "react-icons/lib";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";

type IconName =
  | "angular"
  | "react"
  | "vue"
  | "html"
  | "css"
  | "sass"
  | "redux"
  | "tailwind"
  | "php"
  | "wordpress"
  | "node.js"
  | "mongodb"
  | "api"
  | "react native"
  | "aws"
  | "cloud";

const icons: Record<IconName, IconType> = {
  angular: FaAngular,
  react: FaReact,
  vue: FaVuejs,
  html: FaHtml5,
  css: FaCss3,
  sass: FaSass,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  php: FaPhp,
  wordpress: FaWordpress,
  "node.js": FaNodeJs,
  "mongodb": DiMongodb,
  api: SiPostman,
  "react native": IoLogoAndroid,
  aws: FaAws,
  cloud: FaCloud      
};

const IconPipe = (icon: string) => {
  const IconComponent = icons[icon.toLowerCase() as IconName];

  if (IconComponent) {
    return (
      <IconComponent
        style={{ fontSize: "30px", padding: "0 5px" }}
        title={icon}
      />
    );
  } else {
    return <span className="text-3xl text-white">{icon}&nbsp;</span>;
  }
};

export default IconPipe;
