
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-theme-1">404</h1>
        <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-theme-2 mb-8">This page couldn't be found</p>
        <Button 
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2"
          size="lg"
        >
          <Home size={16} />
          Return to Newsfeed
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
