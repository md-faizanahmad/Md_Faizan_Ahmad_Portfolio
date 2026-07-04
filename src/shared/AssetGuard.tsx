// src/components/AssetGuard.tsx
"use client";

import { useEffect } from "react";

export default function AssetGuard() {
  useEffect(() => {
    // 1. Block right-clicks globally on all image tags
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "IMG" ||
        target
          .closest("button")
          ?.getAttribute("aria-label")
          ?.includes("snapshot")
      ) {
        e.preventDefault();
      }
    };

    // 2. Prevent dragging images to desktop/folders
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  // This component doesn't render any UI; it just injects the browser safety listeners
  return null;
}
