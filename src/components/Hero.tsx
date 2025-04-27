
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Климатические решения<br />
              <span className="text-blue-600">премиум-класса</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              От монтажа до пусконаладки — создаем идеальный микроклимат для вашего дома и бизнеса. Быстро, качественно, надежно.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline">
                Наши услуги
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Установка кондиционера" 
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-gray-900">Более 500 довольных клиентов</p>
              <p className="text-gray-600 text-sm">За 10 лет работы на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
