import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RouterConfig from "router/RouterConfig";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <div className="w-full h-full font-plusJakartaSans">
      <Toaster position="top-center" />
      <SkeletonTheme baseColor="#f7f8ff" highlightColor="#d4d4d4">
        <Router>
          <RouterConfig />
        </Router>
      </SkeletonTheme>
    </div>
  );
}

export default App;
