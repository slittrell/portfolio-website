import type { MetadataRoute } from "next";
import { asset } from "@/lib/asset";
import { SITE } from "@/lib/data";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "SL",
    icons: [
      { src: asset("/android-chrome-192x192.png"), sizes: "192x192", type: "image/png" },
      { src: asset("/android-chrome-512x512.png"), sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#0A0A0A",
    background_color: "#0A0A0A",
    display: "standalone",
  };
}
