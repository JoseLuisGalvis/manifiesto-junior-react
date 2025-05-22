/*
 * UBICACIÓN: /src/components/Footer.jsx
 * PROPÓSITO: Pie de página de la aplicación
 */

import React from "react";

const Footer = () => (
  <footer className="bg-dark text-light py-4 mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h5>Manifiesto del Junior</h5>
          <p className="mb-0">
            Principios fundamentales para el desarrollo de software
          </p>
        </div>
        <div className="col-md-6 text-md-end">
          <p className="mb-0">Hecho con ❤️ y mucho ☕</p>
          <small className="text-muted">
            Cada línea de código es una oportunidad para mejorar
          </small>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
