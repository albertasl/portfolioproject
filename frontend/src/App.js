import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Login from "./pages/Login";
import RegisterForm from './components/RegisterForm';

const App = () => {
  return (
    <Router>
      {/* Header and Footer are global, they don't change */}
      <Header />
      {/* Main content is dynamic and changes based on the URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
