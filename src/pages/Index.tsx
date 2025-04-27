
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">10+ лет опыта</h3>
              <p className="text-gray-600">Работаем с 2013 года и установили более 2000 систем</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">Официальная гарантия</h3>
              <p className="text-gray-600">На оборудование и все выполненные работы</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold mb-2">Сертифицированные мастера</h3>
              <p className="text-gray-600">Инженеры с профильным образованием и опытом</p>
            </div>
          </div>
        </div>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
