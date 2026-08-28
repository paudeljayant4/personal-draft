import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export const Nav = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6 bg-background/80 backdrop-blur-sm transition-all duration-300">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-foreground hover:no-underline"
          >
            Jayant
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="#about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            to="#interests"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Interests
          </Link>
          <Link
            to="#journey"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Journey
          </Link>
          <Link
            to="#vision"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Vision
          </Link>
          <Link
            to="#connect"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Connect
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground hover:text-muted-foreground"
            aria-label="Open menu"
          >
            {/* Hamburger icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/90 backdrop-blur-sm">
          <div className="space-y-6 text-center">
            <Link
              to="#about"
              className="text-xl font-bold text-foreground hover:no-underline block py-2"
            >
              About
            </Link>
            <Link
              to="#interests"
              className="text-xl font-bold text-foreground hover:no-underline block py-2"
            >
              Interests
            </Link>
            <Link
              to="#journey"
              className="text-xl font-bold text-foreground hover:no-underline block py-2"
            >
              Journey
            </Link>
            <Link
              to="#vision"
              className="text-xl font-bold text-foreground hover:no-underline block py-2"
            >
              Vision
            </Link>
            <Link
              to="#connect"
              className="text-xl font-bold text-foreground hover:no-underline block py-2"
            >
              Connect
            </Link>
          </div>
        </div>
      )}
    </>
  );
};