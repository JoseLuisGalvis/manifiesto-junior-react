/*
 * UBICACIÓN: /src/components/QuoteSection.jsx
 * PROPÓSITO: Mostrar cita inspiracional
 */

import React from "react";

const QuoteSection = ({ quote }) => (
  <div className="text-center mt-5">
    <blockquote className="blockquote">
      <p className="mb-0 fst-italic text-dark">"{quote}"</p>
    </blockquote>
  </div>
);

export default QuoteSection;
