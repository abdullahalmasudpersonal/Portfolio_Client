import { useState } from "react";
import { useEffect } from "react";

const UseProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-omega-coral.vercel.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return [projects, setProjects];
};

export default UseProjects;
