import React, { useState, useEffect } from "react";
import {
  ChakraProvider,
  extendTheme,
  useColorMode,
  Box,
  Button,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import SaleOrdersPage from "./pages/SaleOrdersPage";

const queryClient = new QueryClient();

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(auth === "true");
  }, []);

  const handleToggleColorMode = () => {
    const newColorMode = colorMode === "light" ? "dark" : "light";
    toggleColorMode(newColorMode);
    localStorage.setItem("colorMode", newColorMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
            />
            <Route
              path="/sale-orders"
              element={
                isAuthenticated ? <SaleOrdersPage /> : <Navigate to="/login" />
              }
            />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
          <Box position="fixed" top="1px" right="10px" zIndex={1000}>
            <Button
              onClick={handleToggleColorMode}
              style={{
                backgroundColor: "red", // Set the background color to red
                color: "white", // Text color for contrast
              }}
            >
              Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
            </Button>
          </Box>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
