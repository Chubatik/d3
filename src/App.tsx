import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {BasicChart} from "./pages/BasicChart/BasicChart";

export const App = () => (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/">Basic chart</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<BasicChart />} />
        </Routes>
    </BrowserRouter>
)
