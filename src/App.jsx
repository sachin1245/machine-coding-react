import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AutoComplete from './components/autocomplete/AutoComplete';
import ImageSlider from './components/image-slider/ImageSlider';

function App() {
  return (
    <div className="App">
     <h1>Machine Coding</h1>
     <Router>
      <Routes>
        <Route path="/autocomplete" element={<AutoComplete/>} />
        <Route path="/image-slider" element={<ImageSlider/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
