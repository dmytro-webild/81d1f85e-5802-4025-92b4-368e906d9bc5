"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Star, Phone, Twitter, Linkedin, Instagram, Github } from "lucide-react";

export default function PortfolioPage() {
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
          brandName="Proof"
          navItems={[
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "About", id: "about" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" },
          ]}
          button={{
            text: "Get Started",
            href: "contact",
          }}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          products={[
            {
              id: "1",
              name: "E-Commerce Platform Redesign",
              price: "50K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/modern-e-commerce-website-interface-show-1773218773764-658d08a1.png",
              imageAlt: "Modern e-commerce website interface showcasing product listings, shopping cart, checkout page, and u",
            },
            {
              id: "2",
              name: "SaaS Dashboard Development",
              price: "75K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-saas-application-dashboard--1773218775489-791cb8d4.png",
              imageAlt: "Professional SaaS application dashboard with analytics, user management, data visualization, and fea",
            },
            {
              id: "3",
              name: "Brand Identity & Website",
              price: "35K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/brand-identity-showcase-displaying-logo--1773218773010-932be72c.png",
              imageAlt: "Brand identity showcase displaying logo, color palette, typography, brand guidelines, and complete w",
            },
            {
              id: "4",
              name: "Digital Marketing Campaign",
              price: "25K+",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/digital-marketing-analytics-dashboard-wi-1773218773754-a2192abe.png",
              imageAlt: "Digital marketing analytics dashboard with SEO metrics, social media analytics, conversion tracking,",
            },
          ]}
          title="Featured Projects"
          description="Explore our portfolio of successful digital transformations and innovative solutions."
          tag="Case Studies"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          animationType="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Proof Digital transformed our entire digital presence. Their strategic approach, combined with exceptional execution, delivered results beyond our expectations. They're not just an agency—they're true partners in our success."
          rating={5}
          author="Sarah Johnson, CEO at TechVenture"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-conf-1773218771885-b933ec86.png",
              alt: "Professional headshot portrait of a confident business professional woman with friendly expression, ",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-conf-1773218771662-4965bb77.png",
              alt: "Professional headshot portrait of a confident business professional man with friendly smile, modern ",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-diverse-busin-1773218772718-e40f0ba5.png",
              alt: "Professional headshot of a diverse business professional woman with warm smile, modern business prof",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-busi-1773218772096-be789883.png",
              alt: "Professional headshot portrait of a business professional man with confident expression, business ca",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-diverse-busin-1773218772145-932a1fa0.png",
              alt: "Professional headshot of a diverse business professional woman with warm professional smile, modern ",
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-business-prof-1773218772109-a761bfbe.png",
              alt: "Professional headshot of a business professional man with confident expression and friendly smile, b",
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="fade"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          faqs={[
            {
              id: "1",
              title: "What services does Proof Digital offer?",
              content: "We provide comprehensive digital services including digital strategy, UI/UX design, web and app development, and digital marketing. Each service is customized to your specific business needs and goals.",
            },
            {
              id: "2",
              title: "What is your typical project timeline?",
              content: "Project timelines vary based on scope and complexity. Most projects range from 2-6 months. We'll provide a detailed timeline during the discovery phase.",
            },
            {
              id: "3",
              title: "Do you work with startups and enterprises?",
              content: "Yes! We work with organizations of all sizes, from ambitious startups to established enterprises. Our approach is tailored to each client's unique stage and requirements.",
            },
            {
              id: "4",
              title: "How do you measure success?",
              content: "We establish clear KPIs at the start of every project and provide regular performance reports. Success metrics may include traffic growth, conversion rates, user engagement, or business revenue impact.",
            },
            {
              id: "5",
              title: "What is your development technology stack?",
              content: "We use modern technologies including React, Next.js, Node.js, and cloud platforms like AWS and Firebase. Technology selection is based on project requirements and best practices.",
            },
            {
              id: "6",
              title: "Do you provide post-launch support?",
              content: "Absolutely. We offer ongoing support, maintenance, and optimization services to ensure your digital solutions continue to perform and evolve with your business.",
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