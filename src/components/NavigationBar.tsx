import { Github, Linkedin, Twitter } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { H2 } from "./ui/h2";

export function NavigationBar() {
  return (
    <div className="flex justify-between m-4">
      <div className="flex justify-around items-center gap-4">
        <H2>Tyler Industries</H2>
      </div>
      <div className="flex justify-around items-center gap-4">
        <Github />
        <Linkedin />
        <Twitter />
        <ModeToggle />
      </div>
    </div>
  );
}
