import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { logoutUser } from "../actions/userAction";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const currentUser1  = localStorage.getItem("currentUser");
    //  currentUser = userState;
    // console.log(currentUser);
  var currentUser;
  {currentUser1 === null ? currentUser = currentUser1  : currentUser  = JSON.parse(currentUser1); }
  // const name = currentUser.name;
  // console.log(name); 
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="https://imgs.search.brave.com/bYC67ZyWyh-XL90oMZSxKPyE9CezpPxDTLpVk0t0YFY/rs:fit:532:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/QVB0QWZ0dHNUU3VO/b3AtWjY0NmhnSGFH/bSZwaWQ9QXBp"
              alt="logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <LinkContainer to="/">
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <LinkContainer to="/orders">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </LinkContainer>
              ) : (
                <>
                  {" "}
                  <LinkContainer to="/login">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>{" "}
                </>
              )}

              <LinkContainer to="/cart">
                <Nav.Link>Cart {cartState.cartItems.length}</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;