
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-gray-100 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold text-2xl text-blue-600">
            ХолодТех
          </Link>
          <div className="hidden md:flex gap-8">
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Услуги
            </Link>
            <Link to="/projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Проекты
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              О нас
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Контакты
            </Link>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Звоните ежедневно 9:00-21:00</p>
            <p className="font-bold text-lg text-blue-600">+7 (495) 123-45-67</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-6">
            Заказать звонок
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="container py-4 flex flex-col gap-4">
            <Link 
              to="/services" 
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link 
              to="/projects" 
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Проекты
            </Link>
            <Link 
              to="/about" 
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/contact" 
              className="p-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <div className="border-t pt-4 mt-2">
              <p className="font-bold text-blue-600">+7 (495) 123-45-67</p>
              <Button 
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700" 
                size="sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
