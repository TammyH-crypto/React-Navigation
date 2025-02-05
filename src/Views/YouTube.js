import React from "react";

export default function YouTube(props) {
  const src = props.src;
  const label = props.label;
  const captions = props.children;
  return (
    <>
      <h3>{label}</h3>
      <p>{captions}</p>
      <iframe
        width="560"
        height="315"
        src={src}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}
