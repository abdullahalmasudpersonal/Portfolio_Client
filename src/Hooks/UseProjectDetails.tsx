import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UseProjectDeatils = (p0?: (string | undefined)[]) => {
  const { id: projectId } = useParams();
  const [projectDetails, setprojectDetails] = useState([]);
  useEffect(() => {
    fetch(
      `https://portfolio-server-omega-coral.vercel.app/api/projects/${projectId}`
    )
      .then((res) => res.json())
      .then((data) => setprojectDetails(data));
  }, [projectId]);
  return [projectDetails, setprojectDetails];
};

export default UseProjectDeatils;
