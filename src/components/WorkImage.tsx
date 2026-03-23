import { useState, useEffect } from "react";
import { MdArrowOutward, MdArrowBack, MdArrowForward } from "react-icons/md";

interface Props {
  images: string[];
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const hasMultipleImages = props.images && props.images.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? props.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === props.images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === props.images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, props.images]);

  return (
    <div className="work-image">
      <div
        className="work-image-in"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor={"disable"}
      >
        {props.link && (
          <a href={props.link} target="_blank" rel="noopener noreferrer" className="work-link" title="View Project Image">
            <MdArrowOutward />
          </a>
        )}
        <img
          src={props.images && props.images.length > 0 ? props.images[currentImageIndex] : ""}
          alt={props.alt}
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}

        {hasMultipleImages && (
          <>
            <button
              className="inner-carousel-arrow inner-carousel-arrow-left"
              onClick={handlePrev}
              aria-label="Previous project image"
            >
              <MdArrowBack />
            </button>
            <button
              className="inner-carousel-arrow inner-carousel-arrow-right"
              onClick={handleNext}
              aria-label="Next project image"
            >
              <MdArrowForward />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WorkImage;
