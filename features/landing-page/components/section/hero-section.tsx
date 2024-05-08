import React from "react";
import styles from "./hero.module.scss";
import Image from "next/image";
import type { HeroSection } from "@api/content.types";

type HeroSectionProps = {
  section: HeroSection;
};

export function HeroSection({ section }: HeroSectionProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{section.title}</h1>
      <p className={styles.subTitle}>{section.subtitle}</p>

      <Image
        src={section.image.src}
        alt=""
        className={styles.image}
        width={section.image.width}
        height={section.image.height}
        priority
      />
    </section>
  );
}
