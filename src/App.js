import React from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

// styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <GlobalStyle />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
