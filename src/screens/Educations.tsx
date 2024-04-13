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
        properties: ["Sass", "Css", "HTML"],
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
        properties: ["React", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado13.jpg",
        title: "Asp.Net",
        properties: ["Asp.Net", ".Net Core", "SQL Server"],
        link: "#",
      },
      {
        img: "img/educations/certificado18_page-0001.jpg",
        title: "React Ecommerce",
        properties: ["React", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado20_page-0001.jpg",
        title: "React handle state",
        properties: ["React", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado22_page-0001.jpg",
        title: "Wordpress Professional",
        properties: ["PHP","Wordpress", "Boostrap"],
        link: "#",
      },
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
      },
      {
        img: "img/educations/certificado14_page-0001.jpg",
        title: "Advance .NET API",
        properties: [".NET", "Software"],
        link: "#",
      },
      {
        img: "img/educations/certificado16_page-0001.jpg",
        title: "C# Clean Code",
        properties: ["C#", ".NET", "Software"],
        link: "#",
      },
      {
        img: "img/educations/certificado17_page-0001.jpg",
        title: ".Net Fundamentals",
        properties: ["C#", ".NET", "Software"],
        link: "#",
      },
      {
        img: "img/educations/certificado19_page-0001.jpg",
        title: "Mongo DB",
        properties: ["Mongodb", "No SQL", "Databases"],
        link: "#",
      },
      {
        img: "img/educations/certificado21_page-0001.jpg",
        title: "Solid Principles",
        properties: ["C#", ".Net", "Architecture"],
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
        properties: ["React Native","React", "Redux", "tailwind"],
        link: "#",
      },
      {
        img: "img/educations/certificado10.jpg",
        title: "React Native",
        properties: ["React Native","React", "Redux", "tailwind"],
        link: "#",
      }
    ],
  };

  const projectsdevops = {
    title: "Devops Certifications",
    content: "For detailed information about my education and certifications.",
    projects: [
      {
        img: "img/educations/certificado15_page-0001.jpg",
        title: "AWS",
        properties: ["AWS","Cloud"],
        link: "#",
      } 
    ],
  };

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Portfolio data={projectsFront} />
      <Portfolio data={projectsBack} />
      <Portfolio data={projectsMobile} />
      <Portfolio data={projectsdevops} />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};
export default EducationScreen;
