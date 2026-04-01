import React from "react";
import MajorHeading from "../common/headings/MajorHeading";
import { Book } from "@/types/config";
import SkillButton from "../common/SkillButton";
import { BookA } from "lucide-react";
import Card from "../common/Card";

export default function BookCard(book: Book) {
  return (
    <div>
      <div className="flex flex-col gap-2 ">
        <div className="flex gap-2 ">
          <SkillButton>
            <BookA />
          </SkillButton>
          <MajorHeading>{book.type}</MajorHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" gap-2>

            {book.author}
        </div>
      </div>
    </div>
  );
}
