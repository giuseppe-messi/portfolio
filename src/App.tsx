import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import "./App.css";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

const App: React.FC = () => (
  <ErrorBoundary>
    <Router>
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  </ErrorBoundary>
);

export default App;
