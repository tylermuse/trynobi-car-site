import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import ArticleLayout from "../components/ArticleLayout";
import { getPostBySlug } from "../content/utils/mdxPostLoader";

const components = {};

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  useEffect(() => {
    if (post?.meta?.title) {
      document.title = `${post.meta.title} | Nobi: a conversational site assistant to help you grow`;
    }
  }, [post]);

  if (!post) {
    return (
      <ArticleLayout meta={{ title: "Not found" }}>
        <p>Sorry, we couldn’t find that article.</p>
      </ArticleLayout>
    );
  }

  const { Component, meta } = post;

  return (
    <ArticleLayout meta={meta}>
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": meta.title,
            "datePublished": meta.date,
            "image": meta.heroImage || undefined,
            "author": { "@type": "Person", "name": meta.author || "Nobi Team" },
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://nobi.ai/blog/${post.slug}` },
          }),
        }}
      />
    </ArticleLayout>
  );
}
