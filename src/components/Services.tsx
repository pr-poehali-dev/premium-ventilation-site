
import React from "react";
import { Snowflake, Fan, Wrench, ShieldCheck, HomeIcon, Building2, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    icon: <Snowflake className="w-10 h-10 text-blue-600" />,
    title: "Монтаж кондиционеров",
    description: "Профессиональная установка сплит-систем всех типов с гарантией на работы до 5 лет.",
    link: "/services/conditioning"
  },
  {
    icon: <Fan className="w-10 h-10 text-blue-600" />,
    title: "Вентиляционные системы",
    description: "Проектирование и монтаж систем вентиляции для жилых и коммерческих помещений.",
    link: "/services/ventilation"
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Пусконаладочные работы",
    description: "Комплексная настройка и запуск систем кондиционирования и вентиляции.",
    link: "/services/commissioning"
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Сервисное обслуживание",
    description: "Регулярное техническое обслуживание для поддержания оборудования в идеальном состоянии.",
    link: "/services/maintenance"
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-blue-600" />,
    title: "Для частных домов",
    description: "Комплексные решения для поддержания комфортного микроклимата в частных домах и коттеджах.",
    link: "/services/residential"
  },
  {
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    title: "Для бизнеса",
    description: "Промышленные системы вентиляции и кондиционирования для офисов, магазинов и производств.",
    link: "/services/commercial"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Комплексные решения для вашего комфорта</h2>
          <p className="text-lg text-gray-600">
            Предлагаем полный спектр услуг по обеспечению комфортного микроклимата в помещении — от проектирования до сервисного обслуживания.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-xl transition-all bg-white hover:border-blue-200 group"
            >
              <div className="mb-6 p-4 bg-blue-50 inline-block rounded-xl group-hover:bg-blue-100 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="outline" 
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
                size="sm"
              >
                Подробнее
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 text-base h-12">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
