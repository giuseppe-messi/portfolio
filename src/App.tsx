import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";

const App: React.FC = () => (
  <ErrorBoundary>
    <ThemeProvider>
      <Router>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </ErrorBoundary>
);
export default App;
