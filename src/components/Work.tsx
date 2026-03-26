import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Payment Gateway",
    category: "Payment Processing System",
    tools: "Node.js, Express.js, MongoDB, Auth",
    images: ["/images/payment1.png", "/images/payment2.png", "/images/payment3.png"],
    github: "https://github.com/anuragverma4895/payment-processing-system",
    live: "https://anuragverma-dev.vercel.app/"
  },
  {
    title: "E-Commerce Tech Store",
    category: "Full Stack E-Commerce",
    tools: "React.js, Node.js, Express.js, MongoDB",
    images: ["/images/ecommerce1.png", "/images/ecommerce2.png", "/images/ecommerce3.png"],
    github: "https://github.com/anuragverma4895/Ecommerce-Tech-Store",
    live: "https://ecommerce-tech-store-seven.vercel.app/"
  },
  {
    title: "Social Media Platform",
    category: "Social Networking App",
    tools: "React.js, Node.js, MongoDB, JWT Auth",
    images: ["/images/SocialMedia1.png", "/images/SocialMedia2.png", "/images/SocialMedia3.png", "/images/SocialMedia4.png", "/images/SocialMedia5.png"],
    github: "https://github.com/anuragverma4895/Social-Media-Platform",
    live: "https://social-media-platform-six-taupe.vercel.app/login"
  },
  {
    title: "Research Grant System",
    category: "Grant Management Portal",
    tools: "PHP, MySQL, HTML, CSS",
    images: ["/images/GrantManagement1.png", "/images/GrantManagement2.png", "/images/GrantManagement3.png", "/images/GrantManagement4.png"],
    github: "https://github.com/anuragverma4895/Research-Grant-Management-System",
    live: "https://grant-management-system.infinityfreeapp.com/?i=1"
  }
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper" style={{ flexDirection: 'column' }}>
                      <WorkImage images={project.images} alt={project.title} />
                      <div className="project-links">
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button project-button-github">
                            GitHub <FaGithub />
                          </a>
                        )}
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-button project-button-live">
                            Live App <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
