import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./js/Pages/Home";
import Article from "./js/Pages/Article";
import About from "./js/Pages/About";
import NotFound from "./js/Pages/NotFound"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="/article/:key/:rentId" element={<Article/>}/>
            <Route
                path="*"
                element={<NotFound/>}
            />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);


