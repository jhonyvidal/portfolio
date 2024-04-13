import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

const PortfolioScreen = () => {
  const projectsFront = {
    title: "front end",
    content:
      "We can review our latest projects, with React, Angular, PHP, Html and Next Pages.",
    projects: [
      {
        img: "portfolio-img01.png",
        title: "Logistic Service",
        properties: ["React", "Redux", "tailwind"],
        link: "https://system.deployzone.online/",
      },
      {
        img: "debugploy.png",
        title: "Debugploy Service",
        properties: ["React", "Talwind", "Redux", "React Router Dom"],
        link: "https://debugploy.com/",
      },
      {
        img: "drovi.png",
        title: "Drovi POS Service",
        properties: ["React", "Talwind", "Redux", "React Router Dom"],
        link: "https://drovi.lukis.blog/",
      },
      {
        img: "asistencia-logistica.png",
        title: "Logistic Asistance",
        properties: ["React", "Redux", "tailwind"],
        link: "https://asistencialogisticacol.com/",
      },
      {
        img: "drovisystem.png",
        title: "POS Service",
        properties: ["PHP", "Boostrap", "AdminLTE", "Sweet Alert"],
        link: "https://pos.lukis.blog/",
      },
      {
        img: "transprensa.png",
        title: "Transprensa",
        properties: ["PHP", "Wordpress", "Mysql"],
        link: "https://transprensa.com/",
      },
    ],
  };

  const projectsBakend = {
    title: "Back end",
    content:
      "We can review our latest projects, with .Net, C#, PHP, Nest and Node.",
    projects: [
        {
            img: "nest.png",
            title: "Nest Api Service",
            properties: ["Nest", "Mysql", "Node.js", "Express.js", ""],
            link: "https://api.lukis.blog/api/",
        },
        {
            img: "net.png",
            title: "C# Api Service",
            properties: [".Net Core", "ASP.NET", "Entity framework core", "SQL SERVER"],
            link: "#",
        },
        {
            img: "laravel.png",
            title: "Laravel Api Service",
            properties: ["PHP", "Laravel"],
            link: "https://dev.licorera3jjjs.com/api/mobile/categories",
        }
    ],
  };
  
  const projectsMobile = {
    title: "Mobile",
    content: "We can review our latest projects, with Ionic, React Native.",
    projects: [
        {
            img: "portfolio-img03.png",
            title: "Three J",
            properties: ["Angular", "Ionic", "Android", "IOS"],
            link: "https://play.google.com/store/apps/details?id=com.licorera3jjjs.app&pcampaignid=web_share",
        },
        {
            img: "react-native.png",
            title: "Pokedex App",
            properties: ["React Native", "React", "Android", "IOS"],
            link: "#",
        }
    ],
  };
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Portfolio data={projectsFront} />
      <Portfolio  data={projectsBakend}/>
      <Portfolio  data={projectsMobile}/>
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};
export default PortfolioScreen;
