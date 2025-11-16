import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Event from "./Event";
import CardTable from "./CardTable";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>goto /teampage</>} />
        <Route path="/teampage" element={<Event />} />
        <Route path="/teampage/form" element={<CardTable />} />
      </Routes>
    </Router>
  );
}