import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sanofi,
    arvinas,
    EY,
    CodeSquad,
    devs,
    EYAAF,
    ArvinasSanofi,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Associate",
      company_name: "AAF, Ernst & Young",
      icon: EYAAF,
      iconBg: "#383E56",
      // iconBg: "#E6DEDD",
      date: "Jun 2018 - Jan 2021",
      points: [
        "Audits for NFP and financial service clients",
        "Tests of controls and Substantive test (Tests of Details and Analytical Procedures)",
      ],
    },
    {
      title: "Senior Analyst",
      company_name: "Sanofi, Arvinas",
      icon: ArvinasSanofi,
      iconBg: "#383E56",
      date: "Jan 2021 - Present",
      points: [
        "Budgeting and Forecasting",
        "Develop financial models and dashboards along with process improvement",
        "Collaborate cross functionally with Business Operations, Procurement, and Accounting ",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "CodeSquad",
      icon: CodeSquad,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Jun 2023",
      points: [
        "Developed full stack web applications using Node, Express, and MongoDB technologies",
        "Implemented responsive design and ensuring cross-browser compatibility",
        // "Participated in code reviews and providing constructive feedback to other developers",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "100devs",
      icon: devs,
      iconBg: "#4E65F1",
      date: "Jul 2023 - Present",
      points: [
        "Developing and maintaining web applications using MERN technologies",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "VentureUp",
      description:
        "Web application that enables users to manage personal projects by adding, updating, and deleting items. Also it gives inspirational ideas, daily quotes and weather forecasts to achieve the one stop for all platform. Users are able to sign in with regular signup methods or Google OAuth2.",
      tags: [
        {
          name: "EJS",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Pinverse",
      description:
        "Web-based blogging community that allows users to make posts with images. Users are able to interact with others by liking or commenting others' posts. Users can also find posts by searching with tags or flipping through the pages with pagination functionality.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "blue-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };