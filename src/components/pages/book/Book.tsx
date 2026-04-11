import HeadingWithSubheading from "../../common/headings/HeadingWithSubheading";
import { book } from "@/config/Book.config";
import BookCard from "./BookCard";
import StaggerComponentForList from "@/components/animations/StaggerComponentForList";

export default function Book() {
  return (
    <div className="mt-10  min-h-screen ">
      <HeadingWithSubheading
        heading="Books"
        subHeading="Book that shape thinking"
      />
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
