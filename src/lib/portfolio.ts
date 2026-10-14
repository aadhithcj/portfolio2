export const profile = {
  name: "Aadhith C Joseph",
  handle: "aadhithcj",
  location: "Kannur, Kerala",
  email: "aadhithcj9@gmail.com",
  github: "https://github.com/aadhithcj",
  linkedin: "https://linkedin.com/in/aadhithcj",
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  stack: string[];
  tagline: string;
  points: string[];
};

export const projects: Project[] = [
  {
    slug: "devopshub",
    name: "DevOpsHub",
    year: "2026",
    stack: [
      "Python",
      "Flask",
      "React",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    tagline:
      "A containerised full-stack app with an automated delivery pipeline.",
    points: [
      "Built and containerised a full-stack Flask, React and PostgreSQL application using Docker Compose.",
      "Implemented Git workflows, automated testing and frontend builds with GitHub Actions.",
      "Configured CI/CD with environment-based configuration and secure secrets management.",
    ],
  },
  {
    slug: "retina",
    name: "RETINA",
    year: "2026",
    stack: ["Kotlin", "Android", "Computer Vision"],
    tagline: "An AI assistive Android system for visually impaired users.",
    points: [
      "Developed an assistive Android application using object detection, OCR, currency recognition and audio feedback.",
      "Developed obstacle detection and navigation functionality using computer vision and machine learning.",
    ],
  },
  {
    slug: "inventory",
    name: "Inventory System",
    year: "2026",
    stack: ["Python", "PyQt6", "SQLite"],
    tagline: "Desktop stock and billing software for a motorbike shop.",
    points: [
      "Supports stock tracking, part locations, pricing and purchase/customer billing.",
      "Designed to manage 100+ inventory records per day and streamline daily operations.",
    ],
  },
  {
    slug: "crop-recommendation",
    name: "Crop Recommender",
    year: "2025",
    stack: ["Python", "Flask", "React"],
    tagline: "Crop suggestions from weather and historical agricultural data.",
    points: [
      "Built a web-based recommendation system using React, Flask, weather data and historical agricultural data.",
      "Contributed to model training, preprocessing, evaluation and integration with the web app.",
    ],
  },
  {
    slug: "cv-sorting",
    name: "CV Sorter",
    year: "2024",
    stack: ["React", "Supabase"],
    tagline: "Job posting and resume management with skill-based filtering.",
    points: [
      "Developed a web platform for job posting and resume management with automated filtering and skill-based candidate organisation.",
    ],
  },
];
