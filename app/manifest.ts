import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ammi's Kachhi",
    short_name: "Ammi",
    description: "Comfort-first women-safe lingerie showcase",
    start_url: "/",
    display: "standalone",
    background_color: "#faf4e9",
    theme_color: "#6b1d3b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml"
      }
    ]
  };
}
