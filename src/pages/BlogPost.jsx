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
      document.title = `${post.meta.title} | Nobi`;
    }
    if (post?.meta?.description) {
      let metaDesc = document.querySelector("meta[name=description]");
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", post.meta.description);
    }
    return () => {
      const metaDesc = document.querySelector("meta[name=description]");
      if (metaDesc) metaDesc.setAttribute("content", "");
    };
  }, [post]);

  if (!post) {
    return (
      <ArticleLayout meta={{ title: "Not found" }}>
        <p>Sorry, we couldn’t find that article.</p>
      </ArticleLayout>
    );
  }

  const { Component, meta } = post;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": meta.title,
    "datePublished": meta.date,
    "dateModified": meta.publishedAt || meta.date,
    "image": meta.heroImage ? `https://nobi.ai${meta.heroImage}` : undefined,
    "author": { "@type": "Person", "name": meta.author || "Nobi Team" },
    "publisher": {
      "@type": "Organization",
      "name": "Nobi",
      "url": "https://nobi.ai",
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://nobi.ai/blog/${post.slug}` },
    "description": meta.description || meta.excerpt || "",
  };

  const schemas = [articleSchema];

  if (meta.faqItems) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": meta.faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    });
  }

  return (
    <ArticleLayout meta={meta}>
      <MDXProvider components={components}>
        <Component />
      </MDXProvider>

      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </ArticleLayout>
  );
}
