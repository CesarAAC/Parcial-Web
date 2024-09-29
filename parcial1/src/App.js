import Login from "./components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sports from "./components/Sport";
import Sport from "./components/Sport"

function App() {
  return (
    <div className="App">
    <Login></Login>
    <BrowserRouter>
       <Routes>
         <Route path="/app" element={<App />} />
         <Route path="/Sports" element={<Sports />} />
         <Route path="/Sports/:sportId" element={<Sport />} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
