import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";
import { currentUser } from "@/lib/data";

export default function Header() {
  const session = {currentUser};
  return (
    <div className="bg-secondary py-3">
      <div className="flex container mx-auto justify-between p-2">
        <Link href={"/"}>
          <h1 className="text-xl font-mono font-bold">LOGO</h1>
        </Link>
        {session ? (
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className={"border-none"}>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DAS</AvatarFallback>
                </Avatar>
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointments"}>
                  <MenubarItem>My Appointments</MenubarItem>
                </Link>
                <MenubarSeparator />
                <MenubarItem>Logout</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href={"/signin"}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}
