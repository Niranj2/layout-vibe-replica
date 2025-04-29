
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl text-foreground mb-8">Oops! This page has hopped away</p>
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="/">Leap back to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
