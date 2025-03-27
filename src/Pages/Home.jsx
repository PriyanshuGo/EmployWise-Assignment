import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isUser = localStorage.getItem("token");
    console.log(isUser);
    if (isUser) {
      navigate("/userList");
    } else {
      navigate("/login");
    }
  }, []);

  return <div>Redirecting...</div>;
}

export default Home;
