"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NAVBAR_SELECTORS as selectors } from "./navbar.config";

export function useNavbarAnimations(isOpen: boolean) {
  const navRef = useRef<HTMLElement | null>(null);

  // Initial navbar animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          selectors.container,
          { y: -100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        )
        .fromTo(
          selectors.logo,
          { scale: 0.5, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.7",
        )
        .fromTo(
          selectors.desktopLinks,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .fromTo(
          selectors.mobileButton,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (!isOpen) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          selectors.mobileMenu,
          { scaleY: 0.9, opacity: 0 },
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            transformOrigin: "top",
            ease: "power3.out",
          },
        )
        .fromTo(
          selectors.mobileMenuItems,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.45,
            stagger: 0.12,
            ease: "power3.out",
          },
          "-=0.3",
        );
    }, navRef);

    return () => ctx.revert();
  }, [isOpen]);

  return { navRef };
}
