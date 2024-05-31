import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/HBS";
import HOF from "./pages/HOF";
import Post from "./pages/post";
import About from "./pages/about";
import Vote from "./pages/vote";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="HOF" element={<HOF />} />
        <Route path="post" element={<Post />}/>
        <Route path="about" element={<About />}/>
        <Route path="vote" element={<Vote />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

