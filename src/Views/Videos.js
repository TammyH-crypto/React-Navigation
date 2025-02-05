import React from "react"
import { Link } from "react-router-dom";
import YouTube from "./YouTube";

export function Videos() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home | </Link>
          <Link>About | </Link>
          <Link>Contact | </Link>
          <Link to="/greeting">Greeting | </Link>
          <Link to="/videos">videos</Link>
        </nav>
      </header>
      <main>
        <YouTube 
        label="YouTube video"
        src="https://www.youtube.com/watch?v=AkoqcjQjTB4"
        >
        </YouTube>
      </main>
    </div>
  );
}
