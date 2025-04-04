"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

// components
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer id="iletisim" className="bg-gray-100 px-4 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* İletişim Bilgileri */}
          <div>
            <Typography 
              variant="h6" 
              color="blue-gray" 
              className="mb-4 font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              ProfGSM Bilişim
            </Typography>
            <div className="flex items-start gap-2 mb-2">
              <PhoneIcon className="h-5 w-5 text-green-600" />
              <Typography 
                variant="small" 
                className="text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                +90 212 513 15 67
              </Typography>
            </div>
            <div className="flex items-start gap-2 mb-2">
              <EnvelopeIcon className="h-5 w-5 text-green-600" />
              <Typography 
                variant="small" 
                className="text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                info@profgsm.com
              </Typography>
            </div>
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-5 w-5 text-green-600" />
              <Typography 
                variant="small" 
                className="text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Hamidiye Caddesi Doğubank İş Merkezi Kat 2 No:221, İstanbul, Türkiye
              </Typography>
            </div>
          </div>
          
          {/* Hızlı Linkler */}
          <div>
            <Typography 
              variant="h6" 
              color="blue-gray" 
              className="mb-4 font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Hızlı Linkler
            </Typography>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                  <Typography 
                    variant="small"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Ana Sayfa
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#hizmetler" className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                  <Typography 
                    variant="small"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Hizmetlerimiz
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#teknik-servis" className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                  <Typography 
                    variant="small"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Teknik Servis
                  </Typography>
                </a>
              </li>
              <li>
                <a href="#ekibimiz" className="flex items-center gap-1 text-gray-700 hover:text-green-600 transition-colors">
                  <Typography 
                    variant="small"
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Ekibimiz
                  </Typography>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Çalışma Saatleri */}
          <div>
            <Typography 
              variant="h6" 
              color="blue-gray" 
              className="mb-4 font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Çalışma Saatleri
            </Typography>
            <div className="space-y-2">
              <Typography 
                variant="small" 
                className="block text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Hafta içi: 09:00 - 19:00
              </Typography>
              <Typography 
                variant="small" 
                className="block text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Cumartesi: 10:00 - 18:00
              </Typography>
              <Typography 
                variant="small" 
                className="block text-gray-700"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                Pazar: Kapalıyız
              </Typography>
            </div>
          </div>
          
          {/* Sosyal Medya */}
          <div>
            <Typography 
              variant="h6" 
              color="blue-gray" 
              className="mb-4 font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              İletişim
            </Typography>
            <div className="mb-4">
              <a href="tel:+902125131567" className="inline-flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors mb-2">
                <PhoneIcon className="h-4 w-4 text-green-600" />
                <Typography 
                  variant="small"
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  Hemen Arayın
                </Typography>
              </a>
            </div>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://wa.me/902125131567" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <Typography 
            variant="small" 
            className="text-gray-700"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            &copy; {currentYear} ProfGSM Bilişim. Tüm Hakları Saklıdır
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
