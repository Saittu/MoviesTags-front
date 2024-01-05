import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";
import { NewMovie } from "../pages/NewMovie";

export function PagesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/NewMovie" element={<NewMovie />} />
        </Routes>
    )
}