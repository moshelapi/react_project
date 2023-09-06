import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trips from "../Trips/Trips";
import Home from "../Home/Home";
import TripDetails from "../TripDetails/TripDetails";
import NewTrip from "../NewTripform/NewTrip";
import UpdateTrip from "../UpdateTripForm/UpdateTrip";
import SingInForm from "../UserReginstion/UserSing-in";
import UserLogIn from "../UserLogin/UserLogin";

function MyRouter(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/all" element={<Trips />} />
        <Route path="/" element={<Home />} />
        <Route path="/newTrip" element={<NewTrip />} />
        <Route path="/details/:id" element={<TripDetails />} />
        <Route path="/update/:id" element={<UpdateTrip />} />
        <Route path="/register" element={<SingInForm/>} />
        <Route path="/log-in" element={<UserLogIn/>} />
      </Routes>
    </Router>
  );
}
export default MyRouter;
