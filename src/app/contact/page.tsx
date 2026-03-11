"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import {
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "About", id: "about" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/", label: "Services" },
    { href: "/", label: "Portfolio" },
    { href: "/", label: "About" },
    { href: "/", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="small"
      sizing="largeSmallSizeMediumTitles"
      background="fluid"
      cardStyle="gradient-mesh"
      primaryButtonStyle="flat"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={navItems}
          button={{
            text: "Get Started",
            href: "/contact",
          }}
          brandName="Proof"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",
              title: "What services does Proof Digital offer?",
              content:
                "We provide comprehensive digital services including digital strategy, UI/UX design, web and app development, and digital marketing. Each service is customized to your specific business needs and goals.",
            },
            {
              id: "2",
              title: "What is your typical project timeline?",
              content:
                "Project timelines vary based on scope and complexity. Most projects range from 2-6 months. We'll provide a detailed timeline during the discovery phase.",
            },
            {
              id: "3",
              title: "Do you work with startups and enterprises?",
              content:
                "Yes! We work with organizations of all sizes, from ambitious startups to established enterprises. Our approach is tailored to each client's unique stage and requirements.",
            },
            {
              id: "4",
              title: "How do you measure success?",
              content:
                "We establish clear KPIs at the start of every project and provide regular performance reports. Success metrics may include traffic growth, conversion rates, user engagement, or business revenue impact.",
            },
            {
              id: "5",
              title: "What is your development technology stack?",
              content:
                "We use modern technologies including React, Next.js, Node.js, and cloud platforms like AWS and Firebase. Technology selection is based on project requirements and best practices.",
            },
            {
              id: "6",
              title: "Do you provide post-launch support?",
              content:
                "Absolutely. We offer ongoing support, maintenance, and optimization services to ensure your digital solutions continue to perform and evolve with your business.",
            },
          ]}
          ctaTitle="Ready to Transform Your Digital Presence?"
          ctaDescription="Let's discuss how Proof Digital can help you achieve your business goals through innovative digital solutions."
          ctaButton={{
            text: "Schedule a Consultation",
            href: "https://calendly.com/proof-digital",
          }}
          ctaIcon={Phone}
          useInvertedBackground={true}
          animationType="slide-up"
          accordionAnimationType="smooth"
          showCard={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Proof"
          copyrightText="© 2025 Proof Digital. All rights reserved."
          socialLinks={[
            {
              icon: Twitter,
              href: "https://twitter.com/proofdigital",
              ariaLabel: "Twitter",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/proof-digital",
              ariaLabel: "LinkedIn",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/proofdigital",
              ariaLabel: "Instagram",
            },
            {
              icon: Github,
              href: "https://github.com/proof-digital",
              ariaLabel: "GitHub",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}