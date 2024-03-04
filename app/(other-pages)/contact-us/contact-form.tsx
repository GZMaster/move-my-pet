"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
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
import { useEffect, useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { countriesName } from "@/lib/countries";
const formSchema = z.object({
  pet_specie: z.string(),
  pet_breed: z.string(),
  pet_sex: z.string(),
  pet_weight: z.string(),
  crate_length: z.string().refine(
    (value) => {
      const regex = /^(?:25[0-0]|2[0-4][0-9]|[01]?[0-9][0-9]?)cm$/;
      return regex.test(value);
    },
    {
      message: "Length must be between 0-250cm",
    }
  ),
  crate_width: z.string().refine(
    (value) => {
      const regex = /^(?:25[0-0]|2[0-4][0-9]|[01]?[0-9][0-9]?)cm$/;
      return regex.test(value);
    },
    {
      message: "Width must be between 0-250cm",
    }
  ),
  crate_height: z.string().refine(
    (value) => {
      const regex = /^(?:25[0-0]|2[0-4][0-9]|[01]?[0-9][0-9]?)cm$/;
      return regex.test(value);
    },
    {
      message: "Height must be between 0-250cm",
    }
  ),
  origin: z.string(),
  destination: z.string(),

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
  const [loading, setLoading] = useState(false);
  useEffect(() => emailjs.init("abd7sfjbffyKSFQl6"), []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      pet_specie: "",
      pet_breed: "",
      pet_sex: "",
      pet_weight: "",
      crate_height: "",
      crate_width: "",
      crate_length: "",
      origin: "",
      destination: "",
      first_name: "",
      last_name: "",
      Phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const serviceId = "service_28o7sr6";
    const templateId = "template_44ek3pa";
    setLoading(true);
    emailjs
      .send(serviceId, templateId, {
        pet_specie: values.pet_specie,
        pet_breed: values.pet_breed,
        pet_sex: values.pet_sex,
        pet_weight: values.pet_weight,
        crate_height: values.crate_height,
        crate_width: values.crate_width,
        crate_length: values.crate_length,
        origin: values.origin,
        destination: values.destination,
        first_name: values.first_name,
        last_name: values.last_name,
        phone: values.Phone,
        email: values.email,
        message: values.message,
      })
      .then((response) => {
        console.log(response);
        toast({
          title: "Request Successfully Sent",
          description: "Our Team will respond to you shortly",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast({
          title: "Something went wrong",
          description: "Email Unsuccessful",
          variant: "destructive",
        });
        setLoading(false);
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4 border-2 border-black/20  p-4 shadow sm:w-2/3 md:gap-6 md:p-8 lg:w-[500px]"
      >
        <h2 className="font-heading text-lg">Pet Information</h2>
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
          name="pet_weight"
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
        <div className="flex items-baseline gap-3 ">
          <FormField
            control={form.control}
            name="origin"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>From</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your Airport" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="abuja">Abuja</SelectItem>
                    <SelectItem value="lagos">Lagos</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destination"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>To</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countriesName.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex gap-3 items-baseline">
          <FormField
            control={form.control}
            name="crate_length"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crate Length</FormLabel>
                <FormControl>
                  <Input placeholder="0 - 250cm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="crate_width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crate Width</FormLabel>
                <FormControl>
                  <Input placeholder="0 - 250cm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="crate_height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crate Height</FormLabel>
                <FormControl>
                  <Input placeholder="0 - 250cm" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormDescription className="flex justify-end w-full">
          <Link href={"/contact-us#guide"} className="underline text-[#0080FF]">
            Need help with this?
          </Link>
        </FormDescription>

        <h2 className="font-heading text-lg">Contact Information</h2>
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
          disabled={loading}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
