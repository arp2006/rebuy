import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from "./pages/Product";
import Create from "./pages/Create";
import Sidebar from './components/Sidebar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Sidebar /><Home /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
