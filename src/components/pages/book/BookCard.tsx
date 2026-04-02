import MajorHeading from "../../common/headings/MajorHeading";
import { Book } from "@/types/config";

import { BookOpen } from "lucide-react";

import GhostCard from "@/components/card/GhostCard";

export default function BookCard(book: Book) {
  return (
    <div>
      <div className="flex flex-col space-y-4 ">
        <div className="flex justify-start items-center gap-2 ">
         
            <BookOpen size={20} />
          <MajorHeading>{book.type}</MajorHeading>
        </div>

        <div className="grid space- grid-cols-1 md:grid-cols-2 gap-5 " >

          {book.book.map((b, index) => (
            <GhostCard subtitle={b.author} key={index}>
              {b.name}
            </GhostCard>
          ))}
        </div>
      </div>
    </div>
  );
}
