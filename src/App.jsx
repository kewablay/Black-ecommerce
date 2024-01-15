import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import RouterConfig from "/router/RouterConfig";

function App() {
  return (
    <div className="w-full h-full font-plusJakartaSans">
      <Router>
        <RouterConfig />
      </Router>
    </div>
  );
}

export default App;
