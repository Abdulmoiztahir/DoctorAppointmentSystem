"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { addRequest } from "@/action/requests";
import { useToast } from "@/hooks/use-toast";

// Define the validation schema
const formSchema = z.object({
  bio: z
    .string()
    .min(2, "Bio must be at least 2 characters")
    .max(120, "Bio must be 120 characters or less")
    .nonempty("Bio is required"),
  hospital: z
    .string()
    .min(2, "Hospital name must be at least 2 characters")
    .max(50, "Hospital name must be 50 characters or less")
    .nonempty("Hospital name is required"),
  fees: z.string().nonempty("Fees are required"),
  gender: z.string().nonempty("Gender is required"),
  appointmentTime: z.string().nonempty("Appointment time is required"),
  degree: z.string().nonempty("Degree is required"),
  specialization: z.string().nonempty("Specialization is required"),
  experience: z.string().nonempty("Experience is required"),
  number: z.string().nonempty("Contact number is required"),
  address: z.string().nonempty("Address is required"),
});

function ApplyForm({ session }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bio: "",
      hospital: "",
      fees: "",
      gender: "",
      appointmentTime: "",
      degree: "",
      specialization: "",
      experience: "",
      number: "",
      address: "",
    },
  });

  async function onSubmit(values) {
    console.log(values);
    values.user = session.user._id;
    console.log("values=>", values);
    const response = await addRequest(values);
    console.log("response=>", response);
    if (response.error) {
      // form.reset();
      toast({
        title: "Sorry , Your application cannot be submitted.",
        description: response.msg,
      });
    } else {
      // form.reset();
      toast({
        title: "Your application is submitted.",
        description: "You will be informed by email in 3 business days.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6  ">
          <FormField
            name="hospital"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Hospital</FormLabel>
                <FormControl>
                  <Input placeholder="Hospital" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="fees"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Consultation Fees</FormLabel>
                <FormControl>
                  <Input placeholder="Fees" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="gender"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input placeholder="Gender" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="appointmentTime"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appointment Time</FormLabel>
                <FormControl>
                  <Input type="datetime-local" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="degree"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Degree</FormLabel>
                <FormControl>
                  <Input placeholder="Degree" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="specialization"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialization</FormLabel>
                <FormControl>
                  <Input placeholder="Specialization" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="experience"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Input placeholder="Experience" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="number"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="Contact Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          name="bio"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea placeholder="Bio" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          {form.formState.isSubmitting ? "Loading" : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default ApplyForm;
