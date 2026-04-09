import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "Wheather_App/components/Layout/Layout";
import Home from "Wheather_App/pages/Home/Home";
import Weather from "Wheather_App/pages/Weather Page/Weather";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
        </Routes> 
      </Layout>
    </BrowserRouter>
  );
}

export default App;