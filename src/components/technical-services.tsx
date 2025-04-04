"use client";

import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import {
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ArchiveBoxIcon,
  CpuChipIcon,
} from "@heroicons/react/24/solid";
import { ServiceItem } from "@/components";

const SERVICE_ITEMS = [
  {
    icon: ComputerDesktopIcon,
    title: "Laptop ve Masaüstü Bilgisayar Tamiri",
    description:
      "Donanım ve yazılım sorunları, parça değişimi ve performans optimizasyonu. Geniş yedek parça stoğumuz ve deneyimli teknisyenlerimizle bilgisayarınızdaki tüm sorunları çözüyoruz.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "iPhone Tamiri",
    description:
      "Ekran, batarya, anakart, kamera değişimi ve veri kurtarma işlemleri profesyonel ekibimiz tarafından yapılmaktadır. Apple sertifikalı teknisyenlerimiz cihazınızdaki sorunları kısa sürede çözüme kavuşturur.",
  },
  {
    icon: ArchiveBoxIcon,
    title: "İkinci El Laptop ve Telefon Alım Satımı",
    description:
      "En yüksek fiyat garantisi ile ikinci el cihazlarınızı alıyoruz. Ayrıca garantili ikinci el cihazları uygun fiyatlarla edinebilirsiniz. Tüm cihazlar kontrolden geçirilir ve garantili olarak satılır.",
  },
  {
    icon: DeviceTabletIcon,
    title: "iPad ve Tablet Tamiri",
    description:
      "Ekran, batarya ve anakart değişimi gibi işlemler için özel ekipmanlarımız ve eğitimli teknisyenlerimizle tablet cihazlarınızdaki sorunları hızlıca çözüyoruz.",
  },
  {
    icon: CpuChipIcon,
    title: "Parça Değişimi ve Yükseltme",
    description:
      "RAM, SSD, HDD, ekran kartı değişimi ve sistem yükseltme işlemleri gerçekleştiriyoruz. Cihazınızın performansını artıracak en uygun çözümler için profesyonel tavsiyeler sunuyoruz.",
  },
];

export function TechnicalServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = SERVICE_ITEMS[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % SERVICE_ITEMS.length);
    }, 5000); // 5 saniyede bir değişecek

    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="px-8 py-24 bg-white" id="teknik-servis">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography 
            variant="h2" 
            color="green"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Teknik Servis Hizmetlerimiz
          </Typography>
          <div className="mt-6 mb-4">
            <Typography 
              className="font-normal !text-gray-700"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {activeItem.description}
            </Typography>
          </div>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {SERVICE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleItemClick(idx)}
              className={`cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? "transform scale-105" : "opacity-70"
              }`}
            >
              <ServiceItem icon={item.icon} active={idx === activeIndex}>
                {item.title}
              </ServiceItem>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
