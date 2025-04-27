
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586813373535-b5871253180a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="container py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Ведущая компания на рынке с 2012 года
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Климатические решения<br />
                <span className="text-blue-600">премиум-класса</span>
              </h1>
            </div>
            <p className="text-lg text-gray-700 max-w-lg">
              От монтажа до пусконаладки — создаем идеальный микроклимат для вашего дома и бизнеса с заботой о каждой детали.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Гарантия до 5 лет</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Сертифицированные мастера</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Официальная документация</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Работаем 24/7</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-base h-12">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full px-8 text-base h-12">
                Рассчитать стоимость
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Установка кондиционера" 
              className="rounded-xl shadow-2xl object-cover w-full md:max-w-lg mx-auto h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-xl max-w-[260px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-lg font-bold">4.9/5</span>
              </div>
              <p className="font-bold text-gray-900">Более 500 довольных клиентов</p>
              <p className="text-gray-600 text-sm">Работаем на рынке с 2012 года</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
