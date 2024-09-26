import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "./components/Sport";
import Sport from "./components/Sport"

function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />} />
         <Route path="/Sports" element={<Sports />} />
         <Route path="/Sports/:sportId" element={<Sport />} />
       </Routes>
     </BrowserRouter>

      <Login></Login>
    </div>
  );
}

export default App;
