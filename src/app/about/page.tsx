"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import TeamCardTwo from "@/components/sections/team/TeamCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FooterCard from "@/components/sections/footer/FooterCard";
import Link from "next/link";
import { Lightbulb, Zap, CheckCircle, Heart, Award, Users, Twitter, Linkedin, Instagram, Github, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Globe, Github as GithubIcon } from "lucide-react";

export default function AboutPage() {
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

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="Our Mission"
          tagIcon={Lightbulb}
          title="Proof empowers businesses with innovative digital strategies that drive measurable results and sustainable growth."
          description="Founded in 2018"
          subdescription="Trusted by 200+ Global Brands"
          icon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/vibrant-digital-agency-team-culture-phot-1773218772539-6c717fa4.png?_wi=2"
          imageAlt="Vibrant digital agency team culture photo showing employees celebrating success, brainstorming toget"
          mediaAnimation="blur-reveal"
          useInvertedBackground={true}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardOne
          metrics={[
            {
              id: "1",
              value: "200",
              title: "Projects",
              description: "Successfully completed digital projects",
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
              description: "Of digital excellence and innovation",
              icon: Award,
            },
            {
              id: "4",
              value: "50",
              title: "Team",
              description: "Dedicated creative professionals",
              icon: Users,
            },
          ]}
          title="Proof by the Numbers"
          description="Our track record speaks for itself with measurable results and proven success."
          tag="Impact"
          tagIcon={Award}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          buttonAnimation="opacity"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          members={[
            {
              id: "1",
              name: "Alex Chen",
              role: "Founder & CEO",
              description: "Visionary leader with 15+ years in digital innovation and brand transformation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-confident-asian-founder-an-1773218772500-0bb1fc60.png",
              imageAlt: "Portrait of a confident Asian founder and CEO in professional modern office setting, approachable an",
              socialLinks: [
                {
                  icon: LinkedinIcon,
                  url: "https://linkedin.com",
                },
                {
                  icon: TwitterIcon,
                  url: "https://twitter.com",
                },
              ],
            },
            {
              id: "2",
              name: "Maya Rodriguez",
              role: "Creative Director",
              description: "Award-winning designer specializing in brand identity and user experience design.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-creative-director-woman-wi-1773218772132-fb602c7f.png",
              imageAlt: "Portrait of a creative director woman with artistic and innovative expression, modern creative works",
              socialLinks: [
                {
                  icon: LinkedinIcon,
                  url: "https://linkedin.com",
                },
                {
                  icon: Globe,
                  url: "https://example.com",
                },
              ],
            },
            {
              id: "3",
              name: "James Park",
              role: "Lead Developer",
              description: "Full-stack engineer passionate about building scalable, performant web applications.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-lead-developer-man-in-mode-1773218771797-c1561657.png",
              imageAlt: "Portrait of a lead developer man in modern tech office environment, technical background with coding",
              socialLinks: [
                {
                  icon: LinkedinIcon,
                  url: "https://linkedin.com",
                },
                {
                  icon: GithubIcon,
                  url: "https://github.com",
                },
              ],
            },
            {
              id: "4",
              name: "Emma Wilson",
              role: "Marketing Strategist",
              description: "Data-driven marketer with expertise in growth strategies and digital campaigns.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AnBq6D5n9QzXjqBBaYaprIICzP/portrait-of-a-marketing-strategist-woman-1773218772270-3b10ced6.png",
              imageAlt: "Portrait of a marketing strategist woman in modern office environment with marketing analytics visib",
              socialLinks: [
                {
                  icon: LinkedinIcon,
                  url: "https://linkedin.com",
                },
                {
                  icon: TwitterIcon,
                  url: "https://twitter.com",
                },
              ],
            },
          ]}
          title="Meet the Team"
          description="Our diverse team of designers, developers, and strategists are passionate about delivering exceptional digital solutions."
          tag="Leadership"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          buttonAnimation="opacity"
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