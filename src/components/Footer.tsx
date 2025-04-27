
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ХолодТех</h3>
            <p className="mb-4">
              Профессиональные решения для комфортного микроклимата вашего дома и бизнеса.
            </p>
            <p className="text-sm">© {new Date().getFullYear()} ХолодТех. Все права защищены.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><Link to="/services/conditioning" className="hover:text-blue-400 transition-colors">Кондиционирование</Link></li>
              <li><Link to="/services/ventilation" className="hover:text-blue-400 transition-colors">Вентиляция</Link></li>
              <li><Link to="/services/maintenance" className="hover:text-blue-400 transition-colors">Обслуживание</Link></li>
              <li><Link to="/services/design" className="hover:text-blue-400 transition-colors">Проектирование</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Компания</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">О нас</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Наши проекты</Link></li>
              <li><Link to="/reviews" className="hover:text-blue-400 transition-colors">Отзывы</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Контакты</h4>
            <address className="not-italic">
              <p className="mb-2">г. Москва, ул. Климатическая, 42</p>
              <p className="mb-2">Телефон: +7 (495) 123-45-67</p>
              <p className="mb-2">Email: info@холодтех.рф</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
