import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function ProjectCard({
  imgSrc,
  imgAlt,
  title,
  text,
  animationClass,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  animationClass: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div className="col-md-4 mb-4">
      <div
        ref={ref}
        className={inView ? `card ${animationClass} in-view` : animationClass}
      >
        <img className="card-img-top" src={imgSrc} alt={imgAlt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Link to="#" className="btn btn-primary">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="container py-5 ">
      <div className="row">
        <ProjectCard
          imgSrc="https://via.placeholder.com/300x200.png?text=Project+1"
          imgAlt="Project 1"
          title="Project 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          animationClass="animate-left"
        />
        <ProjectCard
          imgSrc="https://via.placeholder.com/300x200.png?text=Project+2"
          imgAlt="Project 2"
          title="Project 2"
          text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          animationClass="animate-right"
        />
        <ProjectCard
          imgSrc="https://via.placeholder.com/300x200.png?text=Project+3"
          imgAlt="Project 3"
          title="Project 3"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          animationClass="animate-bottom"
        />
      </div>
    </div>
  );
}

export default Projects;
