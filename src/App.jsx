import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AutoComplete from "./components/autocomplete/AutoComplete";
import ImageSlider from "./components/image-slider/ImageSlider";
import InfiniteScroll from "./components/infinite-scroll/InfiniteScroll";
import KanbanBoard from "./components/kanban-board/KanbanBoard";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
