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
import { Textarea } from "@/components/ui/textarea"


// Define the validation schema
const formSchema = z.object({
  username: z.string().min(2, "Username must be at least 2 characters").max(50, "Username must be 50 characters or less"),
  bio: z.string().min(2, "Bio must be at least 2 characters").max(120, "Bio must be 120 characters or less"),
  hospital: z.string().min(2, "Hospital name must be at least 2 characters").max(50, "Hospital name must be 50 characters or less"),
  days: z.array(z.string()),
  fees: z.string(),
  gender: z.string(),
  appointmentTime: z.string(),
  degree: z.string(),
  specialization: z.string(),
  experience: z.string(),
  profileImage: z.string(),
  number: z.string(),
  email: z.string().email("Invalid email address"),
  address: z.string(),
});

const ApplyForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6  ">
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          name="days"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Available Days</FormLabel>
              <FormControl>
                <Input placeholder="Days (e.g., Monday, Wednesday)" {...field} />
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
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
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
        
        
        
        <FormField
          name="profileImage"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Profile Image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ApplyForm;
