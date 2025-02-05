import  React from "react"
import { Link } from "react-router-dom"
import { MyGreeting } from "./Greeting";


const message = "God is good";
export default function Home() {

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
        <button onClick={()=>{console.log("Hello")}}>Click</button>
        <output id="outputTag"></output>
        <form onSubmit={()=>{console.log("Hello")}}>
          <input type="text"></input>
          <input type="submit"></input>
        </form>
      </main> 
</>
);
 }