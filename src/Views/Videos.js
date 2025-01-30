export function Videos() {
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
        <YouTube 
        label="YouTube video"
        src="https://www.youtube.com/watch?v=AkoqcjQjTB4"
        >
        </YouTube>
      </main>
    </>
  );
}
