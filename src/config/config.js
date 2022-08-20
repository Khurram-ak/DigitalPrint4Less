
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../Screens/Home";
import DetailPage from "../Screens/DetailPage";
import SubCategoryPage from "../Screens/SubCategoryPage";
import UserProfile from "../Screens/UserProfile";


export default function Routing() {

    return <>
        <Router>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detailPage/:styleCode/:mainId/:subId" element={<DetailPage />} />
                <Route path="/subCategoryPage/:mainCategoryId/:subCategoryId" element={<SubCategoryPage />} />
                <Route path="/userProfile" element={<UserProfile/>} />

            </Routes>
        </Router>
    </>

}
