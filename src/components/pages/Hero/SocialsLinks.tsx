import { socialLinks } from "@/config/SocialLinks.config";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../ui/tooltip";
import Link from "next/link";

export default function SocialsLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      {socialLinks.map((socialLinksItems, index) => (
        <Tooltip key={index}>
          <TooltipTrigger
            
            className="text-sm size-8 border p-1 rounded-sm skill-inner-shadow  cursor-pointer hover:text-foreground  transition-all duration-300 text-muted-foreground  "
          >
            <Link
            className=""
            target="_blank"
            href={socialLinksItems.href} >
            {socialLinksItems.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent> {socialLinksItems.name} </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
