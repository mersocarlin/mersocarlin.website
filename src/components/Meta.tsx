import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const baseDescription = `Hi there! I'm Hemerson Carlin, also known as mersocarlin, a passionate and resourceful full-stack Software Engineer with 10+ years of experience focused on agile development, architecture and team building. I have experience in designing and developing web applications using microservices architecture alongside with JavaScript, Node.js and React.`

interface MetaProps {
  description?: string
  ogImageUrl?: string
  ogType?: string
  title?: string
}

export default function Meta({
  description = baseDescription,
  ogImageUrl = '/hemerson-dark.jpg',
  ogType = 'website',
  title = 'Hemerson Carlin - Tech Lead / Software Engineer',
}: MetaProps) {
  const router = useRouter()

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="robots" content="follow, index" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="software, javascript, JS, ReactJS, NodeJS, software engineer, full stack, developer, blog, website"
      />
      <meta name="author" content="Hemerson Carlin" />

      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://mersocarlin.com${ogImageUrl}`}
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="200" />
      <meta property="og:image:height" content="200" />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta
        property="og:url"
        content={`https://mersocarlin.com${router.asPath}`}
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content="@mersocarlin" />
      <meta name="twitter:site" content="@mersocarlin" />
    </Head>
  )
}
