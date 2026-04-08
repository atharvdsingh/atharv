import { Gears } from "@/types/config";

import { Button } from "../../ui/button";
import Link from "next/link";
import GhostButton from "../../common/GhostButton";

export default function GearsCard(gear: Gears) {
  return (
    <div className="flex gap-2 text-muted-foreground truncate hover:text-foreground items-center ">
      <div className="[&>svg]:size-6"> {gear.icon} </div>
      <Button
        className="text-muted-foreground hover:text-foreground   "
        variant={"link"}
      >
        <Link aria-label={`View gear: ${gear.name}`} className="  " target="_blank" href={gear.link!}>
          {gear.name}
        </Link>
      </Button>
    </div>
  );
}
