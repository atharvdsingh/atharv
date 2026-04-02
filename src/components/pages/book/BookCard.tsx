import React from "react";
import MajorHeading from "../../common/headings/MajorHeading";
import { Book } from "@/types/config";
import SkillButton from "../../common/SkillButton";
import { BookA } from "lucide-react";
import Card from "./BookCardSeperate";
import { Link } from "next-view-transitions";
import { Button } from "../../ui/button";
import SubHeading from "../../common/headings/SubHeading";
import BookCardSeperate from "./BookCardSeperate";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 " >

          {book.book.map((b, index) => (
            <BookCardSeperate subtitle={b.author} key={index}>
              {b.name}
            </BookCardSeperate>
          ))}
        </div>
      </div>
    </div>
  );
}
