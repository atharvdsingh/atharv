import Container from "@/components/common/Container";
import Movie from "@/components/pages/Movies/Movie";
import { generateMetadata } from "@/config/Meta.config";

export const metadata = generateMetadata("/movies");

export default function page() {
  return (
    <Container>
      <Movie />
    </Container>
  );
}
