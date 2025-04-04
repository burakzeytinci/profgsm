"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Sayfa scroll edildiğinde görünürlüğü kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener ekle
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Sayfa başına dön fonksiyonu
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          type="button"
          onClick={handleScrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`fixed bottom-6 right-6 z-50 bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 flex items-center gap-2 ${
            isHovered ? "px-4 py-2" : "p-3"
          }`}
        >
          <ArrowUpIcon className="h-5 w-5" />
          {isHovered && <span className="text-sm font-medium">Başa Dön</span>}
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
