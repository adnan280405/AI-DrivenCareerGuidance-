import React from "react";

function Card({ title, children, className = "" }) {
  return (
    <section className={`card ${className}`.trim()}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">{children}</div>
    </section>
  );
}

export default Card;
