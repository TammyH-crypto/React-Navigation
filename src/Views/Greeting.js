import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MyGreeting() {
let greeting = "God is good!!";

function changeGreeting() {
    setGreeting = "What a beautiful day"
    setTimeout(changeGreeting, 3000)
}
}
<>
<header>
    <nav>
      <Link to="/">Home | </Link>
      <Link>About | </Link>
      <Link>Contact | </Link>
      <Link>Gallery | </Link>
      <Link to="/greeting">Greeting | </Link>
      <Link to="/videos">videos | </Link>
    </nav>
    </header>
    </>