import { Route, Routes } from "react-router-dom";
import StartShippingPage from "./pages/StartShippingPage";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/startShippingPage" element={<StartShippingPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;
