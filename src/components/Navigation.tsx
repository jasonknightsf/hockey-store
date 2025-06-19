import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg font-bold text-xl">
                HG
              </div>
              <span className="ml-2 text-xl font-bold text-foreground">Hockey Gear Pro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#skates" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Skates
              </a>
              <a href="#pads" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Pads
              </a>
              <a href="#helmets" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Helmets
              </a>
              <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-background inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            <a href="#skates" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Skates
            </a>
            <a href="#pads" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Pads
            </a>
            <a href="#helmets" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              Helmets
            </a>
            <a href="#about" className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;