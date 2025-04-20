import { useEffect } from "react";
import { useLocation } from "wouter";

// This component automatically scrolls to the top of the page when navigation occurs
export default function ScrollToTop() {
  const [location] = useLocation();

  // When location changes, scroll to top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // For smooth scrolling
    });
  }, [location]);

  return null; // This component doesn't render anything
}