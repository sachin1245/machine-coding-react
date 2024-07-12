import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AutoComplete from "./components/autocomplete/AutoComplete";
import ImageSlider from "./components/image-slider/ImageSlider";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import KanbanBoard from "./components/kanban-board/KanbanBoard";
import Accordion from "./components/accordion/Accordion";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <div className="App">
      <h3>Machine Coding Using React</h3>
      <Router>
        <Routes>
          <Route path="/autocomplete" element={<AutoComplete />} />
          <Route path="/image-slider" element={<ImageSlider />} />
          <Route path="/infinite-scroll" element={<InfiniteScroll />} />
          <Route path="/kanban-board" element={<KanbanBoard />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/star-rating" element={<StarRating />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
