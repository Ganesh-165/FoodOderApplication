import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserNavbar from "./usercomponents/UserNavbar";
import UserDashboard from "./usercomponents/UserDashboard";
import UserUpdateDetails from "./usercomponents/UserUpdateDetails";
import Vegetarian from "./pages/Vegetarian";
import NonVegetarian from "./pages/NonVegetarian";
import Oders from "./usercomponents/Oders";
import Juices from "./pages/Juices";
import CartItem from "./usercomponents/CartItem";
import AddItem from "./admincomponents/AddItem";
import AddAdmin from "./admincomponents/AddAdmin";
import UpdateItem from "./admincomponents/UpdateItem";
import ViewItems from "./admincomponents/ViewItems";
import ViewOders from "./admincomponents/ViewOders";
import ViewOderItems from "./admincomponents/ViewOderItems";
import Auth from "./pages/Auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Auth/>}>
          <Route path="/user" element={<UserNavbar />}>
            <Route path="" element={<UserDashboard />} />
            <Route path="additem" element={<AddItem />} />
            <Route path="addadmin" element={<AddAdmin />} />
            <Route path="viewitems">
              <Route index element={<ViewItems />} />
              <Route path="update" element={<UpdateItem />} />
            </Route>
            <Route path="viewoders">
              <Route index element={<ViewOders />} />
              <Route path="items" element={<ViewOderItems />} />
            </Route>
            <Route path="updatedetails" element={<UserUpdateDetails />} />
            <Route path="vegetarian" element={<Vegetarian />} />
            <Route path="nonvegetarian" element={<NonVegetarian />} />
            <Route path="juices" element={<Juices />} />
            <Route path="cart" element={<CartItem />} />
            <Route path="oders" element={<Oders />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
