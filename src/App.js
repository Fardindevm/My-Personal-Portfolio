import React, { useState } from 'react';
import './index.css';
import ProjectCard from './components/ProjectModal';
import Contact from './components/Contact'
import NavigationAndMenu from './components/NavigationAndMenu';
import Certificate from './components/Certifications';
import Skills from './components/Skills';
import MyImg from './Images/rsz_meme.png';
import { init } from '@emailjs/browser';
init(process.env.REACT_APP_MAIL_ID);

function App() {
  const [viewMode, setViewMode] = useState('desktop');

  const projects = [
    {
      id: 1,
      name: "Space Tourism Website",
      description: "An interactive space tourism website showcasing destinations, crew members, and technology.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917298/Space-tourism-home_onkozz.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361260/space-tourism-mobile_tunodz.jpg",
      technologies: ["React", "Tailwind CSS", "HTML5", "CSS"],
      features: [
        "React Router for seamless navigation",
        "User-centric interface design",
        "Smooth animations and transitions",
        "Custom error page handling",
        "Unique visual style and themes",
        "Interactive elements and components",
        "Responsive design for all devices",
      ],
      liveDemo: "https://fardindevm.github.io/Space-tourism-website/",
      github: "https://github.com/Fardindevm/Space-tourism-website"
    },
    {
      id: 2,
      name: "Multi Step Form",
      description: "A responsive multi-step form for purchasing gaming services with plan and add-on selection.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917285/Multi-step-form_afda3d.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361245/multi-step-form-mobile_t2sus9.jpg",
      technologies: ["React", "Tailwind CSS", "HTML5"],
      features: [
        "Input validation with error messages",
        "Fields must be completed to proceed",
        "Used Validator and react-phone-number-input library",
        "Step navigation",
        "Monthly or yearly plan selection",
        "Multiple add-ons available",
        "Add-ons priced based on plan duration",
        "Purchase summary view",
        "Responsive design for all devices"
      ],
      liveDemo: "https://fardindevm.github.io/Multi-step-form/",
      github: "https://github.com/Fardindevm/Multi-step-form"
    },
    {
      id: 3,
      name: "Ip Tracker",
      description: "A real-time IP address and domain tracking application with interactive map display.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917296/Ip-tracker_hzzz72.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361259/Ip-address-tracker-mobile_bhgb0b.jpg",
      technologies: ["React", "Tailwind CSS", "HTML5", "API"],
      features: [
        "Show user's Ip-address, Location, Timezone, ISP when page loads",
        "being able to search Ip addresses and domains",
        "Used EmailJs Library if Api credit has finished",
        "Used IP Geolocation API and LeafletJS",
        "Responsive design for all devices",
      ],
      liveDemo: "https://fardindevm.github.io/Ip-address-tracker/",
      github: "https://github.com/Fardindevm/Ip-address-tracker"
    },
    {
      id: 4,
      name: "Interactive Comment section",
      description: "A feature-rich messaging app with CRUD operations, LocalStorage, and responsive design.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917285/interactive-comment-section_fhqyb6.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361250/Interactive-comment-section-mobile_q49zsi.jpg",
      technologies: ["React", "Tailwind CSS", "HTML5", "JSON"],
      features: [
        "Create Read Update Delete (CRUD) functionality",
        "LocalStorage for saving changes and retrieving messages",
        "Distinct component breakdown for readability",
        "Time calculation for message age",
        "Older comments displayed at the top",
        "Replies organized by likes",
        "Responsive design for all devices",
      ],
      liveDemo: "https://fardindevm.github.io/Interactive-comment-section-CRUD/",
      github: "https://github.com/Fardindevm/Interactive-comment-section-CRUD"
    },
    {
      id: 5,
      name: "Advice Generator Website",
      description: "A modern advice generator with sleek animations and responsive design.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917281/Advice-generator_xrzu1o.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361251/Advice-generator-mobile_yunojk.jpg",
      technologies: ["React", "CSS", "HTML5", "API"],
      features: [
        "Generate new advice every time",
        "Beautiful loading animation",
        "Smooth animations and transitions",
        "Display animation when the user returns",
        "Retry button if the user's internet is lost",
        "Responsive design for all devices",
      ],
      liveDemo: "https://fardindevm.github.io/Advice-Generator/",
      github: "https://github.com/Fardindevm/Advice-Generator"
    },
    {
      id: 6,
      name: "Age Calculator",
      description: "A smart age calculator with precise date validation and leap year support.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917281/Age_Calculator_fqjwct.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361253/Age-calculator-mobile_otobyz.jpg",
      technologies: ["React", "CSS", "HTML5"],
      features: [
        "Age calculation based on input date",
        "Complete detection of invalid date entries",
        "Specific error messages for incorrect dates",
        "Leap year recognition and handling",
        "Responsive design for all devices"
      ],
      liveDemo: "https://fardindevm.github.io/Age-Calculator/",
      github: "https://github.com/Fardindevm/Age-Calculator"
    },
    {
      id: 7,
      name: "Todo List Light Mode",
      DarkName: "Todo List Dark Mode",
      description: "A Todo List app with theme switching and data persistence.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731878008/Todo_list_Light_Mode_be4lhq.png",
      desktopDarkModeImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731878004/Todo_list_Dark_Mode_zd5jkj.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361257/Todo-lightMode-mobile_arbu40.jpg",
      mobileImageDark: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361258/Todo-DarkMode-mobile_eqdbmc.jpg",
      technologies: ["React", "CSS", "HTML5"],
      features: [
        "Custom error handling component",
        "Edit and delete task controls",
        "Dark & Light theme modes",
        "Allowing the website to automatically detect your default color mode (dark or light)",
        "Utilizing localStorage to save To-Do lists and color mode preferences",
        "Responsive design for all devices"
      ],
      liveDemo: "https://fardindevm.github.io/App-todo/",
      github: "https://github.com/Fardindevm/App-todo",
    },
    {
      id: 8,
      name: "Product List With Cart",
      description: "A shopping cart application with price calculations and order management.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917296/Product_list_with_cart_gk4zwu.png",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731361257/Product-list-mobile_cmddau.jpg",
      technologies: ["React", "CSS", "HTML5"],
      features: [
        "Being able to see the total price and items in the cart",
        "Deleting the item from the cart",
        "can decrease and increase the quantity of the item in the cart",
        "Confirm popover for the cart",
        "Custom Scrollbar form Confirm Popover",
        "abling to cancel the order and order again",
        "Responsive design for all devices"
      ],
      liveDemo: "https://fardindevm.github.io/Coffe-menu/",
      github: "https://github.com/Fardindevm/Coffe-menu"
    },
    {
      id: 9,
      name: "Contact form",
      description: "A responsive e-commerce website with modern UI, shopping cart functionality, and product filtering.",
      desktopImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731917282/Contact-Form_c1ggym.jpg",
      mobileImage: "https://res.cloudinary.com/dlhwuydks/image/upload/v1731877738/db3a1a42-a855-480c-9800-49ea9f667156.png",
      technologies: ["React", "CSS", "HTML5", "jQuery"],
      features: [
        "Using Validator Library for validation",
        "Valid Error Messages",
        "Smooth animation after submitting",
        "Responsive design for all devices",
      ],
      liveDemo: "https://fardindevm.github.io/Contact-form/",
      github: "https://github.com/Fardindevm/Contact-form"
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NavigationAndMenu />
      {/* Hero */}
      <div id="home" className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
        <div className="container 2xl:max-w-[1280px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl md:text-4xl xl:text-5xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="text-blue-400 block md:inline">Fardin Mohammadi</span>
              </h1>
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-white mb-4">
                <span className="text-blue-400">Frontend Developer</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Crafting Modern Web Experiences
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8 max-w-lg">
                I'm a passionate frontend developer specializing in creating responsive
                and user-friendly web applications using React, Tailwind CSS, and modern web technologies.
              </p>
              <a
                href="#contact"
                className="inline-block bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-lg hover:bg-blue-600 transition-colors transform hover:scale-105 duration-300"
              >
                Get In Touch
              </a>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src={MyImg}
                alt="My Image"
                className="rounded-full shadow-lg mx-auto border-4 border-blue-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="min-h-screen bg-gray-900 py-20">
        <div className="container 2xl:max-w-[1280px] mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-blue-400">My Projects</span>
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-4 py-2 rounded-lg ${viewMode === 'desktop'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300'
                }`}
            >
              Desktop View
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-4 py-2 rounded-lg ${viewMode === 'mobile'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-700 text-gray-300'
                }`}
            >
              Mobile View
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={{
                  ...project,
                  image: viewMode === 'desktop' ? project.desktopImage : project.mobileImage,
                  desktopDarkModeImage: viewMode === "desktop" ? project.desktopDarkModeImage : project.mobileImageDark,
                }}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      </div>

      <Skills />
      <Certificate />
      <Contact />

    </div>
  );
}

export default App;
