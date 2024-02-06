import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

const EducationScreen = () => {
  const projectsFront = {
    title: "Frontend Certifications",
    content: "For detailed information about my education and certifications.",
    projects: [
      {
        img: "img/educations/certificado02.jpg",
        title: "Developer Html",
        properties: ["Html", "Css"],
        link: "#",
      },
      {
        img: "img/educations/certificado03.jpg",
        title: "Developer Object",
        properties: ["front end", "Css", "HTML"],
        link: "#",
      },
      {
        img: "img/educations/certificado07.jpg",
        title: "Basic Developer",
        properties: ["React", "Angular", "Vue"],
        link: "#",
      },
      {
        img: "img/educations/certificado08.jpg",
        title: "Reac.js",
        properties: ["React.js", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado13.jpg",
        title: "Asp.Net",
        properties: ["Asp.Net", ".Net Core", "SQL Server"],
        link: "#",
      }
    ],
  };

  const projectsBack = {
    title: "Backend Certifications",
    content: "For detailed information about my education and certifications.",
    projects: [
      {
        img: "img/educations/certificado01.jpg",
        title: "Developer Backend",
        properties: ["php", "Node.js", "Api", "Web Services"],
        link: "#",
      },
      {
        img: "img/educations/certificado04.jpg",
        title: "Technician Informatic",
        properties: ["Front End", "Back End"],
        link: "#",
      },
      {
        img: "img/educations/certificado05.jpg",
        title: "Asp.Net",
        properties: ["Asp.Net"],
        link: "#",
      },
      {
        img: "img/educations/certificado06.jpg",
        title: "Software Architecture",
        properties: ["Architecture", "Software"],
        link: "#",
      },
      {
        img: "img/educations/certificado12.jpg",
        title: "Advance software developer",
        properties: ["Architecture", "Software"],
        link: "#",
      }
    ],
  };

  const projectsMobile = {
    title: "Mobile Certifications",
    content: "For detailed information about my education and certifications.",
    projects: [
      {
        img: "img/educations/certificado09.jpg",
        title: "React Native",
        properties: ["React Native","React.js", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado10.jpg",
        title: "React Native",
        properties: ["React Native","React.js", "Redux", "tailwind"],
        link: "#",
      },
    ],
  };

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Portfolio data={projectsFront} />
      <Portfolio data={projectsBack} />
      <Portfolio data={projectsMobile} />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};
export default EducationScreen;
