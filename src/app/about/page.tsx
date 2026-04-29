import Image from "next/image";
import Container from "@/components/common/Container";
import SubHeading from "@/components/common/headings/SubHeading";
import HeadingWithSubheading from "@/components/common/headings/HeadingWithSubheading";
import { generateMetadata } from "@/config/Meta.config";
import { aboutConfig } from "@/config/About.config";
import { basicInformationService } from "@/config/BasicInformation.config";

export const metadata = generateMetadata("/about");

const paragraphs = [
  `${aboutConfig.name} is the kind of engineer who seems most interested in the moments after the excitement fades and the real work begins. The first version of a product is easy to admire. The harder question is whether it still feels clear, fast, and dependable when people begin to rely on it. That question sits quietly underneath much of his work.`,
  `He introduces himself simply as an engineer, but the shape of that word matters here. It means frontend craft with React and Next.js when the user experience needs to feel clean. It means backend discipline with TypeScript, Python, and service design when systems need to stay stable. It means thinking about infrastructure, performance, and pressure before those things turn into visible problems.`,
  `At a stealth startup, ${aboutConfig.name} works as a Founding Engineer, building scalable microservices with NestJS and TypeScript, using tools such as Redis, Kafka, and Kubernetes to support systems that have to behave well under load. Before that, he worked at IIIT Allahabad as a Software Developer Intern, where he moved between frontend architecture, backend APIs, Dockerized environments, and the everyday reality of shipping software that people can actually use.`,
  `His projects tell the same story from a different angle. BookChetna imagines a peer-to-peer book exchange platform, a product shaped by community and curiosity. Workmind explores AI-powered productivity and task management, not as a flashy demo, but as a practical attempt to make focused work easier. In both, there is a noticeable pattern: he is drawn to software that helps people move, decide, organize, and build.`,
  `There is also a quieter side to him, one that explains why this portfolio is not only about code. ${aboutConfig.name} is a gamer, a reader, and someone clearly interested in systems beyond software alone. The books he keeps close range from software craftsmanship to philosophy. The films he returns to lean toward stories of pressure, ambition, discipline, and consequence. Together, they suggest a person who likes tension, structure, and the way strong ideas hold up when tested.`,
  `His own line says a lot: "${basicInformationService.info}". It sounds playful at first, but it carries a real engineering instinct. Reliability matters. Calm systems matter. Good software is not only clever when it launches; it is trustworthy when it is tired, busy, or under strain. That belief gives his work its center.`,
  `So who is ${aboutConfig.name}? He is a full-stack engineer still early in the story, but already oriented toward the right problems: clarity over noise, systems over shortcuts, and products that stay useful after the first impression passes. This page is less a polished biography than a working portrait of a builder learning in public and building with intent.`,
];

export default function AboutPage() {
  return (
    <Container className=" min-h-screen">
      <article className="mx-auto mt-10 flex flex-col gap-8">
        <HeadingWithSubheading
          heading="Who is Atharv Dev Singh"
          subHeading="A blog-style portrait of the engineer behind this portfolio, his work, his projects, and the habits of mind that shape the way he builds software."
        />

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
          <Image
            src={aboutConfig.image}
            alt={aboutConfig.name}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          {paragraphs.map((paragraph) => (
            <SubHeading
              as="p"
              className="text-base leading-8 text-pretty text-foreground/80"
              key={paragraph}
            >
              {paragraph}
            </SubHeading>
          ))}
        </div>
      </article>
    </Container>
  );
}
