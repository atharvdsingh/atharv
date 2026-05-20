import path from "path";
import matter from "gray-matter";
import fs from "fs";

export interface BlogMatterType {
  title: string;
  publishedAt: string;
  description: string;
  category: string[];
  tags?: string[];
}
interface BlogPostMeta extends BlogMatterType {
  slug: string;
}

interface BlogPost extends BlogPostMeta {
  content: string;
}

class BlogUtility {
  private static BlogInstance: BlogUtility;
  private constructor() {}
  public static getBlogInstance(): BlogUtility {
    if (BlogUtility.BlogInstance) return BlogUtility.BlogInstance;
    BlogUtility.BlogInstance = new BlogUtility();
    return BlogUtility.BlogInstance;
  }
  public getPath(): string {
    return path.join(process.cwd(), "src/data");
  }
  public getAllSlugs(): string[] {
    return fs.readdirSync(this.getPath()).map((mdx) => mdx.replace(".mdx", ""));
  }
  public getBlogBySlug(slug: string): BlogPost {
    const blog = fs.readFileSync(
      path.join(this.getPath(), slug + ".mdx"),
      "utf8",
    );
    const { content, data } = matter(blog);
    return {
      slug: slug,
      ...(data as BlogMatterType),
      content,
    };
  }
  public async getBlogMatterBySlugs(slug: string): Promise<BlogPostMeta> {
    const blog = fs.readFileSync(
      path.join(this.getPath(), slug + ".mdx"),
      "utf-8",
    );
    const { data } = matter(blog);
    return { slug: slug, ...(data as BlogMatterType) };
  }
}

export const blogInstance = BlogUtility.getBlogInstance();
