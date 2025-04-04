"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Laptop ve Bilgisayar Tamiri",
    desc: "Donanım ve yazılım sorunlarınızı çözüyor, parça değişimi ve bakım işlemlerini profesyonel olarak gerçekleştiriyoruz.",
  },
  {
    img: "/image/blog2.svg",
    title: "iPhone Tamiri",
    desc: "iPhone cihazlarınızın ekran, batarya, anakart, hoparlör ve diğer parça değişimlerini uzman ekibimizle yapıyoruz.",
  },
  {
    img: "/image/blog3.svg",
    title: "İkinci El Alım Satım",
    desc: "İkinci el laptop, bilgisayar, telefon ve tablet alım satımı yapıyor, en yüksek fiyat garantisi sunuyoruz.",
  },
  {
    img: "/image/blog4.svg",
    title: "Veri Kurtarma",
    desc: "Arızalı cihazlardan veri kurtarma işlemleri yapıyor, önemli verilerinizi güvenle yedekliyoruz.",
  },
  {
    img: "/image/blog-1.svg",
    title: "Yazılım Yükleme",
    desc: "İşletim sistemi kurulumu, yazılım güncellemeleri ve sürücü yüklemeleri yapıyoruz.",
  },
  {
    img: "/image/blog2.svg",
    title: "iPad ve Tablet Tamiri",
    desc: "Tablet cihazlarınızın her türlü teknik sorunu için hızlı ve etkili çözümler sunuyoruz.",
  },
  {
    img: "/image/blog3.svg",
    title: "Parça Yükseltme",
    desc: "Bilgisayarınızın performansını artırmak için RAM, SSD, CPU ve ekran kartı yükseltmeleri yapıyoruz.",
  },
  {
    img: "/image/blog4.svg",
    title: "Telefon Ekran Değişimi",
    desc: "Tüm marka ve model cep telefonlarının ekran değişimlerini orijinal parçalarla yapıyoruz.",
  },
];

export function Projects() {
  return (
    <section className="px-8 py-16 bg-gray-50" id="projeler">
      <div className="container mx-auto mb-10 text-center">
        <Typography 
          variant="h2" 
          color="green" 
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Projelerimiz
        </Typography>
        <Typography 
          variant="lead" 
          className="mx-auto w-full !text-gray-600 lg:w-10/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Gerçekleştirdiğimiz bazı özel projelerimiz ve referanslarımız.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
