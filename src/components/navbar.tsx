"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  ComputerDesktopIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href?.startsWith("http") ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900 hover:text-green-600 transition-colors"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  const NAV_MENU = [
    // {
    //   name: "Ana Sayfa",
    //   icon: HomeIcon,
    //   href: "#",
    // },
    {
      name: "Hizmetlerimiz",
      icon: WrenchScrewdriverIcon,
      href: "#hizmetler",
    },
    {
      name: "Teknik Servis",
      icon: ComputerDesktopIcon,
      href: "#teknik-servis",
    },
    {
      name: "Ekibimiz",
      icon: UserGroupIcon,
      href: "#ekibimiz",
    },
    {
      name: "İletişim",
      icon: PhoneIcon,
      href: "#iletisim",
    },
  ];

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MTNavbar
      shadow={scrolled}
      fullWidth
      className={`border-0 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/90 backdrop-blur-sm shadow-md" : "py-3"
      }`}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between">
          <Typography
            color="blue-gray"
            className="text-lg font-bold flex items-center"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <a href="#" className="flex items-center">
              <WrenchScrewdriverIcon className="h-6 w-6 text-green-600 mr-2" />
              ProfGSM Bilişim
            </a>
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-green-600" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="hidden items-center gap-2 lg:flex">
            <a href="tel:+902125131567" className="flex items-center">
              <PhoneIcon className="h-4 w-4 text-green-600 mr-1" />
              <Button
                variant="text"
                className="p-2 text-green-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                0212 513 15 67
              </Button>
            </a>
            <a href="#iletisim">
              <Button
                color="green"
                className="rounded-full"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                İletişim
              </Button>
            </a>
          </div>
          <IconButton
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5 text-green-600" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex flex-col items-center gap-2">
            <a href="tel:+902125131567" className="flex items-center">
              <PhoneIcon className="h-4 w-4 text-green-600 mr-1" />
              <Button
                variant="text"
                className="p-2 text-green-600"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                0212 513 15 67
              </Button>
            </a>
            <a href="#iletisim">
              <Button
                color="green"
                className="rounded-full"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                İletişim
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
