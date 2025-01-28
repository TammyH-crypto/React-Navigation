import  React from "react"
import { Link } from "react-router"
import "./Home.scss"
import { MyGreeting } from "./Greeting"

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
      </main> 
</>
)
 }