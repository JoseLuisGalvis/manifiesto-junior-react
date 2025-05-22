/*
 * UBICACIÓN: /src/components/PageHeader.jsx
 * PROPÓSITO: Renderizar encabezado de página
 */

import React from "react";

const PageHeader = ({ title, subtitle }) => (
  <div className="text-center mb-5">
    <h1 className="display-4 fw-bold text-dark mb-3">{title}</h1>
    <p className="lead text-muted">{subtitle}</p>
  </div>
);

export default PageHeader;
