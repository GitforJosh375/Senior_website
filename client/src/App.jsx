// App.js
import { AuthContext } from "./helpers/AuthContext"; // Import AuthContext
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./routes/home.jsx";
import Login from "./routes/login.jsx";
import SpotAvailability from "./routes/SpotAvailability.jsx";
import Navbar from "./components/Navbar"; // Import Navbar
import Order from "./routes/orderNow.jsx";

export default function App() {
  const [authState, setAuthState] = useState({
      username: "",
      id: 0,
      status: false,
  });

  useEffect(() => {
      axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/auth/auth`, {
              headers: {
                  accessToken: localStorage.getItem("accessToken"),
              },
          })
          .then((response) => {
              if (response.data.error) {
                  setAuthState({ username: "", id: 0, status: false });
              } else {
                  setAuthState({
                      username: response.data.username,
                      id: response.data.id,
                      status: true,
                  });
              }
          });
  }, []);

  return (
      <AuthContext.Provider value={{ authState, setAuthState }}>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/spot-availability" element={<SpotAvailability />} />
                  <Route path="/order" element={<Order />} />
              </Routes>
          </div>
      </AuthContext.Provider>
  );
}