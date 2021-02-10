import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Switch, Route,NavLink,Redirect} from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import ProtectedRoute from "../routes/ProtectedRoute";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import Enquiry from "../enquiry/Enquiry";
import Hotel from "../hotels/Hotel";
import HotelDetail from "../hotels/HotelDetail";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Hotels from "../admin/Hotels";
import AddHotel from "../admin/AddHotel";
import EditHotel from "../admin/EditHotel";
import Dashboard from "../admin/Dashboard";
import AddEnquiry from "../admin/AddEnquiry";
import AddMessage from "../admin/AddMessage";
import Nav from "./Nav";
import AllEnquiries from "../admin/AllEnquiries";
import AllMessages from "../admin/AllMessages";




function Layout() {
   
    return (
        <AuthContextProvider>
          <Router>
        
                <Navbar className="Nav" expand="lg">
                    <NavLink className="Nav__link" to="/" exact>
                       <Navbar.Brand id="nav-logo">holidaze</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle className="Nav__toggle" aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse className="Nav__collapse" id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    </Navbar.Collapse>
                </Navbar>
           
                <Switch> 
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/hotel" component={Hotel} />
                    <Route path="/hotels/hotel/:id" component={HotelDetail} />
                    <Route path="/enquiry" component={Enquiry} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <ProtectedRoute path="/admin" exact component={Dashboard} />
                    <ProtectedRoute path="/admin/hotels" exact component={Hotels} />
                    <ProtectedRoute path="/admin/enquiries" exact component={AllEnquiries} />
                    <ProtectedRoute path="/admin/enquiries/add" exact component={AddEnquiry} />
                    <ProtectedRoute path="/admin/messages" exact component={AllMessages} />
                    <ProtectedRoute path="/admin/messages/add" exact component={AddMessage}/>
                    <ProtectedRoute path="/admin/hotels/add" exact component={AddHotel} />
                    <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EditHotel} />
                    <Redirect to="/" />
                   
                </Switch>  
          </Router>
    </AuthContextProvider>
    );
}

export default Layout;