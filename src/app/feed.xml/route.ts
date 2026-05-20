import { blogInstance } from "@/lib/blog.helper";
import { siteConfig } from "@/config/Meta.config";

export async function GET() {
  const slugs = blogInstance.getAllSlugs();
  const blogs = slugs.map((slug) => blogInstance.getBlogBySlug(slug));

  const items = blogs
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .map(
      (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteConfig.url}/blogs/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blogs/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      ${post.category.map((cat) => `<category>${cat}</category>`).join("\n      ")}
    </item>`,
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.author.name} — Blog</title>
    <link>${siteConfig.url}/blogs</link>
    <description>${siteConfig.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
