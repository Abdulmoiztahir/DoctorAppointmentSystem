import { redirect } from "next/dist/server/api-utils";
import { auth } from "../../../../auth";
import { getRequest } from "@/action/requests";
import DoctorRequest from "@/components/DoctorRequest";

export default async function Requests() {
  const session = await auth();
  if (!session && session?.user?.role != "admin") redirect("/");
  const { requests } = await getRequest();
  console.log("requests =>", requests);

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl my-4">Doctors Request</h1>
      <DoctorRequest requests={requests} />
    </div>
  );
}
