import  React from "react"
import { Link } from "react-router"
import "./Home.scss"
import { MyGreeting } from "../src/Views/Greeting"

const message = "God is good";
export function Home() {

return (
<>
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
        <MyGreeting />
        <h1 id="homeTitle">I love God</h1>
        <button onClick={handleClick}>Click</button>
        <output id="outputTag"></output>
        <form onSubmit={handleSubmit}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </main> 
</>
);
 }