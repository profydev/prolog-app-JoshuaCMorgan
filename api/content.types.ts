type Meta = {
  title: string;
  description: string;
  image: string;
};

export enum SectionType {
  Hero = "hero",
  // SocialProof = "social-proof",
  // Testimonials = "testimonials",
}

export type HeroSection = {
  sectionType: SectionType.Hero;
  theme: "light-gray";
  title: string;
  subtitle: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

//  type Section = HeroSection | SocialProofSection | TestimonialSection;
export type Section = HeroSection;

export type Page = {
  meta: Meta;
  sections: Section[];
};
