import { createRoot } from "react-dom/client";
import React from "react";
import { MyGreeting } from "../src/Views/Greeting";
import { Home } from "./Home";
import { Videos } from "../../Views/Videos";
import { BrowserRouter, Route, Routes } from "react-router"
import "./index.scss"

const root = createRoot(window.bodyTag);
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element= { <Home />} />
        <Route path="/home" element= { <Home />}/>
        <Route path="/videos" element= { <Videos />}/>
        <Route path="/greeting" element= { <MyGreeting />}/>
    </Routes>
    </BrowserRouter>
)