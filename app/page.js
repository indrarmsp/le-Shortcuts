"use client";
import { useState, useEffect } from "react";
import Clock from "@/components/Clock";
import ShortcutManager from "@/components/ShortcutManager";
import MobileDashboard from "@/components/MobileDashboard";

export default function Dashboard() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? (
    <MobileDashboard />
  ) : (
    <div>
      <Clock />
      <ShortcutManager />
    </div>
  );
}
