import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdmimHome from "../Pages/AdimHome/admimHomePage";
import AplicationForm from "../Pages/AplicationForm/aplicationFormPage";
import CreateTrip from "../Pages/CreateTrip/CreateTripPage";
import Home from "../Pages/Home/HomePage";
import ListTrips from "../Pages/ListTrips/ListTripsPage";
import Login from "../Pages/Login/LoginPage";
import TripsDetails from "../Pages/TripDetails/TripsDetailsPage";

const RoutesComponent = () => (
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path='/ListTrips' element={<ListTrips />} />
            <Route path='/AplicationForm' element={<AplicationForm />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/AdmimHome' element={<AdmimHome />} />
            <Route path='/TripsDetails' element={<TripsDetails />} />
            <Route path='/CreateTrip' element={<CreateTrip />} />
        </Routes>
    </BrowserRouter>
)

export default RoutesComponent