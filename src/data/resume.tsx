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

  avatarUrl: "/me.webp",
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
  logoUrl: "/infosys.webp",
  start: "Feb 2025",
  end: "June 2025",
  description: "As an Engineering Trainee at Infosys, I am undergoing extensive training in Java, SQL, and database management systems (DBMS), while working on an industry-driven project called ConnectoBox—a real-world chat application—where I focused on building service and application layers using ASP.NET, Entity Framework, Java, Angular, and Azure. Guided by experienced mentors, I applied Agile methodologies and SQL to address real-world challenges. This experience has strengthened my coding skills, improved my problem-solving abilities, and enhanced my collaboration skills in a professional software development environment.",
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

  projects: {
    delivered: [
      {
        title: "ConnectoBox",
        description: "A real-world chat application built during my Infosys training. Focused on building service and application layers using ASP.NET, Entity Framework, Java, Angular, and Azure.",
        techStack: ["ASP.NET", "Entity Framework", "Java", "Angular", "Azure", "SQL"],
        coverImage: "/infosys.webp",
        images: ["/infosys.webp", "/TravelArc.webp", "/homestayz.webp", "/DocCARE.webp"],
      },
      {
        title: "College Mart",
        description: "CollegeMart is a simple and intuitive marketplace designed exclusively for college University students to buy, sell, and exchange products. Built using Next.js and Supabase, the platform provides a seamless experience for listing and discovering items within the university community.",
        techStack: ["Next.js", "Supabase"],
        coverImage: "/collegemart.png",
        images: ["/collegemart.png"],
      },
    ],
    personal: [
      {
        title: "Homestayz",
        description: "Homestays is an innovative Homestay booking platform developed using the MERN Stack. The platform allows users to easily Create, Read, and Update Homestays. With its intuitive design and efficient user experience, Homestays simplifies the process of booking and renting.",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Dialogflow"],
        coverImage: "/homestayz.webp",
        images: ["/homestayz.webp"],
        githubLink: "https://github.com/ayushmangarg2003/Homestayz",
        liveLink: "https://homestayz.vercel.app/",
      },
      {
        title: "DocCARE",
        description: "DocCARE is a Full Stack Doctor Booking platform built using React.js and CSS in frontend and Node.js, Express.js and Mongo DB in backend. It showcases my skills in making user friendly interfaces for seamless user experience",
        techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
        coverImage: "/DocCARE.webp",
        images: ["/DocCARE.webp"],
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
