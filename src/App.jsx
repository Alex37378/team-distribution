import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./Event";
import Submit from "./Submit";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>goto /teampage</>} />
        <Route path="/teampage" element={<Event />} />
        <Route path="/teampage/form" element={<Submit />} />
      </Routes>
    </Router>
  );
}