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
summary: "I’m a passionate **Full Stack Developer** and **Freelancer** with a solid foundation in the **MERN stack**, **React Native**, and a growing interest in **Generative AI**. My programming journey began with Python back in school, which eventually sparked my enthusiasm for web development and machine learning during college. Over time, I’ve expanded my skills in technologies like **HTML, CSS, JavaScript, ReactJS, MongoDB, ExpressJS, NodeJS, MySQL, Next.js, Supabase, Java,** and more, enabling me to build scalable and user-friendly applications. I’ve gained hands-on experience during my internships at **Matrixly AI**, **HDD Ventures**, and **Infosys**, where I worked on real-world projects like building a chat application (**ConnectoBox**) using **ASP.NET, Entity Framework, Java, Angular, Azure**, and **SQL**.",

summary2: "Feel free to reach out to me at **ayushmangarg929@gmail.com** if you’d like to connect or discuss exciting opportunities! You can also connect with me through my socials: [Twitter](https://twitter.com/AyushmanGarg4), [LinkedIn](https://linkedin.com/in/ayushmangarg), and [Peerlist](https://peerlist.io/ayushmangarg).",

  avatarUrl: "/profile/me.webp",
  skills: [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJs",
  "React Native",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Supabase",
  "Python",
  "Tailwind CSS",
  "Bootstrap",
  "Chakra UI",
  "SASS",
  "Styled Components",
  "Java",
  "ASP.NET",
  "Entity Framework Core",
  "Angular",
  "Dialogflow",
  "Azure",
  "Git",
  "GitHub"
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
  logoUrl: "/experience/infosys.webp",
  start: "Feb 2025",
  end: "June 2025",
  description: [
    "Underwent intensive training in Java, SQL, and DBMS.",
    "Built ConnectoBox, a real-world chat application for Infosys.",
    "Developed service and application layers using ASP.NET, Entity Framework, Java, Angular, and Azure.",
    "Applied Agile methodologies and SQL to solve real-world challenges.",
    "Enhanced coding, problem-solving, and collaboration skills in a professional environment."
  ],
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
      description: [
        "Led development of multiple MERN stack and Firebase projects.",
        "Designed, coded, and deployed scalable web applications.",
        "Ensured solutions aligned with client requirements.",
        "Collaborated with cross-functional teams for user-friendly solutions.",
        "Improved full-stack, problem-solving, and end-to-end product development skills."
      ],
    },
    {
      company: "Matrixly AI",
      badges: [],
      href: "https://www.linkedin.com/company/matrixly-ai",
      location: "Remote, Australia",
      title: "Frontend Developer Intern",
      logoUrl: "/experience/matrixly.webp",
      start: "Apr 2024",
      end: "June 2024",
      description: [
        "Specialized in building and optimizing React components.",
        "Enhanced performance and maintainability of the application.",
        "Implemented user interface improvements for better UX.",
        "Collaborated with design and backend teams for responsive solutions.",
        "Strengthened expertise in React.js and frontend best practices."
      ],
    }
  ],

  education: [
    {
      school: "Maharaja Agrasen Institue of Technology",
      href: "https://mait.ac.in/",
      degree: "Bachelors of Technology, Information Technology",
      logoUrl: "/education/mait.webp",
      start: "2021",
      end: "2025",
    },
    {
      school: "Modern Public School",
      href: "http://www.mpsshalimarbagh.com/",
      degree: "Class 12th",
      logoUrl: "/education/mps.webp",
      start: "2020",
      end: "2021",
    },
  ],

  projects: {
    delivered: [
      {
        title: "ConnectoBox",
        description: "A real-world chat app built at Infosys, focusing on scalable service and application layers using modern enterprise tech.",
        techStack: ["ASP.NET", "Entity Framework", "Java", "Angular", "Azure", "SQL"],
        coverImage: "/connectobox/1.png",
        images: [
          "/connectobox/1.png",
          "/connectobox/2.png",
          "/connectobox/3.png",
          "/connectobox/4.png",
          "/connectobox/5.png",
          "/connectobox/6.png",
          "/connectobox/7.png",
          "/connectobox/8.png"
        ],
      },
      {
        title: "College Mart",
        description: "A marketplace for university students to buy, sell, and exchange products. Built with Next.js and Supabase.",
        techStack: ["Next.js", "Supabase"],
        coverImage: "/collegemart/collegemart.png",
        images: ["/collegemart/collegemart.png"],
      },
    ],
    personal: [
      {
        title: "Homestayz",
        description: "A MERN stack homestay booking platform for easy listing and renting.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Dialogflow"],
        coverImage: "/homestayz/homestayz.webp",
        images: ["/homestayz/homestayz.webp"],
        githubLink: "https://github.com/ayushmangarg2003/Homestayz",
        liveLink: "https://homestayz.vercel.app/",
      },
      {
        title: "DocCARE",
        description: "A full stack doctor booking app with a user-friendly interface and seamless experience.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        coverImage: "/doccare/DocCARE.webp",
        images: ["/doccare/DocCARE.webp"],
        githubLink: "https://github.com/ayushmangarg2003/DocCare",
        liveLink: "https://book-doc.vercel.app/",
      },
    ],
  },

  certificates: [
    {
      title: "Generative AI for Software Developers Specialization",
      dates: "March 2024",
      location: "",
      description:
        "IBM",
      image:
        "/certificates/ibm.webp",
      links: "https://coursera.org/share/cc391d4b518949d92919e8454fd7bc94",
    },
    {
      title: "Introduction to Web Development with HTML, CSS and Javascript",
      dates: "August 2022",
      location: "",
      description:
        "IBM",
      image:
        "/certificates/ibm.webp",
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
        "/certificates/gymnasium.webp",
      links: "https://www.credential.net/3611f2e5-78ba-4f54-b4b2-c3376dae275f#gs.3iebig",
    },
  ],
} as const;
