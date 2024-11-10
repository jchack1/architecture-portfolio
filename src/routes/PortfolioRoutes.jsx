import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Main} from "../components/layout/Main";
import {Home} from "../pages/Home";
import {About} from "../pages/About";
import {Architecture} from "../pages/Architecture";
import {Photography} from "../pages/Photography";
import {PaintingsDrawings} from "../pages/PaintingsDrawings";

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
        </Route>
      </Routes>
    </Router>
  );
};
