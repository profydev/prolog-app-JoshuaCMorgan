import { ContactModal } from "../features/landing-page/components/contact-modal/contact-modal";
import Head from "next/head";
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
      <ContactModal />
    </>
  );
};

export default HomePage;
