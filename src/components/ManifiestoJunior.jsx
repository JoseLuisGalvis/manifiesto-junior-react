/*
 * UBICACIÓN: /src/components/ManifiestoJunior.jsx
 * PROPÓSITO: Componente principal que orquesta toda la aplicación
 */

import React from "react";
import NavigationBar from "./NavigationBar";
import PageHeader from "./PageHeader";
import PrinciplesGrid from "./PrinciplesGrid";
import DetailView from "./DetailView";
import QuoteSection from "./QuoteSection";
import Footer from "./Footer";
import { useCardSelection } from "../hooks/useCardSelection";
import { useAnimation } from "../hooks/useAnimation";
import { MANIFESTO_DATA, PRINCIPLES } from "../data/principles";
import { EXTERNAL_RESOURCES } from "../utils/constants";
import "../styles/animations.css";

const ExternalResources = () => (
  <>
    <link href={EXTERNAL_RESOURCES.bootstrap.css} rel="stylesheet" />
    <script src={EXTERNAL_RESOURCES.bootstrap.js}></script>
  </>
);

const ManifiestoJunior = () => {
  const { selectedCard, selectCard, clearSelection } = useCardSelection();
  const { getAnimationClass } = useAnimation();

  const selectedPrinciple = PRINCIPLES.find((p) => p.id === selectedCard);
  const animationClass = selectedPrinciple
    ? getAnimationClass(selectedPrinciple.row, true)
    : "";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <NavigationBar />

      <div className="container py-5">
        {!selectedCard ? (
          <>
            <PageHeader
              title={MANIFESTO_DATA.title}
              subtitle={MANIFESTO_DATA.subtitle}
            />
            <PrinciplesGrid
              principles={PRINCIPLES}
              onCardSelect={selectCard}
              selectedCard={selectedCard}
            />
            <QuoteSection quote={MANIFESTO_DATA.quote} />
          </>
        ) : (
          <DetailView
            principle={selectedPrinciple}
            onBack={clearSelection}
            animationClass={animationClass}
          />
        )}
      </div>

      <Footer />
      <ExternalResources />
    </div>
  );
};

export default ManifiestoJunior;
