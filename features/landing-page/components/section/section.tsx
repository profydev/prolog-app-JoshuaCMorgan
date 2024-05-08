import type { Section } from "@api/content.types";
import { HeroSection } from "./hero-section";

type SectionProps = {
  section: Section;
};

export function Section({ section }: SectionProps) {
  switch (section.sectionType) {
    case "hero":
      return <HeroSection section={section} />;
  }
}
