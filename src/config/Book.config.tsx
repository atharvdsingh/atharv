import { Book, BookTypeEnum } from "@/types/config";

export const book: Book[] = [
  {
    type: BookTypeEnum.TECH,
    book: [
      {
        name: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        link: "https://dataintensive.net/",
      },
      {
        name: "Clean Code",
        author: "Robert C. Martin",
        link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
      },
      {
        name: "The Pragmatic Programmer",
        author: "David Thomas, Andrew Hunt",
        link: "https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/",
      },
      {
        name: "Refactoring: Improving the Design of Existing Code",
        author: "Martin Fowler",
        link: "https://martinfowler.com/books/refactoring.html",
      },
    ],
  },
  {
    type: BookTypeEnum.NOVEL,
    book: [
      {
        name: "Dune",
        author: "Frank Herbert",
        link: "https://www.amazon.com/Dune-Frank-Herbert/dp/0441172717",
      },
      {
        name: "Project Hail Mary",
        author: "Andy Weir",
        link: "https://www.andyweirauthor.com/books/project-hail-mary-hc/project-hail-mary-el",
      },
    ],
  },
  {
    type: BookTypeEnum.SELF_HELP,
    book: [
      {
        name: "Atomic Habits",
        author: "James Clear",
        link: "https://jamesclear.com/atomic-habits",
      },
      {
        name: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        link: "https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555",
      },
    ],
  },
  {
    type: BookTypeEnum.MEANING,
    book: [
      {
        name: "Man's Search for Meaning",
        author: "Viktor E. Frankl",
        link: "https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl/dp/080701429X",
      },
      {
        name: "Meditations",
        author: "Marcus Aurelius",
        link: "https://www.amazon.com/Meditations-New-Translation-Marcus-Aurelius/dp/0812968255",
      },
    ],
  },
];
