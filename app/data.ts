// Edit your portfolio content here. Sections import these values directly.
// Image paths are relative to public/, for example /images/portrait.png.

export const siteData = {
  title: "Aadil Ansari Portfolio",
  description:
    "Modern frontend portfolio built with Next.js, Tailwind CSS, and GSAP.",
};

export const heroData = {
  name: "Aadil Ansari",
  titleLines: ["UI/UX Designer &", "Frontend", "Developer"],
  description: "I design and build clean, responsive digital experiences.",
  backgroundImage: "/images/hero-bg-text.svg",
  portrait: {
    src: "/images/adil-hero-img-2.webp",
    alt: "Portrait of Aadil Ansari",
  },
};

export const aboutData = {
  label: "About Me",
  title: "Designing thoughtful experiences. Building them into real products.",
  paragraphs: [
    "I'm Mohammad Aadil Ansari, a UI/UX Designer and Front-End Developer with 3.5+ years of experience creating clean, user-friendly and responsive digital products.",
    "I work across the complete process — from wireframes, user flows and high-fidelity designs in Figma to responsive frontend development using React, Next.js, WordPress and modern web technologies.",
  ],
  highlights: [
    {
      label: "Experience",
      value: "3.5+ years",
    },
    {
      label: "Design",
      value: "UI/UX • Figma • Prototyping",
    },
    {
      label: "Development",
      value: "React • Next.js • WordPress",
    },
    {
      label: "Focus",
      value: "Usability • Responsive UI • Performance",
    },
  ],
};

