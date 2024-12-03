import { useEffect } from "react";
import "./Blog.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import { TBlog } from "../../types/blogs.types";

const Blog = (blog: TBlog) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { name, image, description, date } = blog;

  return (
    <div data-aos="fade-up-right" className="col">
      <div className="bolg-dev-dev h-100">
        <img src={image} className="card-img-top rounded-top w-100" alt="..." />
        <div>
          <span className="position-absolute start-50 translate-middle badge rounded-pill bg-dark text-light py-2 px-3">
            {date}
          </span>
        </div>
        <div className="p-3 text-justify">
          <h5 className="pt-3 pb-2 text-center">{name}</h5>
          <p className="">{description}</p>
        </div>
        <div className="bolg-read-more">
          <button>
            <span>Read More </span>
            <span>
              <FontAwesomeIcon
                style={{ height: "12px" }}
                icon={faChevronRight}
              />
              <FontAwesomeIcon
                style={{ height: "12px" }}
                icon={faChevronRight}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
