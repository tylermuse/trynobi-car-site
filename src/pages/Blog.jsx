import React, { useEffect, useMemo } from "react";
import PageLayout from "../components/PageLayout";
import { posts } from "../content/utils/mdxPostLoader";

export default function Blog() {
  useEffect(() => {
    document.title = "Blog | Nobi: a conversational site assistant to help you grow";
  }, []);

  const blogLd = useMemo(() => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://nobi.ai";
    return posts.map((post, index) => ({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.meta.title,
      "datePublished": post.meta.date,
      "image": post.meta.heroImage || undefined,
      "url": `${origin}/blog/${post.slug}`,
      "position": index + 1,
    }));
  }, []);

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-white to-slate-50 dark:from-[#0a0a0a] dark:to-black text-black dark:text-white">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-20 sm:pb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Blog</h1>
          <p className="mt-3 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-2xl">
            Playbooks, experiments, and product updates for teams adding conversational AI to ecommerce.
          </p>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16 grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden"
            >
              {post.meta.heroImage && (
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={post.meta.heroImage}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                <h2 className="mt-2 text-xl font-semibold group-hover:text-purple-600 transition-colors">{post.meta.title}</h2>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70 line-clamp-3">{post.meta.excerpt}</p>
                <div className="mt-3 text-xs text-black/50 dark:text-white/60">
                  {new Date(post.meta.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                </div>
                {post.meta.tags?.length ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.meta.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-xs font-semibold text-black/70 dark:text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </a>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd.length === 1 ? blogLd[0] : blogLd) }}
        />
      </div>
    </PageLayout>
  );
}
