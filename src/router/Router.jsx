import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../page/Home';
import Detail from "../page/Detail";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/Detail/:id" element={<Detail />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;