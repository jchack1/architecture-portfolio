import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from "../components/layout/Main";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Architecture} from "../pages/Architecture";
import {Photography} from "../pages/Photography";
import {PaintingsDrawings} from "../pages/PaintingsDrawings";
import {Project1} from "../pages/projects/Project1";
import {Project2} from "../pages/projects/Project2";

export const PortfolioRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="/about" />
          <Route element={<Architecture />} path="/architecture" />
          <Route element={<Photography />} path="/photography" />
          <Route element={<PaintingsDrawings />} path="/paintings-drawings" />

          {/* project pages */}
          <Route
            element={<Project1 />}
            path="/architecture/projects/project1"
          />
          <Route
            element={<Project2 />}
            path="/architecture/projects/project2"
          />
        </Route>
      </Routes>
    </Router>
  );
};
