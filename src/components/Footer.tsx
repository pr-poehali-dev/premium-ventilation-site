
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, ChevronRight, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="font-bold text-2xl text-blue-400 mb-6 inline-block">
              ХолодТех
            </Link>
            <p className="text-gray-400 mb-6">
              Создаем идеальный микроклимат для вашего дома и бизнеса с 2012 года. Профессиональная установка и обслуживание систем вентиляции и кондиционирования.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Услуги</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/services/conditioning" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Монтаж кондиционеров</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ventilation" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Вентиляционные системы</span>
                </Link>
              </li>
              <li>
                <Link to="/services/commissioning" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Пусконаладочные работы</span>
                </Link>
              </li>
              <li>
                <Link to="/services/maintenance" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Сервисное обслуживание</span>
                </Link>
              </li>
              <li>
                <Link to="/services/residential" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Для частных домов</span>
                </Link>
              </li>
              <li>
                <Link to="/services/commercial" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Для бизнеса</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Информация</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>О компании</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Наши проекты</span>
                </Link>
              </li>
              <li>
                <Link to="/certificates" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Сертификаты</span>
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Отзывы клиентов</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Блог</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2">
                  <ChevronRight size={16} />
                  <span>Контакты</span>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-xl mb-6">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-400">Ежедневно 9:00-21:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p>info@holodtech.ru</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p>г. Москва, ул. Климатическая, 42</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-bold mb-3">Подпишитесь на новости</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Ваш e-mail" 
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">
                  →
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2012-{new Date().getFullYear()} «ХолодТех». Все права защищены.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">
              Условия использования
            </Link>
            <Link to="/sitemap" className="hover:text-blue-400 transition-colors">
              Карта сайта
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
