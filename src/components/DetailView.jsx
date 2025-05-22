/*
 * UBICACIÓN: /src/components/DetailView.jsx
 * PROPÓSITO: Mostrar detalles de un principio seleccionado
 */

import React from "react";
import { ArrowLeft } from "lucide-react";

const DetailView = ({ principle, onBack, animationClass }) => {
  const { title, message, description, icon: IconComponent, color } = principle;

  return (
    <div className={`detail-view ${animationClass}`}>
      <div className="card shadow-lg border-0">
        <div className={`card-header bg-${color} text-white`}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mb-0 d-flex align-items-center">
              <IconComponent className="w-8 h-8 me-2" />
              {title}
            </h3>
            <button className="btn btn-outline-light btn-sm" onClick={onBack}>
              <ArrowLeft className="w-4 h-4 me-1" />
              Volver
            </button>
          </div>
        </div>
        <div className="card-body p-5">
          <h4 className={`text-${color} mb-4`}>{message}</h4>
          <p className="lead text-dark lh-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
