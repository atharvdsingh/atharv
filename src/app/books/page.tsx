import Container from "@/components/common/Container";
import Book from "@/components/pages/book/Book";
import { generateMetadata } from "@/config/Meta.config";

export const metadata = generateMetadata("/books");

export default function page() {
  return (
    <Container>
      <Book />
    </Container>
  );
}
