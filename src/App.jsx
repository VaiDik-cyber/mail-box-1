import { Route, Routes } from "react-router-dom";
import Auth from "./component/Auth";
import HomePage from "./component/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
