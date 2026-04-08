import HeadingWithSubheading from "../../common/headings/HeadingWithSubheading";
import { book } from "@/config/Book.config";
import BookCard from "./BookCard";


export default function Book() {
  return (
    <div className="mt-10  min-h-screen ">
      <HeadingWithSubheading
        heading="Books"
        subHeading="Book that shape thinking"
      />
      <div className="flex flex-col gap-5">
        {book.map((b, index) => (
          <BookCard {...b} key={index} />
        ))}
      </div>
    </div>
  );
}
