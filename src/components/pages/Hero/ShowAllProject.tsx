"use client"
import { Button } from "@/components/ui/button";
import { useHapticFeedback } from "@/hooks/use-haptic-feedback";
import { Link } from "next-view-transitions";

export default function ShowAllProject() {
  const { triggerHaptic, isMobile } = useHapticFeedback()
  function handleonclick() {
    if (isMobile()) {
      triggerHaptic("light")
    }
  }
  return (
    <Button onClick={handleonclick} className="cursor-pointer w-fit p-2 " variant={"outline"}>
      <Link aria-label="Show all Projects" href={"/projects"}> Show all Projects </Link>
    </Button>
  );
}
