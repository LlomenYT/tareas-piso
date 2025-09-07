/// <reference types="astro/client" />

// Define JSX types for Astro components
declare namespace JSX {
  interface IntrinsicElements {
    div: any;
    h1: any;
    h2: any;
    h3: any;
    span: any;
    // Add other HTML elements as needed
  }
}
