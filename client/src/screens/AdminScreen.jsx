import React, { useEffect } from "react";
import { Row, Col, Container, Button, ButtonGroup } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { Routes, Route} from "react-router-dom";
// import AddNewItem from "../components/Admin/AddNewItem";
// import OrderList from "../components/Admin/OrderList";
// import Pizzaslist from "../components/Admin/Pizzaslist";
// import Userlist from "../components/Admin/Userlist";
import { useNavigate } from 'react-router-dom';
// import EditPizza from "./../components/Admin/EditPizza";
const AdminScreen = ({history}) => {
    const navigate = useNavigate();
    
    const currentUser1  = localStorage.getItem("currentUser");
  var currentUser;
  {currentUser1 === null ? currentUser = currentUser1  : currentUser  = JSON.parse(currentUser1); }
//   const userState = useSelector((state) => state.loginUserReducer);
//   const { currentUser } = userState;
  useEffect(() => {
    if (localStorage.getItem("currentUser") === null || !currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, [currentUser]);
  return (
    <>
       <Container>
         <Row>
           <h1 className="text-center bg-dark text-light p-2">Admin Panel</h1>
           <Col md={2}>
             <ButtonGroup vertical style={{ minHeight: "400px" }}>
               <Button onClick={() => navigate("/admin/userlist")}>
                 All Users
               </Button>
               <Button onClick={() => navigate("/admin/pizzalist")}>
                 All Pizzas
               </Button>
               <Button onClick={() => navigate("/admin/newitemlist")}>
                 Add New Item
               </Button>
               <Button onClick={() => navigate("/admin/orderlist")}>
                 All Orders
               </Button>
               </ButtonGroup>
               </Col>
         </Row>
       </Container>
       </>
  );
};

export default AdminScreen;