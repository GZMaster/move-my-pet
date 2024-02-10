"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const formSchema = z.object({
  pet_specie: z.string(),
  pet_breed: z.string(),
  pet_sex: z.string(),
  pet_weight: z.string(),
  dimensions: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  Phone: z.string().min(11, {
    message: "Phone Number must be 11 digits",
  }),
  email: z
    .string()
    .min(5, {
      message: "Email must be valid",
    })
    .email("This is not a valid email"),
  message: z.string(),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      Phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 border-2 border-black/20  p-4 shadow sm:w-2/3 md:gap-6 md:p-8 lg:w-[500px]"
      >
        <FormField
          control={form.control}
          name="pet_specie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Specie</FormLabel>
              <FormControl>
                <Input placeholder="eg. dog, cat, bird, rabbit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pet_breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Breed</FormLabel>
              <FormControl>
                <Input placeholder="Type in the breed of your pet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pet_sex"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Sex</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your pets sex" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pet_breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pet Weight(in kg)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Type in the weight of your pet"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pet_breed"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dimensions of the pet crate</FormLabel>
              <FormControl>
                <Input
                  placeholder="Length, Width, Height of pet crate"
                  {...field}
                />
              </FormControl>
              <FormDescription className="flex justify-end w-full">
                <Link
                  href={"/contact-us#guide"}
                  className="underline text-[#0080FF]"
                >
                  Need help with this?
                </Link>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="Phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          variant={"default"}
          className="mt-6 w-fit"
          size={"lg"}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
