// import logo from './logo.svg';
// import './App.css';
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Register from "./screens/Register";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import Userlist from "./components/Admin/Userlist";
import Pizzaslist from "./components/Admin/Pizzaslist";
import AddNewItem from "./components/Admin/AddNewItem";
import OrderList from "./components/Admin/OrderList";
import EditItem from "./components/Admin/EditItem";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/admin/editpizza" element={<EditItem/>} exact/>
        <Route path="/admin/pizzalist" element={<Pizzaslist />} exact />
        <Route path="/admin/newitemlist" element={<AddNewItem/>} exact />
        <Route path="/admin/orderlist" element={<OrderList />} exact />
        <Route path="/admin/userlist" element={<Userlist />} exact />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="/orders" element={<OrderScreen />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/cart" element={<CartScreen />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/" element={<HomeScreen />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
