
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Свяжитесь с нами
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Готовы создать идеальный микроклимат?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Оставьте заявку, и наш специалист проконсультирует вас по всем вопросам. Мы перезвоним в течение 30 минут в рабочее время.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Телефон</h3>
                  <p className="text-lg">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Электронная почта</h3>
                  <p className="text-lg">info@holodtech.ru</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Адрес офиса</h3>
                  <p className="text-lg">г. Москва, ул. Климатическая, 42</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Режим работы</h3>
                  <p className="text-lg">Пн-Пт: 9:00 - 21:00<br />Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Заполните форму</h3>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Иван Петров" 
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон*
                  </label>
                  <Input 
                    id="phone" 
                    placeholder="+7 (___) ___-__-__" 
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="example@mail.ru" 
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш запрос или вопрос" 
                    className="min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-base"
              >
                Отправить заявку
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                Нажимая на кнопку, вы соглашаетесь с{" "}
                <a href="/privacy" className="text-blue-600 underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
