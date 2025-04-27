
import React from "react";
import { Snowflake, Fan, Tools, ShieldCheck } from "lucide-react";

const servicesData = [
  {
    icon: <Snowflake className="w-10 h-10 text-blue-600" />,
    title: "Монтаж кондиционеров",
    description: "Профессиональная установка сплит-систем всех типов с гарантией на работы до 5 лет."
  },
  {
    icon: <Fan className="w-10 h-10 text-blue-600" />,
    title: "Вентиляционные системы",
    description: "Проектирование и монтаж систем вентиляции для жилых и коммерческих помещений."
  },
  {
    icon: <Tools className="w-10 h-10 text-blue-600" />,
    title: "Пусконаладочные работы",
    description: "Комплексная настройка и запуск систем кондиционирования и вентиляции."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Сервисное обслуживание",
    description: "Регулярное техническое обслуживание для поддержания оборудования в идеальном состоянии."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-gray-600">
            Предлагаем полный спектр услуг по обеспечению комфортного микроклимата в помещении — от проектирования до сервисного обслуживания.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow bg-white"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
