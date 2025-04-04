"use client";

import {
  Typography,
  Card,
  CardBody,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16 bg-gray-50" id="iletisim">
      <div className="container mx-auto text-center">
        <Typography 
          variant="h1" 
          color="green" 
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          İletişim
        </Typography>
        <Typography 
          variant="lead" 
          className="mx-auto mb-12 w-full px-4 !text-gray-600 md:w-10/12 lg:w-8/12 xl:w-6/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Bize ulaşın, sorularınızı yanıtlayalım ve ihtiyaçlarınıza özel çözümler sunalım.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-green-100">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-green-600">
              <Typography variant="h4" color="white" className="mb-2">
                İletişim Bilgileri
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-green-100"
              >
                Aşağıdaki iletişim bilgilerimizden bize ulaşabilirsiniz. Teknik destek için hemen arayabilirsiniz.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +90 212 513 15 67
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  info@profgsm.com
                </Typography>
              </div>
              <div className="flex mb-10 gap-5">
                <MapPinIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  Hamidiye Caddesi Doğubank İş Merkezi Kat 2 No:221, Istanbul, Turkey
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="white">
                  <i className="fa-brands fa-whatsapp text-lg" />
                </IconButton>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <div className="w-full h-full min-h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d752.6147369407755!2d28.9748662!3d41.0152141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9dce627e12b%3A0x2f5dcd7da356da30!2sProf%20Gsm%26Bili%C5%9Fim!5e0!3m2!1str!2str!4v1743632629979!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "400px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="w-full flex justify-end mt-4">
                <a href="https://maps.app.goo.gl/oatViegzgEwryYKQA" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full md:w-fit" color="green" size="md">
                    Google Maps'te Aç
                  </Button>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
