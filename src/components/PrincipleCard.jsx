/*
 * UBICACIÓN: /src/components/PrincipleCard.jsx
 * PROPÓSITO: Tarjeta individual de principio (Single Responsibility)
 */

import React from "react";

const PrincipleIcon = ({ IconComponent, color }) => (
  <IconComponent className={`w-8 h-8 mb-3 text-${color}`} />
);

const PrincipleCard = ({ principle, onSelect, isSelected }) => {
  const { id, title, message, icon: IconComponent, color } = principle;

  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`card h-100 shadow-sm border-0 hover-card cursor-pointer transition-all duration-300 ${
          isSelected ? "selected" : ""
        }`}
        onClick={() => onSelect(id)}
      >
        <div className="card-body text-center p-4">
          <PrincipleIcon IconComponent={IconComponent} color={color} />
          <h5 className="card-title fw-bold mb-3 text-dark">✅ {title}</h5>
          <p className="card-text text-muted">{message}</p>
          <div className="mt-3">
            <small className="text-primary fw-semibold">
              {isSelected ? "Ver grid →" : "Click para detalles →"}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrincipleCard;
