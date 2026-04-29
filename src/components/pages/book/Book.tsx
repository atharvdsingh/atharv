import ContentSection from "@/components/common/ContentSection";
import JsonLd from "@/components/common/JsonLd";
import { seoContent, structuredData } from "@/config/SeoContent.config";
import HeadingWithSubheading from "../../common/headings/HeadingWithSubheading";
import { book } from "@/config/Book.config";
import BookCard from "./BookCard";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Book() {
  return (
    <div className="mt-10  min-h-screen ">
      <JsonLd data={structuredData.getItemList("Book", book)} />
      <HeadingWithSubheading
        heading="Books"
        subHeading="Book that shape thinking"
      />
      <ContentSection paragraphs={seoContent.books.intro} />
      <div className="flex flex-col gap-5">
        {book.map((b, index) => (
          <StaggerComponentForList key={index} idx={index}>
            <BookCard {...b} key={index} />
          </StaggerComponentForList>
        ))}
      </div>
    </div>
  );
}
