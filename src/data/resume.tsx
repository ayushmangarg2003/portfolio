import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ayushman Garg",
  initials: "AG",
  url: "https://ayushman.vercel.app",
  location: "Delhi, IN",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer trying to figure out technology ",
  summary: "I am a passionate [Full Stack Developer](#) with a strong foundation in the MERN stack, React Native, and a growing expertise in Generative AI. My journey in programming began with Python during school, which evolved into a deep enthusiasm for web development and machine learning in college. Over the years, I have honed my skills in technologies like HTML, CSS, JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, MySQL, Next.js, and more, enabling me to design and implement scalable, user-friendly applications. My experience includes impactful internships, such as building and optimizing web applications at [Matrixly AI](#) and [HDD Ventures](#).",
  avatarUrl: "/me.png",
  skills: [
    "HTML",
    "CSS",
    "Javascript",
    "ReactJs",
    "React Native",
    "NextJS",
    "NodeJs",
    "ExpressJs",
    "MongoDB",
    "MySQL",
    "Python",
    "Tailwind",
    "Git",
    "Github"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ayushmangarg929@gmail.com",
    tel: "+91 1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/ayushmangarg2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayushmangarg",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://www.x.com/ayushmangarg4",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "HDD Ventures",
      href: "",
      badges: [],
      location: "Remote, USA",
      title: "Software Developer Intern",
      logoUrl: "/",
      start: "Apr 2024",
      end: "Nov 2024",
      description: "At HDD Ventures, I worked as a Software Developer Intern, where I led the development of multiple projects using the MERN stack and Firebase.My responsibilities included designing, coding, and deploying scalable web applications while ensuring they aligned with client requirements.I collaborated with cross - functional teams to deliver user- friendly solutions and optimized user experiences.This experience allowed me to hone my skills in full - stack development, problem - solving, and managing end - to - end product development cycles.",
    },
    {
      company: "Matrixly AI",
      badges: [],
      href: "https://www.linkedin.com/company/matrixly-ai",
      location: "Remote, Australia",
      title: "Frontend Developer Intern",
      logoUrl: "/matrixly.jpeg",
      start: "Apr 2024",
      end: "June 2024",
      description:
        "At Matrixly AI, I worked as a Frontend Developer Intern, where I specialized in building and optimizing React components to enhance performance and maintainability. I implemented various user interface improvements, ensuring a seamless and engaging user experience for the application. Collaborating closely with the design and backend teams, I contributed to delivering responsive and interactive solutions, further strengthening my expertise in React.js and frontend development best practices.",
    },
    {
      company: "CodSoft",
      href: "",
      badges: [],
      location: "India",
      title: "Web Developer Intern",
      logoUrl: "/codsoft.jpeg",
      start: "Jul 2023",
      end: "Aug 2023",
      description:
        "At CodSoft, I worked as a Web Developer Intern, where I developed three projects within a one-month timeframe to enhance my practical skills in web development. These projects involved building responsive and visually appealing web interfaces using HTML, CSS, and JavaScript. This internship provided me with hands-on experience in managing tight deadlines, improving my coding efficiency, and delivering quality web applications within short timeframes.",
    },
  ],

  education: [
    {
      school: "Maharaja Agrasen Institue of Technology",
      href: "https://mait.ac.in/",
      degree: "Bachelors of Technology, Information Technology",
      logoUrl: "/mait.jpeg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Modern Public School",
      href: "http://www.mpsshalimarbagh.com/",
      degree: "Class 12th",
      logoUrl: "/mps.jpeg",
      start: "2020",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Homestayz",
      href: "https://github.com/ayushmangarg2003/Homestayz",
      dates: "",
      active: true,
      description:
        "Homestays is an innovative Homestay booking platform developed using the MERN Stack. The platform allows users to easily Create, Read, and Update Homestays. With its intuitive design and efficient user experience, Homestays simplifies the process of booking and renting.",
      technologies: ["React.js",
        "Node.js",
        "Express.js",
        "MongoDB", "Dialogflow"],
      links: [
        {
          type: "Website",
          href: "https://github.com/ayushmangarg2003/Homestayz",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ayushmangarg2003/Homestayz",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/homestayz.webp",
      video:
        "",
    },
    {
      title: "DocCARE",
      href: "https://book-doc.vercel.app/",
      dates: "",
      active: true,
      description:
        "DocCARE is a Full Stack Doctor Booking platform built using React.js and CSS in frontend and Node.js, Express.js and Mongo DB in backend. It showcases my skills in making user friendly interfaces for seamless user experience",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://book-doc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ayushmangarg2003/DocCare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/DocCARE.webp",
      video: "",
    },
    {
      title: "True Blogs",
      href: "https://github.com/ayushmangarg2003/TrueBlogs",
      dates: "",
      active: true,
      description:
        "This is a Blogging website that has been developed using MongoDB, ReactJS, and ExpressJS. It is a comprehensive project that encompasses both front-end and back-end development, offering various features such as Login/Signup option.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ayushmangarg2003/TrueBlogs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TrueBlogs.webp",
      video: "",
    },
    {
      title: "Travel Arc",
      href: "https://travel-arc.vercel.app/",
      dates: "",
      active: true,
      description:
        "This website, developed using React Js, is a multi-page tour and travel platform. It serves as a demonstration of my proficiency in both React and CSS design. The ensures optimal user experience across a wide range of devices and screen sizes.",
      technologies: [
        "React.js",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://travel-arc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ayushmangarg2003/TravelArc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/TravelArc.webp",
      video:
        "",
    },
  ],

  hackathons: [
    {
      title: "Generative AI for Software Developers Specialization",
      dates: "March 2024",
      location: "",
      description:
        "IBM",
      image:
        "/ibm.png",
      links: "https://coursera.org/share/cc391d4b518949d92919e8454fd7bc94",
    },
    {
      title: "Introduction to Web Development with HTML, CSS and Javascript",
      dates: "August 2022",
      location: "",
      description:
        "IBM",
      image:
        "/ibm.png",
      links: "https://www.coursera.org/account/accomplishments/verify/265T5JA3FAK9",
    },
    {
      title: "MODERN WEB DESIGN",
      dates: "May 2022",
      location: "",
      description:
        "Gymnasium",
      icon: "public",
      image:
        "/gymnasium.webp",
      links: "https://www.credential.net/3611f2e5-78ba-4f54-b4b2-c3376dae275f#gs.3iebig",
    },
  ],
} as const;
