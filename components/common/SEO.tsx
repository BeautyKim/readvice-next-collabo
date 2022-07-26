import Head from "next/head";

type TitleProps = {
  title: string | string[] | undefined
}

export const SEO = ({ title }: TitleProps ) => {
  return (
    <Head>
        <title>{title} | Readvice</title>
    </Head>
  )
}