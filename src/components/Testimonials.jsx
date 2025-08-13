import React from "react";
import "./Testimonials.css";
import { testimonials } from "../data/data";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>O que dizem nossos clientes</h2>
      <div className="testimonials-list">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <h4>{t.name}</h4>
            <div className="stars">
              {"★".repeat(t.rating)}
              {"☆".repeat(5 - t.rating)}
            </div>
            <p>{t.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
