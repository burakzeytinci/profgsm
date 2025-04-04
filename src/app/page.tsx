"use client";

// components
import { Navbar, Footer, Hero, About, Projects, TechnicalServices, Testimonial, ContactForm } from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <About />
        <Projects />
        <TechnicalServices />
        <Testimonial />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
