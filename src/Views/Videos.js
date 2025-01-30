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
        <YouTube>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AkoqcjQjTB4?si=CX16fpwwIo71ZXFi"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </YouTube>
      </main>
    </>
  );
}
