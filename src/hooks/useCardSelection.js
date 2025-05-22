/*
 * UBICACIÓN: /src/hooks/useCardSelection.js
 * PROPÓSITO: Manejar estado de selección de principios
 */

import { useState } from "react";

export const useCardSelection = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const selectCard = (id) => setSelectedCard(selectedCard === id ? null : id);
  const clearSelection = () => setSelectedCard(null);
  const isSelected = (id) => selectedCard === id;

  return { selectedCard, selectCard, clearSelection, isSelected };
};
