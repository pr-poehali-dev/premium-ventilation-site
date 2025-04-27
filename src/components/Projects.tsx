
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projectsData = [
  {
    image: "https://images.unsplash.com/photo-1600607687644-c7e43480eab5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Жилой комплекс «Небесный»",
    category: "Вентиляция и кондиционирование",
    description: "Установка мультизональной системы кондиционирования с индивидуальным управлением для 200 квартир"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Бизнес-центр «Горизонт»",
    category: "Промышленная вентиляция",
    description: "Проектирование и монтаж комплексной системы вентиляции с рекуперацией тепла"
  },
  {
    image: "https://images.unsplash.com/photo-1564540586988-aa4e53c3d799?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Торговый центр «Меридиан»",
    category: "Промышленное кондиционирование",
    description: "Установка чиллер-фанкойл системы общей мощностью 480 кВт для площади 5000 м²"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Реализованные проекты
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Наши лучшие работы</h2>
            <p className="text-lg text-gray-600">
              За 10 лет работы мы реализовали более 500 проектов различной сложности для частных и коммерческих клиентов.
            </p>
          </div>
          <Button 
            variant="outline" 
            className="mt-6 md:mt-0 border-blue-200 text-blue-600 hover:bg-blue-50 group flex items-center gap-2"
          >
            Все проекты
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <Button className="bg-blue-600 hover:bg-blue-700">Подробнее</Button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <div className="text-sm font-medium text-blue-600 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
