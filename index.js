import { createRoot } from "react-dom/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"


const root = createRoot(window.bodyTag);
root.render(
    <>
    <p>Amazing</p>
    <BrowserRouter>
    <Routes>
         {/* <Route path="/" element= { <Home/>} />  */}
         <Route path="/" element= { <h1>Good day</h1>} />
        {/* <Route path="/home" element= { <Home />}/> */}
        {/* <Route path="/videos" element= { <Videos />}/> */}
        {/* <Route path="/greeting" element= { <MyGreeting />}/> */}
    </Routes>
    {/* </BrowserRouter> */}
    </>
)