import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "../../src/js/Pages/Home";
import Article from "../../src/js/Pages/Article";
import About from "../../src/js/Pages/About";
import NotFound from "../../src/js/Pages/NotFound"
import MainLayout from "../js/Layouts/MainLayout";


const Router = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="/article/:key/:rentId" element={<Article/>}/>
                    <Route
                        path="*"
                        element={<NotFound/>}
                    />
                </Routes>
            </MainLayout>
    </BrowserRouter>
    )
}

export default Router
