"use client";

import { Button, Typography } from "@material-tailwind/react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="green"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Profesyonel Bilgisayar ve Telefon Teknik Servisi
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-600 md:pr-16 xl:pr-28"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            İstanbul'da 15 yılı aşkın tecrübemizle bilgisayar, laptop, tablet ve cep telefonu tamir hizmetleri sunuyoruz.
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Bizi Hemen Arayın
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              <a href="tel:+902125131567" className="w-full md:w-auto">
                <Button
                  color="green"
                  className="w-full md:w-auto flex items-center justify-center"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <PhoneIcon className="h-4 w-4 mr-2" />{" "}
                  <span>0212 513 15 67</span>
                </Button>
              </a>
              <a
                href="https://wa.me/902125131567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto"
              >
                <Button
                  color="green"
                  className="w-full md:w-auto flex items-center justify-center"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <i className="fab fa-whatsapp text-lg mr-2"></i>{" "}
                  <span>WhatsApp ile Ulaşın</span>
                </Button>
              </a>
            </div>
          </div>
          <Typography 
            variant="small" 
            className="font-normal !text-gray-600"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            Haftaiçi: 09:00 - 19:00 | Cumartesi: 10:00 - 18:00
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="ProfGSM Bilişim"
          src="/image/bilgisayar-ve-laptop-tamiri.jpg"
          className="h-[36rem] w-full rounded-xl object-cover border-4 border-green-500/10"
        />
      </div>
    </header>
  );
}
