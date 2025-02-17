import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList"
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  )
}

export default App
