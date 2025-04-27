
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600 mb-8">
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут для консультации и расчета стоимости работ.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Телефон</p>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Электронная почта</p>
                  <p className="text-gray-600">info@холодтех.рф</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium">Адрес</p>
                  <p className="text-gray-600">г. Москва, ул. Климатическая, 42</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Ваше имя</label>
                  <Input placeholder="Иван Петров" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Электронная почта</label>
                <Input placeholder="email@пример.рф" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Сообщение</label>
                <Textarea 
                  placeholder="Опишите ваш проект или задайте вопрос..."
                  rows={4} 
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
