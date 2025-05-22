/*
 * UBICACIÓN: /src/hooks/useAnimation.js
 * PROPÓSITO: Manejar lógica de animaciones (Single Responsibility)
 */

import { ANIMATION_STRATEGIES } from "../utils/constants";

export const useAnimation = () => {
  const getAnimationClass = (row, isActive) =>
    isActive ? ANIMATION_STRATEGIES[row] || "" : "";

  return { getAnimationClass };
};
