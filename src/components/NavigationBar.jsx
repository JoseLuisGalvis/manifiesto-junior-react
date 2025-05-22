/*
 * UBICACIÓN: /src/components/NavigationBar.jsx
 * PROPÓSITO: Componente de navegación (Single Responsibility)
 */

import React from "react";
import { NAVIGATION_ITEMS } from "../utils/constants";

const NavigationBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-lg">
    <div className="container">
      <a className="navbar-brand fw-bold" href="#">
        <span className="text-warning">👨‍💻</span> Manifiesto del Junior
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item} className="nav-item">
              <a className="nav-link" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default NavigationBar;