export const skillsData = {
  label: "Skills & Tools",
  title: "Design, development, and the details that make an interface work.",
  description:
    "My toolkit covers the full journey from wireframes and interactive prototypes to reusable frontend components and optimized web experiences.",
  groups: [
    {
      title: "Frontend Development",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      title: "Frontend Frameworks",
      skills: ["React.js", "Next.js", "Framer"],
    },
    {
      title: "UI/UX & Visual Design",
      skills: [
        "Figma",
        "Wireframing",
        "Advanced Prototyping",
        "Responsive UI Design",
        "Design Systems",
        "Reusable UI Components",
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
    },
    {
      title: "Motion & Interaction",
      skills: ["GSAP", "Framer Motion", "Micro-interactions"],
    },
    {
      title: "CMS & Backend Tools",
      skills: ["WordPress", "Strapi (Headless CMS)"],
    },
    {
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Performance & Quality",
      skills: [
        "Web Accessibility",
        "SEO Optimization",
        "Cross-Browser Compatibility",
        "Web Performance Optimization",
      ],
    },
  ],
};

export const featuredWorkData = {
  label: "Featured Work",

  title:
    "Selected projects across UI/UX design, frontend development, React, and WordPress.",

  description:
    "A collection of projects where I worked across UI/UX design, responsive development, and production-ready web experiences.",

  actionLabel: "View project",

  projects: [
    {
      id: "growin",

      title: "Growin.biz",

      category: "UI/UX + WordPress Development",

      description:
        "Responsive website designed in Figma and developed in WordPress with consistent layouts across devices.",

      thumbnail: "/images/projects/growin/cover.webp",

      tags: ["Figma", "WordPress", "Responsive Design"],

      projectDetails: {
        role: "UI/UX Designer & WordPress Developer",

        tools: ["Figma", "WordPress"],

        responsibilities: [
          "Designed the responsive website UI in Figma",
          "Converted the approved design into WordPress",
          "Maintained visual consistency across different screen sizes",
        ],

        gallery: [],

        links: {
          live: "https://growin.biz/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "hipship",

      title: "Hipship.com",

      category: "UI/UX + Frontend Development",

      description:
        "Website UI designed in Figma and converted into a clean and responsive frontend.",

      thumbnail: "/images/projects/hipship/cover.webp",

      tags: ["Figma", "HTML", "CSS"],

      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",

        tools: ["Figma", "HTML", "CSS"],

        responsibilities: [
          "Designed the website UI in Figma",
          "Converted the approved design into frontend code",
          "Created responsive layouts using HTML and CSS",
        ],

        gallery: [],

        links: {
          live: "https://hipship.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "sumcircle",

      title: "Sumcircle.com",

      category: "UI/UX + Frontend Development",

      description:
        "Responsive website designed in Figma and developed using clean HTML and CSS.",

      thumbnail: "/images/projects/sumcircle/cover.webp",

      tags: ["Figma", "HTML", "CSS", "JavaScript"],

      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",

        tools: ["Figma", "HTML", "CSS", "JavaScript"],

        responsibilities: [
          "Designed the website UI in Figma",
          "Converted the approved design into frontend code",
          "Built clean and responsive layouts",
        ],

        gallery: [],

        links: {
          live: "https://sumcircle.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "crpko",

      title: "CRPKO",

      category: "UI/UX Design",

      description:
        "Complete website UI/UX design and interactive prototype created in Figma.",

      thumbnail: "/images/projects/crpko/cover.webp",

      tags: ["Figma", "UI/UX Design", "Prototyping"],

      projectDetails: {
        role: "UI/UX Designer",

        tools: ["Figma"],

        responsibilities: [
          "Created the complete website UI/UX design",
          "Designed a clear visual hierarchy",
          "Maintained a consistent user experience",
          "Created an interactive prototype in Figma",
        ],

        gallery: [],

        links: {
          live: "",
          figma:
            "https://www.figma.com/proto/c31eyFbu9zw3ULCRtJ5UTc/CRPKO?node-id=334-3854",
          github: "",
        },
      },
    },

    {
      id: "nuxeno",

      title: "Nuxeno",

      category: "UI/UX Design",

      description:
        "Website UI/UX design and interactive prototype created in Figma.",

      thumbnail: "/images/projects/nuxeno/cover.webp",

      tags: ["Figma", "UI/UX Design", "Prototyping"],

      projectDetails: {
        role: "UI/UX Designer",

        tools: ["Figma"],

        responsibilities: [
          "Created the website UI/UX design",
          "Designed responsive interface layouts",
          "Created an interactive prototype in Figma",
        ],

        gallery: [],

        links: {
          live: "",
          figma:
            "https://www.figma.com/proto/W7yixBjFiZnOzFw0PRM9i9/Nuxeno?node-id=693-2&starting-point-node-id=693%3A2",
          github: "",
        },
      },
    },

    {
      id: "the-green-gecko",

      title: "The Green Gecko",

      category: "UI/UX + React Development",

      description:
        "Responsive website designed in Figma and developed as a React website using reusable components.",

      thumbnail: "/images/projects/the-green-gecko/cover.webp",

      tags: ["Figma", "React", "Tailwind CSS"],

      projectDetails: {
        role: "UI/UX Designer & React Developer",

        tools: ["Figma", "React", "Tailwind CSS"],

        responsibilities: [
          "Designed the responsive UI in Figma",
          "Developed the website using React",
          "Used Tailwind CSS for responsive styling",
          "Created reusable frontend components",
        ],

        gallery: [],

        links: {
          live: "https://www.thegreengecko.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "hedge-square",

      title: "Hedge Square",

      category: "UI/UX + Frontend Development",

      description:
        "Website UI designed in Figma and converted into clean and responsive frontend code.",

      thumbnail: "/images/projects/hedge-square/cover.webp",

      tags: ["Figma", "HTML", "CSS"],

      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",

        tools: ["Figma", "HTML", "CSS"],

        responsibilities: [
          "Created the website UI in Figma",
          "Converted the approved design into frontend code",
          "Built responsive HTML and CSS layouts",
        ],

        gallery: [],

        links: {
          live: "https://hedge-square.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "equicomtech",

      title: "Equicomtech",

      category: "UI/UX + React Development",

      description:
        "Responsive website designed in Figma and developed in React with Tailwind CSS.",

      thumbnail: "/images/projects/equicomtech/cover.webp",

      tags: ["Figma", "React", "Tailwind CSS"],

      projectDetails: {
        role: "UI/UX Designer & React Developer",

        tools: ["Figma", "React", "Tailwind CSS"],

        responsibilities: [
          "Designed the responsive UI in Figma",
          "Developed the website using React",
          "Used Tailwind CSS for responsive styling",
          "Created reusable frontend components",
        ],

        gallery: [],

        links: {
          live: "https://equicomtech.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "nutrivance-health",

      title: "Nutrivance Health",

      category: "WordPress Development",

      description:
        "Responsive product-enquiry website with clear product browsing and enquiry flows.",

      thumbnail: "/images/projects/nutrivance/cover.webp",

      tags: ["WordPress", "Responsive Development"],

      projectDetails: {
        role: "WordPress Developer",

        tools: ["WordPress"],

        responsibilities: [
          "Developed the responsive WordPress website",
          "Created product browsing experiences",
          "Implemented product enquiry flows",
          "Optimized the interface for different screen sizes",
        ],

        gallery: [],

        links: {
          live: "https://nutrivancehealth.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "super-vista-academy",

      title: "Super Vista Academy",

      category: "WordPress Development",

      description:
        "Custom WordPress website with responsive layouts and performance-focused development.",

      thumbnail: "/images/projects/super-vista/cover.webp",

      tags: ["WordPress", "Responsive Design", "Performance"],

      projectDetails: {
        role: "WordPress Developer",

        tools: ["WordPress"],

        responsibilities: [
          "Delivered custom WordPress development",
          "Created responsive page layouts",
          "Optimized website performance",
          "Improved loading experience across devices",
        ],

        gallery: [],

        links: {
          live: "https://supervistaacademy.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "super-systems",

      title: "The Super Systems",

      category: "UI/UX + Frontend Development",

      description:
        "Website UI designed in Figma and converted into responsive HTML and CSS frontend code.",

      thumbnail: "/images/projects/super-systems/cover.webp",

      tags: ["Figma", "HTML", "CSS"],

      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",

        tools: ["Figma", "HTML", "CSS"],

        responsibilities: [
          "Designed the website UI in Figma",
          "Converted approved designs into frontend code",
          "Created responsive HTML and CSS layouts",
        ],

        gallery: [],

        links: {
          live: "https://thesupersystems.com/",
          figma: "",
          github: "",
        },
      },
    },

    {
      id: "metaworks",

      title: "The MetaWorks",

      category: "UI/UX + Frontend Development",

      description:
        "Website designed in Figma and developed with smooth animations and interaction details.",

      thumbnail: "/images/projects/metaworks/cover.webp",

      tags: ["Figma", "HTML", "CSS", "Animations"],

      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",

        tools: ["Figma", "HTML", "CSS"],

        responsibilities: [
          "Designed the website UI in Figma",
          "Developed the frontend",
          "Added smooth animations",
          "Created interaction details for a more engaging experience",
        ],

        gallery: [],

        links: {
          live: "https://www.themetaworks.com/",
          figma: "",
          github: "",
        },
      },
    },
    {
      id: "iriscp",
      title: "Iriscp",
      category: "UI/UX + React Development",
      description:
        "Website UI designed in Figma and converted into a static React website.",
      thumbnail: "/images/projects/iriscp/cover.webp",
      tags: ["Figma", "React"],
      projectDetails: {
        role: "UI/UX Designer & React Developer",
        tools: ["Figma", "React"],
        responsibilities: [
          "Designed the website UI in Figma",
          "Converted the Figma design into a static React website",
        ],
        gallery: [],
        links: {
          live: "https://iriscp.com/",
          figma: "",
          github: "",
        },
      },
    },
    {
      id: "swifttech-technologies",
      title: "Swifttech Technologies",
      category: "UI/UX + Frontend Development",
      description:
        "Website designed in Figma and developed using HTML, CSS, and JavaScript.",
      thumbnail: "/images/projects/swifttech-technologies/cover.webp",
      tags: ["Figma", "HTML", "CSS", "JavaScript"],
      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",
        tools: ["Figma", "HTML", "CSS", "JavaScript"],
        responsibilities: [
          "Created the website design in Figma",
          "Converted the design into HTML, CSS, and JavaScript code",
        ],
        gallery: [],
        links: {
          live: "https://theswifttechnologies.com/",
          figma: "",
          github: "",
        },
      },
    },
    {
      id: "sun-systems",
      title: "The Sun Systems",
      category: "UI/UX + Frontend Development",
      description:
        "Website UI designed in Figma and converted into HTML, CSS, and JavaScript code.",
      thumbnail: "/images/projects/sun-systems/cover.webp",
      tags: ["Figma", "HTML", "CSS", "JavaScript"],
      projectDetails: {
        role: "UI/UX Designer & Front-End Developer",
        tools: ["Figma", "HTML", "CSS", "JavaScript"],
        responsibilities: [
          "Created the website UI design in Figma",
          "Converted the design into HTML, CSS, and JavaScript code",
        ],
        gallery: [],
        links: {
          live: "https://thesunsystems.com/",
          figma: "",
          github: "",
        },
      },
    },
    {
      id: "ezykheti-app",
      title: "Ezykheti App",
      category: "Mobile App UI Design & Prototyping",
      description:
        "A farm equipment booking app for farmers, with UI design and an interactive prototype created in Figma.",
      thumbnail: "/images/projects/ezykheti-app/cover.webp",
      tags: ["Figma", "Mobile App", "UI Design", "Prototyping"],
      projectDetails: {
        role: "UI Designer & Prototyper",
        tools: ["Figma"],
        responsibilities: [
          "Designed the UI for a farm equipment booking app",
          "Created an interactive prototype in Figma",
        ],
        gallery: [],
        links: {
          live: "",
          figma:
            "https://www.figma.com/proto/dPr3tG5kqNl6dQelM7wEh4/Ezykheti-App?node-id=1-591&t=W4TN2yAy9oOryyin-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A591",
          github: "",
        },
      },
    },
    {
      id: "ezykheti-landing-page",
      title: "Ezykheti Landing Page",
      category: "Landing Page Design & Prototyping",
      description:
        "Landing page design and interactive prototype created in Figma for Ezykheti, a farm equipment booking platform.",
      thumbnail: "/images/projects/ezykheti-landing-page/cover.webp",
      tags: ["Figma", "Landing Page", "UI Design", "Prototyping"],
      projectDetails: {
        role: "UI Designer & Prototyper",
        tools: ["Figma"],
        responsibilities: [
          "Designed the Ezykheti landing page in Figma",
          "Created an interactive landing page prototype",
        ],
        gallery: [],
        links: {
          live: "",
          figma:
            "https://www.figma.com/proto/KsvIvCNPouZWFETt3RI22o/DSH?node-id=250-17&t=7giFNHssr1NPOjUT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=250%3A17&hide-ui=1",
          github: "",
        },
      },
    },
    {
      id: "ezykheti-dashboard",
      title: "Ezykheti Dashboard",
      category: "Dashboard UI Design & Prototyping",
      description:
        "Dashboard UI design and interactive prototype created in Figma for Ezykheti.",
      thumbnail: "/images/projects/ezykheti-dashboard/cover.webp",
      tags: ["Figma", "Dashboard", "UI Design", "Prototyping"],
      projectDetails: {
        role: "UI Designer & Prototyper",
        tools: ["Figma"],
        responsibilities: [
          "Designed the Ezykheti dashboard UI in Figma",
          "Created an interactive dashboard prototype",
        ],
        gallery: [],
        links: {
          live: "",
          figma:
            "https://www.figma.com/proto/KsvIvCNPouZWFETt3RI22o/DSH?node-id=4-2&t=7giFNHssr1NPOjUT-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=4%3A2&hide-ui=1",
          github: "",
        },
      },
    },
  ],
};

export const contactData = {
  label: "Contact",
  title: "Let’s build something together.",
  description:
    "Have a project in mind? Get in touch to discuss design and frontend development.",
  links: [
    {
      type: "phone",
      label: "Phone",
      value: "+91 7607252198",
      href: "tel:+917607252198",
    },
    {
      type: "email",
      label: "Email",
      value: "adilansari760725@gmail.com",
      href: "mailto:adilansari760725@gmail.com",
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "Aadil Ansari",
      href: "https://www.linkedin.com/in/aadil-ansari-b329b623a/",
    },
    {
      type: "github",
      label: "GitHub",
      value: "adilansari03",
      href: "https://github.com/adilansari03",
    },
  ],
} as const;

export const footerData = {
  text: "© 2026 Aadil Ansari. Built with Next.js, Tailwind CSS.",
};
