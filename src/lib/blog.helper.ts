import path from "path";
import matter from "gray-matter";
import fs from "fs";

export interface BlogMatterType {
  title: string;
  publishedAt: Date;
  description: string;
  category: string[];
  tags?: string[];
}
interface getBlogBySlugType {
  slug: string;
  matter: BlogMatterType;
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
  public getBlogBySlug(slug: string): getBlogBySlugType {
    const blog = fs.readFileSync(
      path.join(this.getPath(), slug + ".mdx"),
      "utf8",
    );
    const { content, data } = matter(blog);
    return {
      slug: slug.replace(".mdx", ""),
      matter: data as BlogMatterType,
      content,
    };
  }
  public async getBlogMatter(slug: string) {
    const blog = fs.readFileSync(path.join(this.getPath(), slug), "utf-8");
    const { data } = matter(blog);
    return { slug: slug.replace(".mdx", ""), matter: data as BlogMatterType };
  }
}

export const blogInstance = BlogUtility.getBlogInstance();
