import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const fetchUSer = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://localhost:3000/auth/home", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status !== 201) {
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUSer();
  }, []);
  return <div className="text-3xl text-blue-500">Home</div>;
};

export default Home;
