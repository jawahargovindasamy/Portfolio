import { useState, useEffect } from "react";
import JawaharImg from "../../public/Jawahar.jpg";
import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt,
  FaBars,
  FaTimes,
  FaChevronUp,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    {
      name: "HTML5",
      percentage: 95,
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS3",
      percentage: 90,
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      percentage: 92,
      icon: <SiTailwindcss className="text-cyan-400" />,
    },
    {
      name: "JavaScript",
      percentage: 90,
      icon: <FaJs className="text-yellow-400" />,
    },
    {
      name: "React",
      percentage: 90,
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Node.js",
      percentage: 92,
      icon: <FaNodeJs className="text-green-400" />,
    },
    {
      name: "Express.js",
      percentage: 95,
      icon: <SiExpress className="text-gray-400" />,
    },
    {
      name: "MongoDB",
      percentage: 80,
      icon: <SiMongodb className="text-green-500" />,
    },
    {
      name: "MySQL",
      percentage: 90,
      icon: <SiMysql className="text-blue-500" />,
    },
    {
      name: "Git",
      percentage: 85,
      icon: <FaGitAlt className="text-orange-600" />,
    },
  ];

  const projects = [
    {
      title: "Sonique",
      description:
        "Sonique is a full-stack music streaming platform built with React and Node.js, offering seamless audio playback, user playlists, song discovery, and a modern, responsive UI.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Cloudinary",
      ],
      github1:
        "https://github.com/jawahargovindasamy/Music_Streaming_Application_Frontend",
      github2:
        "https://github.com/jawahargovindasamy/Music-Streaming-Application-Backend",
      live: "https://soniqueapp.netlify.app/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPGOuBonB9AEX_FVpEUOH44mTBmmNpi3ybjw&s",
    },
    {
      title: "Notes Management",
      description:
        "Notes Management is a lightweight and responsive web app for creating, editing, organizing, and deleting notes. It supports rich-text formatting, color tagging, and quick search for efficient note-taking.",
      technologies: ["React", "Tailwind CSS"],
      github1: "https://github.com/jawahargovindasamy/Notes_App",
      live: "https://notessavingapplication.netlify.app/",
      image:
        "https://i.pinimg.com/736x/63/fe/d6/63fed6d3417d5fce7ccd4533f4ef7d2c.jpg",
    },
    {
      title: "Smart Expense Tracker",
      description:
        "Smart Expense Tracker is a responsive web application that helps users manage their daily expenses, set budgets, and visualize spending patterns through interactive charts and real-time updates.",
      technologies: ["React", "Chart", "Tailwind CSS"],
      github1:
        "https://github.com/jawahargovindasamy/Expense-Tracker-Application",
      live: "https://expensetrackerappli.netlify.app/",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZteyic83phVYdkynZNxkNf7l07Gd5x8fpw&s",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-800/95 backdrop-blur-md shadow-lg"
            : "bg-gray-800/90 backdrop-blur-sm"
        } border-b border-gray-700`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="text-lg sm:text-xl font-bold text-yellow-400">
              Jawahar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
                {["Home", "About", "Skills", "Projects", "Contact"].map(
                  (item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-yellow-400 px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item}
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <FaTimes className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FaBars className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-64 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={handleNavClick}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-14 sm:pt-16 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-yellow-400 block sm:inline">Jawahar</span>
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-6">
                Full Stack Web Developer
              </h2>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about building innovative web solutions with modern
                technologies. I create functional, user-friendly applications
                that solve real-world problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start">
                <a
                  href="/Jawahar%20Govindasamy%20Resume.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                    <FaDownload className="mr-2 h-4 w-4" />
                    Download Resume
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                    <FaEnvelope className="mr-2 h-4 w-4" />
                    Get In Touch
                  </button>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-60 h-60 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                  <img
                    src={JawaharImg}
                    alt="Jawahar - Web Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  I'm Jawahar Govindasamy, a dedicated Full Stack Web Developer
                  specialized in MERN Stack(MongoDB, Express.js, React.js,
                  Node.js) with a strong focus on both front-end and back-end
                  development. I have a passion for creating dynamic and
                  responsive web applications that provide seamless user
                  experiences.
                </p>
                <p>
                  My passion lies in building websites that are not only
                  functional and user-friendly, but also visually appealing. I
                  strive to add a personal touch to every project, ensuring that
                  each product is eye-catching and intuitive to use.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-700 border border-gray-600 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-yellow-400">
                  Personal Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm text-gray-400">Email</p>
                      <p className="text-sm sm:text-base text-white break-all">
                        jawahargovindasamy19@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="h-5 w-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-gray-400">Phone</p>
                      <p className="text-sm sm:text-base text-white">
                        +91 9597941922
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8">
                    <a
                      href="https://github.com/jawahargovindasamy"
                      target="_blank"
                      className="flex-1"
                      rel="noreferrer"
                    >
                      <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200">
                        <FaGithub className="h-4 w-4 mr-2" />
                        GitHub
                      </button>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jawahar-govindasamy-407480236/"
                      target="_blank"
                      className="flex-1"
                    >
                      <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200">
                        <FaLinkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Skills
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-yellow-400 text-center">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 mr-3 sm:mr-4 bg-white rounded-lg p-1.5 sm:p-2 flex items-center justify-center flex-shrink-0">
                      <div className="text-lg sm:text-2xl">{skill.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm sm:text-lg font-semibold text-white truncate">
                          {skill.name}
                        </h4>
                        <span className="text-yellow-400 font-semibold text-sm sm:text-base ml-2">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
              Projects
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-lg overflow-hidden hover:transform hover:scale-105 hover:border-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-opacity-20 hover:bg-opacity-10 transition-all duration-300"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white hover:text-yellow-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-xs sm:text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <a
                      href={project.github1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200 group">
                        <FaGithub className="h-3 w-3 sm:h-4 sm:w-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                        Front-End Code
                      </button>
                    </a>

                    {project.github2 && (
                      <a
                        href={project.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200 group">
                          <FaGithub className="h-3 w-3 sm:h-4 sm:w-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                          Back-End Code
                        </button>
                      </a>
                    )}

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-md transition-colors duration-200 group">
                        <FaExternalLinkAlt className="h-3 w-3 sm:h-4 sm:w-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                        Live Demo
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-400">
                Let's Work Together
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a project in mind or just want to
                chat about web development, feel free to reach out!
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaEnvelope className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      Email
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm break-all">
                      jawahargovindasamy19@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-400 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
                    <FaPhone className="h-4 w-4 sm:h-6 sm:w-6 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm sm:text-base">
                      Phone
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      +91 9597941922
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6 sm:mt-8">
                <a
                  href="https://github.com/jawahargovindasamy"
                  target="_blank"
                  className="flex-1"
                  rel="noreferrer"
                >
                  <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200">
                    <FaGithub className="h-4 w-4 mr-2" />
                    GitHub
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/jawahar-govindasamy-407480236/"
                  target="_blank"
                  className="flex-1"
                  rel="noreferrer"
                >
                  <button className="w-full inline-flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent rounded-md transition-colors duration-200">
                    <FaLinkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </button>
                </a>
              </div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-6">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-colors duration-200 text-sm sm:text-base resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-4 py-2 sm:py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Jawahar. All rights reserved. Built with React and Tailwind
              CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-yellow-400 hover:bg-yellow-500 text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 z-40"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
