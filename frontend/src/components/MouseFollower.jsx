import { useEffect, useRef } from "react";
import React from "react";

function MouseFollower() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      return undefined;
    }

    const dotElement = dotRef.current;
    const glowElement = glowRef.current;

    if (!dotElement || !glowElement) {
      return undefined;
    }

    function setVisible(isVisible) {
      dotElement.classList.toggle("visible", isVisible);
      glowElement.classList.toggle("visible", isVisible);
      visibleRef.current = isVisible;
    }

    function handlePointerMove(event) {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!visibleRef.current) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        setVisible(true);
      }
    }

    function handlePointerLeave() {
      setVisible(false);
    }

    function handlePointerDown() {
      document.documentElement.classList.add("mouse-pressed");
    }

    function handlePointerUp() {
      document.documentElement.classList.remove("mouse-pressed");
    }

    function animate() {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.25;
      current.y += (target.y - current.y) * 0.25;

      dotElement.style.transform =
        `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(var(--cursor-dot-scale, 1))`;
      glowElement.style.transform =
        `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%) scale(var(--cursor-glow-scale, 1))`;

      rafRef.current = window.requestAnimationFrame(animate);
    }

    rafRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.documentElement.classList.remove("mouse-pressed");
    };
  }, []);

  return (
    <>
      <span ref={glowRef} className="mouse-glow" aria-hidden="true" />
      <span ref={dotRef} className="mouse-dot" aria-hidden="true" />
    </>
  );
}

export default MouseFollower;
