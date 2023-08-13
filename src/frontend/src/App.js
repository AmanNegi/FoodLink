import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Register from "./pages/auth/Register";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Login from "./pages/auth/Login";

const theme = extendTheme({
  fonts: {
    body: "IBM Plex Sans, sans-serif",
    heading: "IBM Plex Sans Condensed, sans-serif",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "24px",
    "3xl": "28px",
    "4xl": "36px",
    "5xl": "48px",
    "6xl": "64px",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/login" element={<Login />} exact />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
