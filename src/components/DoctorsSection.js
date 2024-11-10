import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, doctors } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { PiGenderIntersexBold } from "react-icons/pi";
import { CiHospital1 } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";

export default function DoctorsSection({ isHome }) {
  const filtered = isHome ? doctors.slice(0, 6) : doctors;
  return (
    <div className="container mx-auto">
      <div className=" flex justify-between my-2 mt-10">
        <h1 className="text-3xl font-bold">Doctors You Need</h1>
        {isHome ? (
          <Link href={"/doctors"}>
            <Button>See All</Button>
          </Link>
        ) : (
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      <div className="grid my-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
        {filtered.map((doctor) => (
          <Card key={doctor.name}>
            <CardHeader className={"flex flex-row gap-6"}>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DAS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{doctor.name}</CardTitle>
                <CardDescription>{doctor.category}</CardDescription>
              </div>
            </CardHeader>
            {!isHome && (
              <CardContent>
                <div className="flex justify-between my-2">
                  <div className="flex items-center gap-1">
                    <PiGenderIntersexBold />
                    <h1 className="font-semibold">Gender</h1>
                  </div>
                  <h1>{doctor.gender}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex items-center">
                    <CiHospital1 />
                    <h1 className="font-semibold">Hospital</h1>
                  </div>
                  <h1>{doctor.hospital}</h1>
                </div>
                <div className="flex justify-between my-2">
                  <div className="flex items-center">
                    <WiTime3 />
                    <h1 className="font-semibold">AppointmentTime</h1>
                  </div>
                  <h1>{doctor.appointmentTime}</h1>
                </div>
              </CardContent>
            )}
            <CardFooter>
              <Link href={`/doctors/${doctor.id}`}>
                <Button>See Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
