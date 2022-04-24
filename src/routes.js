import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./page/Home";

import Pedidos from "./page/Pedidos";

function conexãoEntrePages() {

    return (

        <Router>
           <Routes>
                <Route  path="/" element={<Home/>} />
                <Route  path="/pedidos" element={<Pedidos/>} />
            </Routes>
        </Router>
    );
}

export default conexãoEntrePages;