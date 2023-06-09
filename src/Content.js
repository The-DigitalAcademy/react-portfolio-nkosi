// import images
import Nkosi from "./assets/images/Hero/nkosi.png";

import html from "./assets/images/Skills/html.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import java from "./assets/images/Skills/java.png";
import reactjs from "./assets/images/Skills/react.png";
import mongodb from "./assets/images/Skills/mongodb.png";
import css from "./assets/images/Skills/css.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import king5 from "./assets/images/projects/king5.png";
import king3 from "./assets/images/projects/king3.png";
import team1 from "./assets/images/projects/team1.png";
import person_king2 from "./assets/images/Projects/king2.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import king1 from "./assets/images/Hireme/king1.png";
import king2 from "./assets/images/Hireme/king2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    // {
    //   link: "#projects",
    //   icon: RiProjectorLine,
    // },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Wed Developer",
    firstName: "NKOSIPHENDULE",
    LastName: "MAGAZI",
    image: Nkosi,
    hero_content: [
      // {
      //   count: "8+",
      //   text: "Years of Experinse in Web development",
      // },
      // {
      //   count: "20+",
      //   text: "Projects Worked in my career",
      // },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY MEDIUM TOP SKILLS",
    skills_content: [
      {
        name: "Html",
        logo: html,
      },
      {
        name: "MongoDB",
        logo: mongodb,
      },
      {
        name: "java",
        logo: java,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
      {
        name: "Css",
        logo: css,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    // title: "Services",
    // subtitle: "WHAT I OFFER",
    service_content: [
      // {
      //   title: "Web Development",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo1,
      // },
      // {
      //   title: "ui / ux DESIGNING",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo2,
      // },
      // {
      //   title: "PhotoShop Editing",
      //   para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
      //   logo: services_logo3,
      // },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY medium CREATION CODE",
    image: person_king2,
    project_content: [
      {
        title: "44 Stanley",
        image: king5,
      },
      {
        title: "Social 44 Stanley",
        image: king3,
      },
      {
        title: "Team DA",
        image: team1,
      },
    ],
  },
  Testimonials: {
    testimonials_content: [
    ],
  },
  Hireme: {
    title: "Me",
    subtitle: "FOR ME MEDIUM PROJECTS",
    image1: king1,
    image2: king2,
    para: "i was learn struggle hard HTML, CSS, REACT and MongoDB still struggling contiune, mean i not skill hard not easy code",
    
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "ydomagazi0108@gmail.com",
        icon: GrMail,
        link: "ydomagazi0108@gmail.com",
      },
      {
        text: "+27634244380",
        icon: MdCall,
        link: "https://wa.me/0634244380",
      },
    ],
  },
  Footer: {
    text: " Right MAY 2023",
  },
};
