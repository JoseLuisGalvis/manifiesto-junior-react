/*
 * UBICACIÓN: /src/data/principles.js
 * PROPÓSITO: Centralizar todos los datos para evitar duplicación (DRY)
 */

import {
  Shield,
  Repeat,
  Zap,
  Target,
  Users,
  Eye,
  Code,
  Paintbrush,
} from "lucide-react";

export const MANIFESTO_DATA = {
  title: "👉 𝑴𝒂𝒏𝒊𝒇𝒊𝒆𝒔𝒕𝒐 𝒅𝒆𝒍 𝑱𝒖𝒏𝒊𝒐𝒓 😎 💪 ☕ 🖥️",
  subtitle:
    '𝑪𝒂𝒅𝒂 𝒗𝒆𝒛 𝒒𝒖𝒆 𝒎𝒆 𝒔𝒊𝒆𝒏𝒕𝒆 𝒂 𝒑𝒓𝒐𝒈𝒓𝒂𝒎𝒂𝒓, 𝒅𝒆𝒃𝒐 𝒂𝒑𝒍𝒊𝒄𝒂𝒓 "𝒔𝒊𝒏𝒆 𝒒𝒖𝒂 𝒏𝒐𝒏" 𝒍𝒐 𝒔𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆:',
  quote: "𝑷𝒐𝒓𝒒𝒖𝒆 𝒄𝒂𝒅𝒂 𝒍í𝒏𝒆𝒂 𝒒𝒖𝒆 𝒆𝒔𝒄𝒓𝒊𝒃𝒐 𝒆𝒔 𝒖𝒏𝒂 𝒐𝒑𝒐𝒓𝒕𝒖𝒏𝒊𝒅𝒂𝒅 𝒑𝒂𝒓𝒂 𝒎𝒆𝒋𝒐𝒓𝒂𝒓.",
};

export const PRINCIPLES = [
  {
    id: 1,
    title: "Principios SOLID",
    icon: Shield,
    color: "primary",
    message: "Fundamentos para código mantenible",
    description:
      "Los principios SOLID son cinco principios de diseño que hacen el código más comprensible, flexible y mantenible: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, y Dependency Inversion.",
    row: 1,
  },
  {
    id: 2,
    title: "Principio DRY",
    icon: Repeat,
    color: "success",
    message: "Don't Repeat Yourself - Evita la duplicación",
    description:
      "Cada pieza de conocimiento debe tener una representación única dentro del sistema. Evitamos duplicación creando funciones, módulos o componentes reutilizables.",
    row: 1,
  },
  {
    id: 3,
    title: "Principio KISS",
    icon: Zap,
    color: "warning",
    message: "Keep It Simple, Stupid - La simplicidad es clave",
    description:
      "Los sistemas funcionan mejor cuando se mantienen simples. Escribimos código claro, evitamos optimizaciones prematuras y priorizamos la legibilidad.",
    row: 2,
  },
  {
    id: 4,
    title: "YAGNI",
    icon: Target,
    color: "info",
    message: "You Aren't Gonna Need It - No anticipes necesidades",
    description:
      "No agregamos funcionalidad hasta que sea realmente necesaria. Evitamos la sobreingeniería enfocándonos en requisitos actuales.",
    row: 2,
  },
  {
    id: 5,
    title: "Boy Scout Rule",
    icon: Users,
    color: "danger",
    message: "Siempre deja el código mejor que lo encontraste",
    description:
      "Cada vez que trabajamos con código existente, lo dejamos un poco mejor. Pequeñas mejoras constantes llevan a grandes resultados.",
    row: 3,
  },
  {
    id: 6,
    title: "Ley de Demeter",
    icon: Eye,
    color: "secondary",
    message: "Principio de menor conocimiento entre objetos",
    description:
      "Un objeto debe conocer lo menos posible sobre la estructura interna de otros objetos. Esto reduce el acoplamiento y aumenta la modularidad.",
    row: 3,
  },
  {
    id: 7,
    title: "Clean Code",
    icon: Code,
    color: "success",
    message: "Código legible y expresivo",
    description:
      "Código fácil de leer, entender y modificar. Incluye nombres descriptivos, funciones pequeñas, formato consistente y estructura lógica.",
    row: 4,
  },
  {
    id: 8,
    title: "Patrones de diseño",
    icon: Paintbrush,
    color: "primary",
    message: "Soluciones probadas a problemas comunes",
    description:
      "Soluciones reutilizables que representan las mejores prácticas: creacionales, estructurales y de comportamiento.",
    row: 4,
  },
];
