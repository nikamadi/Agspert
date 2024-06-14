import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import "./LoginPage.css";
const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/sale-orders");
    }
  };

  return (
    <Box>
      <center>
        <Heading class="heading">LOGIN</Heading>
      </center>
      <center>
        <div class="entries">
          <FormControl>
            <FormLabel id="title">Username:</FormLabel>
            <center>
              <Input
                placeholder="  Enter Username"
                id="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </center>
          </FormControl>
          <FormControl>
            <FormLabel id="title">Password:</FormLabel>
            <center>
              <Input
                placeholder="  Enter Password"
                id="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </center>
          </FormControl>
          <center>
            <Button
              class="loginbtn"
              onClick={handleLogin}
              style={{
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Login
            </Button>
          </center>
        </div>
      </center>
    </Box>
  );
};

export default LoginPage;
