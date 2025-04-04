"use client";

import { Typography } from "@material-tailwind/react";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";
import ServiceCard from "@/components/service-card";

const SERVICES = [
  {
    icon: ComputerDesktopIcon,
    title: "Bilgisayar Teknik Servis",
    children:
      "Dizüstü ve masaüstü bilgisayarlarınızın donanım ve yazılım sorunlarını çözüyor, performans optimizasyonu ve bakım hizmeti sunuyoruz.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Telefon Teknik Servis",
    children:
      "iPhone başta olmak üzere cep telefonlarınızın ekran değişimi, batarya değişimi ve diğer tüm teknik sorunlarını profesyonel ekibimizle çözüyoruz.",
  },
  {
    icon: ShoppingCartIcon,
    title: "İkinci El Cihaz Alım Satımı",
    children:
      "İkinci el laptop, masaüstü bilgisayar ve cep telefonlarınızı değerinde alıyoruz. Garantili ikinci el cihaz satışımız da bulunmaktadır.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Parça Değişimi",
    children:
      "Bilgisayar ve telefonlarınız için orijinal yedek parça tedariki ve değişimi hizmeti sağlıyoruz. RAM, SSD, batarya ve ekran değişimleri yapıyoruz.",
  },
  {
    icon: ArrowPathIcon,
    title: "Veri Kurtarma",
    children:
      "Bozulan cihazlarınızdan veri kurtarma işlemlerini profesyonel ekipmanlarımızla gerçekleştiriyoruz. Fotoğraf, video ve diğer önemli verilerinizi güvenle kurtarıyoruz.",
  },
  {
    icon: CircleStackIcon,
    title: "Yazılım Kurulum ve Güncelleme",
    children:
      "İşletim sistemi kurulumu, güncelleme, format atma ve yazılım sorunlarını çözme hizmetleri veriyoruz. Virüs ve malware temizleme işlemleri yapıyoruz.",
  },
];

export function About() {
  return (
    <section className="px-8 py-16 bg-white" id="hakkimizda">
      <div className="container mx-auto mb-20 text-center">
        <Typography 
          variant="h1" 
          color="green" 
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Hakkımızda
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-600 lg:w-10/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          ProfGSM Bilişim olarak bilgisayar ve telefon tamir hizmetlerinin yanı sıra
          ikinci el cihaz alım satımı da yapıyoruz. Profesyonel ekibimizle hızlı ve 
          güvenilir hizmet sunuyoruz.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((props, idx) => (
          <ServiceCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
} 