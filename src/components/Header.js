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
import { auth, signOut } from "../../auth";
import Image from "next/image";

export default async function Header() {
  const session = await auth();
  console.log("session in header =>", session);

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
                <Image
                  src={session?.user?.image}
                  height={40}
                  width={40}
                  className="rounded-full"
                />
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>Profile</MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/appointments"}>
                  <MenubarItem>My Appointments</MenubarItem>
                </Link>
                <MenubarSeparator />{" "}
                <form
                  action={async () => {
                    "use server";
                    await signOut("google");
                  }}
                >
                  <Button type="submit">Logout</Button>
                </form>
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
