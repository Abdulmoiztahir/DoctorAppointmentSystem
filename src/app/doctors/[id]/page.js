import { doctors } from "@/lib/data";
import Image from "next/image";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { PiGenderIntersexBold } from "react-icons/pi";
import { CiHospital1 } from "react-icons/ci";
import { WiTime3 } from "react-icons/wi";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePicker";

export default function DoctorDetail({ params }) {
  const doctorInfo = doctors.find((doctor) => doctor.id == params.id);
  return (
    <div className="min-h-screen">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {doctorInfo.category}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {doctorInfo.name}
              </h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
              </div>
              <p className="leading-relaxed mb-4">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean.
              </p>
              <div className="flex justify-between my-2">
                  <div className="flex items-center gap-2">
                    <PiGenderIntersexBold />
                    <h1 className="font-semibold">Gender</h1>
                  </div>
                  <h1>{doctorInfo.gender}</h1>
                </div>
                <div className="flex justify-between my-2 ">
                  <div className="flex items-center gap-2">
                    <CiHospital1 />
                    <h1 className="font-semibold">Hospital</h1>
                  </div>
                  <h1>{doctorInfo.hospital}</h1>
                </div>
                <div className="flex justify-between my-2 ">
                  <div className="flex items-center gap-2">
                    <WiTime3 />
                    <h1 className="font-semibold">AppointmentTime</h1>
                  </div>
                  <h1>{doctorInfo.appointmentTime}</h1>
                </div>
                <div className="flex justify-between my-2 ">
                  <div className="flex items-center gap-2">
                  <FaMoneyBillWaveAlt />
                    <h1 className="font-semibold">Fees : </h1>
                  </div>
                  <h1>${doctorInfo.fees}</h1>
                </div>
                <DatePicker />  
                <Button className={'w-full'}>Book Your Appointment</Button>
            </div>
            <div className="lg:w-1/2 relative w-full lg:h-auto h-64 object-cover object-center rounded">
              <Image
                alt="ecommerce"
                fill={true}
                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
