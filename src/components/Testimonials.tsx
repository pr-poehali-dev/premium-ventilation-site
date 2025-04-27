
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonialsData = [
  {
    text: "Обратились в компанию для установки кондиционеров в новой квартире. Работу выполнили быстро и чисто, мастера очень вежливые и аккуратные. Уже второй год пользуемся и никаких проблем!",
    author: "Анна Петрова",
    position: "Частный клиент",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Заказывали систему вентиляции для нашего ресторана. Ребята сделали все в срок и с учетом всех наших требований. Отдельное спасибо инженеру Михаилу за грамотные консультации и помощь в выборе оборудования.",
    author: "Дмитрий Волков",
    position: "Директор ресторана «Веранда»",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    text: "Компания устанавливала климатическую систему в нашем офисе на 300 м². Все сотрудники теперь работают в комфортных условиях. При возникновении вопросов служба поддержки всегда оперативно реагирует.",
    author: "Елена Сергеева",
    position: "Управляющий партнер ООО «Горизонт»",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Отзывы клиентов
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Что говорят о нас клиенты</h2>
          <p className="text-lg text-gray-600">
            Мы гордимся своей работой и высоко ценим доверие наших клиентов. Вот что они рассказывают о сотрудничестве с нами.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div 
              key={index} 
              className="p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow relative"
            >
              <svg className="w-12 h-12 text-blue-100 absolute top-6 right-6" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10.7 25.4c-1.2 0-2.3-0.3-3.4-0.9-1.1-0.6-1.9-1.4-2.6-2.4-0.7-1-1-2.2-1-3.5 0-1.1 0.3-2.1 0.8-3 0.5-0.9 1.2-1.7 2.2-2.3 0.9-0.6 2-0.9 3.2-0.9 1.3 0 2.3 0.3 3.2 0.9 0.9 0.6 1.6 1.4 2.1 2.4 0.5 1 0.7 2 0.7 3.2 0 0.7-0.1 1.4-0.4 2.1-0.2 0.7-0.6 1.4-1 2l2.1 1.8-4.2 2.6-1.7-2z M25.4 25.4c-1.2 0-2.3-0.3-3.4-0.9-1.1-0.6-1.9-1.4-2.6-2.4-0.7-1-1-2.2-1-3.5 0-1.1 0.3-2.1 0.8-3 0.5-0.9 1.2-1.7 2.2-2.3 0.9-0.6 2-0.9 3.2-0.9 1.3 0 2.3 0.3 3.2 0.9 0.9 0.6 1.6 1.4 2.1 2.4 0.5 1 0.7 2 0.7 3.2 0 0.7-0.1 1.4-0.4 2.1-0.2 0.7-0.6 1.4-1 2l2.1 1.8-4.2 2.6-1.7-2z"></path>
              </svg>
              
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.text}</p>
              
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author.split(' ').map(name => name[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-blue-600/10 text-blue-600 font-medium rounded-full">
            <span className="text-lg font-bold">4.9</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span>на основе 512 отзывов</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
