import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RouterConfig from "router/RouterConfig";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="w-full h-full font-plusJakartaSans">
      <Toaster position="top-center" />
      <Router>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
