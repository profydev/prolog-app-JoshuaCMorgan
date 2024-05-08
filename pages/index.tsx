import Head from "next/head";
import styles from "./index.module.scss";
import { Header, Section } from "@features/landing-page";
import { Page } from "@api/content.types";
import { getContentPage } from "@api/content";
import type { InferGetStaticPropsType, GetStaticProps } from "next";

type PageProps = {
  page: Page;
};

export const getStaticProps = (async () => {
  const page = await getContentPage("home");

  return { props: { page } };
}) satisfies GetStaticProps<PageProps>;

const HomePage = ({ page }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{page.meta.title}</title>
        <meta name="description" content={page.meta.description} />
        <meta property="og:title" content={page.meta.title} />
        <meta property="og:description" content={page.meta.description} />
        <meta name="og:image" content={page.meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.meta.title} />
        <meta name="twitter:description" content={page.meta.description} />
        <meta name="twitter:image" content={page.meta.image} />
      </Head>
      <Header />
      {page.sections.map((section, index) => {
        return <Section key={index} section={section}></Section>;
      })}
      <button
        className={styles.contactButton}
        onClick={() =>
          alert(
            "Implement this in Challenge 2 - Modal:\n\nhttps://profy.dev/rjs-challenge-modal",
          )
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </button>
    </>
  );
};

export default HomePage;
