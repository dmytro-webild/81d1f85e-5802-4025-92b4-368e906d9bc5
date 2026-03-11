"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroLogoBillboard from "@/components/sections/hero/HeroLogoBillboard";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardNineteen from "@/components/sections/feature/FeatureCardNineteen";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import ContactFaq from "@/components/sections/contact/ContactFaq";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import {
  Lightbulb,
  Zap,
  Briefcase,
  Star,
  TrendingUp,
  CheckCircle,
  Heart,
  Award,
  Users,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Globe,
} from "lucide-react";

export default function HomePage() {
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
            text: "Get Started",            href: "/services"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Proof"
          description="We transform brands through strategic digital solutions. From web design and development to digital marketing, we prove your digital potential."
          buttons={[
            { text: "Explore Our Work", href: "/services" },
            { text: "Let's Talk", href: "#contact" },
          ]}
          background={{ variant: "sparkles-gradient" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/modern-creative-agency-workspace-with-di-1773218772315-473fb20e.png"
          imageAlt="Proof Digital Team Workspace"
          frameStyle="card"
          mediaAnimation="slide-up"
          buttonAnimation="opacity"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Mission"
          tagIcon={Lightbulb}
          title="Proof empowers businesses with innovative digital strategies that drive measurable results and sustainable growth."
          description="Founded in 2018"
          subdescription="Trusted by 200+ Global Brands"
          icon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/vibrant-digital-agency-team-culture-phot-1773218772539-6c717fa4.png"
          imageAlt="Proof Digital Agency Culture"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardNineteen
          title="Our Core Services"
          description="We deliver comprehensive digital solutions tailored to your unique business needs and goals."
          tag="Services"
          tagIcon={Briefcase}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: 1,
              tag: "Strategy",              title: "Digital Strategy",              subtitle: "Strategic Planning for Growth",              description:
                "We develop comprehensive digital strategies that align with your business goals, analyzing market trends and competitor landscapes to create actionable roadmaps for success.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/digital-strategy-planning-visualization--1773218774189-389e6748.png",              imageAlt: "Digital Strategy Planning"
            },
            {
              id: 2,
              tag: "Design",              title: "UI/UX Design",              subtitle: "User-Centric Design Excellence",              description:
                "Our design team creates stunning, intuitive interfaces that engage users and drive conversions. From wireframes to high-fidelity prototypes, we craft digital experiences that delight.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/ui-ux-design-process-showing-design-tool-1773218772590-0902808a.png",              imageAlt: "UI/UX Design Process"
            },
            {
              id: 3,
              tag: "Development",              title: "Web Development",              subtitle: "Robust & Scalable Solutions",              description:
                "We build fast, secure, and scalable web applications using cutting-edge technologies. Our developers ensure seamless performance, accessibility, and optimal user experience.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/web-development-workspace-showing-code-e-1773218772673-641d907f.png",              imageAlt: "Web Development Stack"
            },
            {
              id: 4,
              tag: "Marketing",              title: "Digital Marketing",              subtitle: "Data-Driven Growth Campaigns",              description:
                "From SEO and content marketing to social media and paid advertising, we execute integrated campaigns that drive qualified traffic, engagement, and measurable ROI.",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/digital-marketing-analytics-dashboard-wi-1773218773754-a2192abe.png",              imageAlt: "Digital Marketing Analytics"
            },
          ]}
          buttons={[{ text: "View All Services", href: "/services" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardThree
          title="Featured Projects"
          description="Explore our portfolio of successful digital transformations and innovative solutions."
          tag="Case Studies"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          gridVariant="bento-grid"
          animationType="slide-up"
          products={[
            {
              id: "1",              name: "E-Commerce Platform Redesign",              price: "50K+",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/modern-e-commerce-website-interface-show-1773218773764-658d08a1.png",              imageAlt: "E-Commerce Platform"
            },
            {
              id: "2",              name: "SaaS Dashboard Development",              price: "75K+",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-saas-application-dashboard--1773218775489-791cb8d4.png",              imageAlt: "SaaS Dashboard"
            },
            {
              id: "3",              name: "Brand Identity & Website",              price: "35K+",              imageSrc:
                "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/brand-identity-showcase-displaying-logo--1773218773010-932be72c.png",              imageAlt: "Brand Website"
            },
          ]}
          buttons={[{ text: "View All Projects", href: "#portfolio" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Proof by the Numbers"
          description="Our track record speaks for itself with measurable results and proven success."
          tag="Impact"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          metrics={[
            {
              id: "1",              value: "200",              title: "Projects",              description: "Successfully completed digital projects",              icon: CheckCircle,
            },
            {
              id: "2",              value: "95",              title: "Satisfaction",              description: "Average client satisfaction rate",              icon: Heart,
            },
            {
              id: "3",              value: "8",              title: "Years",              description: "Of digital excellence and innovation",              icon: Award,
            },
            {
              id: "4",              value: "50",              title: "Team",              description: "Dedicated creative professionals",              icon: Users,
            },
          ]}
          buttons={[{ text: "Learn More", href: "#about" }]}
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
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-conf-1773218771885-b933ec86.png",              alt: "Client Avatar 1"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-conf-1773218771662-4965bb77.png",              alt: "Client Avatar 2"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-diverse-busin-1773218772718-e40f0ba5.png",              alt: "Client Avatar 3"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-portrait-of-a-busi-1773218772096-be789883.png",              alt: "Client Avatar 4"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-diverse-busin-1773218772145-932a1fa0.png",              alt: "Client Avatar 5"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/professional-headshot-of-a-business-prof-1773218772109-a761bfbe.png",              alt: "Client Avatar 6"
            },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet the Team"
          description="Our diverse team of designers, developers, and strategists are passionate about delivering exceptional digital solutions."
          tag="Leadership"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",              name: "Alex Chen",              role: "Founder & CEO",              description: "Visionary leader with 15+ years in digital innovation and brand transformation.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-confident-asian-founder-an-1773218772500-0bb1fc60.png",              imageAlt: "Alex Chen",              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" },
              ],
            },
            {
              id: "2",              name: "Maya Rodriguez",              role: "Creative Director",              description: "Award-winning designer specializing in brand identity and user experience design.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-creative-director-woman-wi-1773218772132-fb602c7f.png",              imageAlt: "Maya Rodriguez",              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Globe, url: "https://example.com" },
              ],
            },
            {
              id: "3",              name: "James Park",              role: "Lead Developer",              description: "Full-stack engineer passionate about building scalable, performant web applications.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-lead-developer-man-in-mode-1773218771797-c1561657.png",              imageAlt: "James Park",              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Github, url: "https://github.com" },
              ],
            },
            {
              id: "4",              name: "Emma Wilson",              role: "Marketing Strategist",              description: "Data-driven marketer with expertise in growth strategies and digital campaigns.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-marketing-strategist-woman-1773218772270-3b10ced6.png",              imageAlt: "Emma Wilson",              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Twitter, url: "https://twitter.com" },
              ],
            },
          ]}
          buttons={[{ text: "View All Team Members", href: "/about" }]}
          buttonAnimation="opacity"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to Transform Your Digital Presence?"
          ctaDescription="Let's discuss how Proof Digital can help you achieve your business goals through innovative digital solutions."
          ctaButton={{
            text: "Schedule a Consultation",            href: "https://calendly.com/proof-digital"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",              title: "What services does Proof Digital offer?",              content: "We provide comprehensive digital services including digital strategy, UI/UX design, web and app development, and digital marketing. Each service is customized to your specific business needs and goals."
            },
            {
              id: "2",              title: "What is your typical project timeline?",              content: "Project timelines vary based on scope and complexity. Most projects range from 2-6 months. We'll provide a detailed timeline during the discovery phase."
            },
            {
              id: "3",              title: "Do you work with startups and enterprises?",              content: "Yes! We work with organizations of all sizes, from ambitious startups to established enterprises. Our approach is tailored to each client's unique stage and requirements."
            },
            {
              id: "4",              title: "How do you measure success?",              content: "We establish clear KPIs at the start of every project and provide regular performance reports. Success metrics may include traffic growth, conversion rates, user engagement, or business revenue impact."
            },
            {
              id: "5",              title: "What is your development technology stack?",              content: "We use modern technologies including React, Next.js, Node.js, and cloud platforms like AWS and Firebase. Technology selection is based on project requirements and best practices."
            },
            {
              id: "6",              title: "Do you provide post-launch support?",              content: "Absolutely. We offer ongoing support, maintenance, and optimization services to ensure your digital solutions continue to perform and evolve with your business."
            },
          ]}
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
              href: "https://twitter.com/proofdigital",              ariaLabel: "Twitter"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/proof-digital",              ariaLabel: "LinkedIn"
            },
            {
              icon: Instagram,
              href: "https://instagram.com/proofdigital",              ariaLabel: "Instagram"
            },
            {
              icon: Github,
              href: "https://github.com/proof-digital",              ariaLabel: "GitHub"
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}