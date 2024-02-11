import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userVerify = async () => {
    // Perform user verification
    if(!localStorage.getItem("token")){
      navigate("/signin");
    }
    try {
      const res = await axios.get("http://localhost:4000/api/verify", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const { data } = res;
      if (res.status === 200) {
        setUsername(data.name);
        setIsAuthenticated(true);
      } else {
        navigate("/signin");
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/signin"); // Redirect to signin on error
    }
  };

  useEffect(() => {
    userVerify();
  }, []);

  const Logout = () => {
    // Clear authentication state (e.g., remove token from local storage)
    localStorage.removeItem("token"); // Assuming token is stored in local storage
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="home_page">
          <h4>Welcome <span>{username}</span></h4>
          <button onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        // Redirect to signin if not authenticated
        <>
        <h4>Please <Link to="/signin">Login</Link></h4>
        </>
      )}
    </>
  );
};

export default Home;
