import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import EditPage from "./pages/EditPage";
const App = () => {
  return (
    <div className="App">
      <h1 className="text-danger">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/about" element={<h1>Hello</h1>} />
      </Routes>
      <Home />
    </div>
  );
};

export default App;
