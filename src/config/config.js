
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../Screens/Home";
import DetailPage from "../Screens/DetailPage";


export default function Routing() {

    return <>
        <Router>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/detailPage" element={<DetailPage />} />

            </Routes>
        </Router>
    </>

}
