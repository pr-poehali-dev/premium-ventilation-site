
import React from "react";
import { Shield, Clock, Award, Users } from "lucide-react";

const featuresData = [
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: "Гарантия качества",
    description: "На все работы предоставляем официальную гарантию до 5 лет. Используем только сертифицированное оборудование от проверенных поставщиков."
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    title: "Оперативность",
    description: "Выполняем монтажные работы в кратчайшие сроки без потери качества. Экстренный выезд инженера в течение 2 часов."
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600" />,
    title: "Профессионализм",
    description: "Наши специалисты имеют высокую квалификацию и проходят регулярное обучение, что гарантирует безупречное качество всех работ."
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Индивидуальный подход",
    description: "Разрабатываем персональные решения под конкретные задачи и особенности объекта, учитывая все пожелания заказчика."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600">
            Доверьте свой комфорт профессионалам. Мы гарантируем высокое качество и надежность всех предоставляемых услуг.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-100 rounded-xl hover:shadow-xl transition-shadow bg-white group hover:border-blue-100"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
