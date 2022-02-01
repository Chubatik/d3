import React from 'react';
import './App.css';
import {Routes, Route, Link, HashRouter} from "react-router-dom";
import {BasicChart} from "./pages/BasicChart/BasicChart";
import {GropedBarChart} from "./pages/GroupedBarChart/GropedBarChart";

export const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/">Basic chart</Link>
                </li>
                <li>
                    <Link to="/grouped-chart">Grouped bar chart</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<BasicChart />} />
            <Route path="/grouped-chart" element={<GropedBarChart />} />
        </Routes>
    </HashRouter>
)
