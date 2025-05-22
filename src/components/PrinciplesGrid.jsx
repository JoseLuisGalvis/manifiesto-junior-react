/*
 * UBICACIÓN: /src/components/PrinciplesGrid.jsx
 * PROPÓSITO: Renderizar grid de principios
 */

import React from "react";
import PrincipleCard from "./PrincipleCard";

const PrinciplesGrid = ({ principles, onCardSelect, selectedCard }) => (
  <div className="row g-4 justify-content-center">
    {principles.map((principle) => (
      <PrincipleCard
        key={principle.id}
        principle={principle}
        onSelect={onCardSelect}
        isSelected={selectedCard === principle.id}
      />
    ))}
  </div>
);

export default PrinciplesGrid;
