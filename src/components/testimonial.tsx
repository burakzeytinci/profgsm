"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(1);

  const TEAM_MEMBERS = [
    {
      id: 1,
      name: "Emre",
      position: "Laptop Uzmanı",
      description: "10 yılı aşkın deneyimi ile laptop tamiri ve ikinci el alım satım konusunda uzmanlaşmış. Anakart tamiri, sıvı teması ve veri kurtarma konularında özel yetkinliğe sahip.",
      image: "/image/avatar1.jpg"
    },
    {
      id: 2,
      name: "Samet",
      position: "iPhone Teknisyeni",
      description: "iPhone tamiri konusunda 8 yıllık deneyime sahip. Apple sertifikalı teknisyen olarak iPhone ve iPad tamir işlemlerini profesyonel şekilde yürütüyor.",
      image: "/image/avatar2.jpg"
    },
    {
      id: 3,
      name: "İdris",
      position: "Telefon Tamir Uzmanı",
      description: "Tüm marka ve model telefonların tamir işlemlerinde 7 yıllık deneyime sahip. Özellikle ekran, batarya değişimi ve veri kurtarmada uzmanlaşmış teknisyen.",
      image: "/image/avatar3.jpg"
    },
    {
      id: 4,
      name: "Halil",
      position: "Bilgisayar Teknik Servis",
      description: "5 yıllık deneyimi ile masaüstü bilgisayar tamiri ve yazılım sorunları çözümünde uzman. İşletim sistemi kurulumu ve optimizasyonu konusunda özel yetkinliğe sahip.",
      image: "/image/avatar2.jpg"
    }
  ];

  const activeMember = TEAM_MEMBERS.find(member => member.id === active) || TEAM_MEMBERS[0];

  return (
    <section className="px-8 py-16 bg-white" id="ekibimiz">
      <div className="container mx-auto mb-10 text-center">
        <Typography 
          variant="h2" 
          color="green" 
          className="mb-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Ekibimiz
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          ProfGSM Bilişim olarak deneyimli teknisyen kadromuzla hizmet vermekteyiz. 
          Uzman ekibimiz cihazlarınızdaki sorunları kalıcı olarak çözmek için burada.
        </Typography>
      </div>
      <div className="container max-w-screen-lg mx-auto">
        <Card 
          color="transparent" 
          shadow={false} 
          className="py-8 lg:flex-row"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <CardBody 
            className="w-full lg:gap-10 h-full lg:!flex justify-between"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="green"
                className="mb-4 font-bold lg:max-w-xs"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {activeMember.name} - {activeMember.position}
              </Typography>
              <Typography 
                className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {activeMember.description}
              </Typography>
              <Typography 
                variant="h6" 
                color="green" 
                className="mb-0.5"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                ProfGSM Bilişim Ekibi
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                İstanbul&apos;da teknik servis hizmeti
              </Typography>
              <div className="flex items-center gap-4">
                {TEAM_MEMBERS.map(member => (
                  <React.Fragment key={member.id}>
                    <Avatar
                      variant="rounded"
                      src={member.image}
                      alt={member.name}
                      size="sm"
                      className={`cursor-pointer ${
                        active === member.id ? "opacity-100 border-2 border-green-500" : "opacity-50"
                      }`}
                      onClick={() => setActive(member.id)}
                      placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                    {member.id !== TEAM_MEMBERS.length && (
                      <div className="w-[1px] h-[36px] bg-gray-200" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt={`${activeMember.name} profil resmi`}
                src={activeMember.image}
                className="h-full rounded-lg w-full object-cover border-4 border-green-500/20"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
