import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="text-gray-600 my-5 body-font">
      <div className="container mx-auto flex py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded"
            height={500}
            width={500}
            alt="hero"
            src="https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            DOCTOR APPOINTMENT SYSTEM
            <br className="hidden lg:inline-block" />
            BY <span className="font-bold underline">ABDUL MOIZ</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center gap-2">
            <Link href={"/doctors/apply"}>
              <Button>Apply As A Doctor</Button>
            </Link>
            <Button variant="outline">Find Doctors You Need</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
