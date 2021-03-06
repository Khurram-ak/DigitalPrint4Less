
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "../Screens/Home";
import DetailPage from "../Screens/DetailPage";
import SubCategoryPage from "../Screens/SubCategoryPage";


export default function Routing() {

    return <>
        <Router>
            <Routes>
                
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/detailPage/:skuId" element={<DetailPage />} />
                <Route path="/subCategoryPage/:subCategoryId" element={<SubCategoryPage />} />

            </Routes>
        </Router>
    </>

}
