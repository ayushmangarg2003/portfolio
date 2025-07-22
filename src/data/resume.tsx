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
summary: "I’m a passionate **Software Engineer** and **Freelancer** with a solid foundation in **MERN stack**, **Next.js**, and a growing interest in **Machine Learning**. My programming journey began with Python back in 2019, which eventually sparked my enthusiasm for **web development** and **app development** during college. Over time, I’ve expanded my skills in multiple domains enabling me to build scalable and user-friendly applications. I have successfully delivered **6+ projects** as a freelancer. I’ve gained hands-on experience during my internships at **Matrixly AI**, **HDD Ventures**, and **Infosys**, where I worked on real-world projects and currently I am working at **Dzylo** as a **Software Engineer**.",

  summary2: "Feel free to reach out to me at **ayushmangarg929@gmail.com** if you’d like to connect or discuss exciting opportunities! You can also connect with me through my socials: [Twitter](https://twitter.com/AyushmanGarg4), [LinkedIn](https://linkedin.com/in/ayushmangarg), and [Peerlist](https://peerlist.io/ayushmangarg).",

  avatarUrl: "/profile/me.webp",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
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
      company: "Dzylo",
      badges: [],
      href: "https://dzylo.com/",
      location: "On-site, Gurgaon, India",
      title: "Software Engineer",
      logoUrl: "/experience/dzylo.png",
      start: "July 2025",
      end: "present",
      description: [
        "Built Angular frontend interacting with **Node.js** and **Ktor** APIs.",
        "Worked on **Node.js** API integrating with **DynamoDB**.",
        "Contributed to **Ktor** backend for service endpoints.",
        "Wrote **Python** scripts for database migration tasks."
      ]

    },
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
        "Underwent intensive training in **Java**, **SQL**, and **DBMS**.",
        "Built ConnectoBox, a real-world chat application for Infosys.",
        "Developed service and application layers using **ASP.NET**, **Entity Framework**, **Java**, **Angular**, and **Azure**.",
        "Applied **Agile** methodologies and **SQL** to solve real-world challenges.",
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
        "Led development of multiple **MERN stack** and **Firebase** projects.",
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
        "Specialized in building and optimizing **React** components.",
        "Enhanced performance and maintainability of the application.",
        "Implemented user interface improvements for better **UX**.",
        "Collaborated with design and backend teams for responsive solutions.",
        "Strengthened expertise in **React.js** and frontend best practices."
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
        title: "Benchmark Insurance",
        description: "A landing page for Benchmark Insurance Group's website that I delivered within 2 days, built using Next.js and Tailwind CSS",
        techStack: ["Next.js", "Tailwind CSS"],
        coverImage: "/benchmark/1.png",
        images: [
          "/benchmark/1.png",
          "/benchmark/2.png",
          "/benchmark/3.png",
          "/benchmark/4.png",
          "/benchmark/5.png",
          "/benchmark/6.png",
        ],
      },
      {
        title: "Rise Group",
        description: "A comprehensive multipage website featuring fully responsive design and modern UI/UX. Built using Next.js and delivered as a complete digital solution",
        techStack: ["Next.js", "Tailwind CSS"],
        coverImage: "/risegroup/1.png",
        images: [
          "/risegroup/1.png",
          "/risegroup/2.png",
          "/risegroup/3.png",
          "/risegroup/4.png",
          "/risegroup/5.png",
          "/risegroup/6.png",
          "/risegroup/7.png",
          "/risegroup/8.png",
        ],
      },
      {
        title: "College Mart",
        description: "A marketplace for university students to buy, sell, and exchange products. Built with Next.js and Supabase.",
        techStack: ["Next.js", "Supabase"],
        coverImage: "/collegemart/1.webp",
        images: [
          "/collegemart/1.webp",
          "/collegemart/2.png",
          "/collegemart/3.webp",
          "/collegemart/4.webp",
          "/collegemart/5.png"
        ],
      },
    ],
    personal: [


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
