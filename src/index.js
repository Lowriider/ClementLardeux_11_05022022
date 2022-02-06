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

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="/article/:key/:rentId" element={<Article/>}/>
            <Route
                path="*"
                element={
                    <main style={{padding: "1rem"}}>
                        {/*404 component*/}
                        <p>There's nothing here!</p>
                    </main>
                }
            />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);


