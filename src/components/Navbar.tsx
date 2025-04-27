
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-bold text-xl">
            ХолодТех
          </Link>
          <div className="hidden md:flex gap-6">
            <Link to="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Услуги
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              Проекты
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Контакты
            </Link>
          </div>
        </div>
        <Button className="hidden md:flex">
          <Phone size={18} />
          <span>+7 (495) 123-45-67</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
