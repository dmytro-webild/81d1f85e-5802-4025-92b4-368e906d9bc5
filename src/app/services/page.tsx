"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  CheckCircle,
  Heart,
  Award,
  Users,
  Phone,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export default function ServicesPage() {
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
            href: "#contact",
          }}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Comprehensive Digital Services"
          description="We offer a complete suite of digital solutions designed to transform your business and accelerate growth in the digital landscape."
          tag="Services"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Strategy",
              title: "Digital Strategy & Consulting",
              subtitle: "Strategic Planning for Growth",
              description:
                "We develop comprehensive digital strategies that align with your business goals, analyzing market trends and competitor landscapes to create actionable roadmaps for sustainable success and measurable growth.",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/digital-strategy-planning-visualization--1773218774189-389e6748.png",
              imageAlt: "Digital Strategy Planning",
            },
            {
              id: 2,
              tag: "Design",
              title: "UI/UX Design & User Research",
              subtitle: "User-Centric Design Excellence",
              description:
                "Our design team creates stunning, intuitive interfaces that engage users and drive conversions. From wireframes to high-fidelity prototypes, we craft digital experiences that delight and perform, backed by user research and testing.",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/ui-ux-design-process-showing-design-tool-1773218772590-0902808a.png",
              imageAlt: "UI/UX Design Process",
            },
            {
              id: 3,
              tag: "Development",
              title: "Web & App Development",
              subtitle: "Robust & Scalable Solutions",
              description:
                "We build fast, secure, and scalable web applications using cutting-edge technologies. Our developers ensure seamless performance, accessibility, and optimal user experience across all devices and platforms.",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/web-development-workspace-showing-code-e-1773218772673-641d907f.png",
              imageAlt: "Web Development Stack",
            },
            {
              id: 4,
              tag: "Marketing",
              title: "Digital Marketing & Growth",
              subtitle: "Data-Driven Growth Campaigns",
              description:
                "From SEO and content marketing to social media and paid advertising, we execute integrated campaigns that drive qualified traffic, engagement, and measurable ROI for your business.",
              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/digital-marketing-analytics-dashboard-wi-1773218773754-a2192abe.png",
              imageAlt: "Digital Marketing Analytics",
            },
          ]}
          buttons={[{ text: "Schedule a Consultation", href: "#contact" }]}
          mediaAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Our Service Impact"
          description="We deliver measurable results across all our digital services and solutions."
          tag="Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",
              value: "200",
              title: "Projects",
              description: "Successfully delivered digital projects",
              icon: CheckCircle,
            },
            {
              id: "2",
              value: "95",
              title: "Satisfaction",
              description: "Average client satisfaction rate",
              icon: Heart,
            },
            {
              id: "3",
              value: "8",
              title: "Years",
              description: "Of proven digital excellence",
              icon: Award,
            },
            {
              id: "4",
              value: "50",
              title: "Team",
              description: "Talented creative professionals",
              icon: Users,
            },
          ]}
          buttons={[{ text: "Get Started", href: "#contact" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Elevate Your Digital Presence?"
          ctaDescription="Let's discuss how our services can help you achieve your business goals through innovative digital solutions and strategic implementation."
          ctaButton={{
            text: "Schedule a Consultation",
            href: "https://calendly.com/proof-digital",
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "What is included in your digital strategy service?",
              content:
                "Our digital strategy service includes market research, competitor analysis, customer journey mapping, technology recommendations, and a detailed roadmap for digital transformation aligned with your business objectives.",
            },
            {
              id: "2",
              title: "How long does a typical project take?",
              content:
                "Project timelines vary based on scope and complexity. Discovery typically takes 2-4 weeks, design 4-8 weeks, and development 8-16 weeks. We provide detailed timelines during the initial consultation.",
            },
            {
              id: "3",
              title: "Do you provide ongoing support after launch?",
              content:
                "Yes, we offer comprehensive post-launch support including maintenance, monitoring, optimization, and feature enhancements. We can provide dedicated support plans tailored to your needs.",
            },
          ]}
          useInvertedBackground={false}
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