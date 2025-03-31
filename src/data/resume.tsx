import { Icons } from "@/components/icons";
import { CircleUser } from "lucide-react";

export const DATA = {
  name: "Ayushman Garg",
  initials: "AG",
  url: "https://ayushmangarg.in",
  location: "Delhi, IN",
  locationLink: "",
  description:
    "Software Engineer trying to figure out technology ",
  summary: "I’m a passionate **Full Stack Developer** with a solid foundation in the **MERN stack**, **React Native**, and a growing interest in **Generative AI**. My programming journey began with Python back in school, which eventually sparked my enthusiasm for web development and machine learning during college. Over time, I’ve sharpened my skills in technologies like **HTML, CSS, JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, MySQL, Next.js**, and more, allowing me to build scalable and user-friendly applications. I’ve had the privilege of working on impactful projects during my internships at **Matrixly AI** and **HDD Ventures**, where I focused on building and optimizing web applications.",

  summary2: "Feel free to reach out to me at **ayushmangarg929@gmail.com** if you’d like to connect or discuss exciting opportunities! You can also connect with me through my socials like [Twitter](https://twitter.com/AyushmanGarg4), [LinkedIn](https://linkedin.com/in/ayushmangarg), and [Peerlist](https://peerlist.io/ayushmangarg).",

  avatarUrl: "/me.webp",
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
    "Github",
    "Java",
    "Dialogflow",
    "Supabase",
  ],
  navbar: [
    { href: "https://flowcv.com/resume/dus4f2v67p", icon: CircleUser, label: "Resume" },
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
        url: "https://mail.google.com/mail/u/0/?fs=1&to=ayushmangarg929@gmail.com&tf=cm",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
  company: "Infosys",
  badges: [],
  href: "https://www.infosys.com",
  location: "On-site, Mysore, India",
  title: "Engineering Trainee",
  logoUrl: "/infosys.webp",
  start: "Feb 2025",
  end: "June 2025",
  description:
    "As an Engineering Trainee at Infosys, I am undergoing extensive training in Java, SQL, and database management systems (DBMS), while working on an industry-driven project focused on C#, Entity Framework Core, and ASP.NET. Under the guidance of experienced mentors, I am applying SQL and Agile methodologies to solve real-world challenges. This experience is strengthening my coding skills, enhancing my problem-solving abilities, and refining my teamwork in a professional software development environment."
  },
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
      logoUrl: "/matrixly.webp",
      start: "Apr 2024",
      end: "June 2024",
      description:
        "At Matrixly AI, I worked as a Frontend Developer Intern, where I specialized in building and optimizing React components to enhance performance and maintainability. I implemented various user interface improvements, ensuring a seamless and engaging user experience for the application. Collaborating closely with the design and backend teams, I contributed to delivering responsive and interactive solutions, further strengthening my expertise in React.js and frontend development best practices.",
    }
  ],

  education: [
    {
      school: "Maharaja Agrasen Institue of Technology",
      href: "https://mait.ac.in/",
      degree: "Bachelors of Technology, Information Technology",
      logoUrl: "/mait.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Modern Public School",
      href: "http://www.mpsshalimarbagh.com/",
      degree: "Class 12th",
      logoUrl: "/mps.webp",
      start: "2020",
      end: "2021",
    },
  ],

  projects: [
    {
      title: "Homestayz",
      href: "https://homestayz.vercel.app/",
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
          href: "https://homestayz.vercel.app/",
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

  certificates: [
    {
      title: "Generative AI for Software Developers Specialization",
      dates: "March 2024",
      location: "",
      description:
        "IBM",
      image:
        "/ibm.webp",
      links: "https://coursera.org/share/cc391d4b518949d92919e8454fd7bc94",
    },
    {
      title: "Introduction to Web Development with HTML, CSS and Javascript",
      dates: "August 2022",
      location: "",
      description:
        "IBM",
      image:
        "/ibm.webp",
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
