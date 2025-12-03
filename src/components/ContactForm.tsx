"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const productOptions = [
  {
    label: "Dry Shipping Containers",
    options: [
      { value: "20ft-container-sale-hire", label: "20ft Container Sale/Hire" },
      {
        value: "40ft-highcube-container-sale-hire",
        label: "40ft Highcube Container Sale/Hire",
      },
      { value: "20ft-storage-container", label: "20ft Storage Container" },
      { value: "40ft-storage-container", label: "40ft Storage Container" },
      { value: "40ft-flat-rack", label: "40ft Flat Rack" },
      { value: "20ft-open-top-container", label: "20ft Open Top Container" },
      { value: "40ft-open-top-container", label: "40ft Open Top Container" },
    ],
  },
  {
    label: "Container Homes",
    options: [
      { value: "20ft-bedsitter", label: "20ft Bedsitter" },
      { value: "40ft-1-bedroom", label: "40ft 1 Bedroom" },
      {
        value: "2-bedroom-container-house",
        label: "2 Bedroom Container House",
      },
      {
        value: "3-bedroom-container-house",
        label: "3 Bedroom Container House",
      },
      {
        value: "4-bedroom-container-house",
        label: "4 Bedroom Container House",
      },
    ],
  },
  {
    label: "Container Offices & Specialized",
    options: [
      { value: "20ft-container-office", label: "20ft Container Office" },
      { value: "40ft-container-office", label: "40ft Container Office" },
      {
        value: "20ft-container-classroom",
        label: "20ft Container Classroom",
      },
      {
        value: "40ft-container-classroom",
        label: "40ft Container Classroom",
      },
      { value: "container-school", label: "Container School" },
      { value: "container-display-unit", label: "Container Display Unit" },
      {
        value: "20ft-laboratory-container",
        label: "20ft Laboratory Container",
      },
      {
        value: "40ft-laboratory-container",
        label: "40ft Laboratory Container",
      },
      { value: "20ft-container-clinic", label: "20ft Container Clinic" },
      { value: "40ft-container-clinic", label: "40ft Container Clinic" },
    ],
  },
  {
    label: "Container Stalls",
    options: [
      {
        value: "20ft-container-stalls-shops",
        label: "20ft Container Stalls/Shops",
      },
      {
        value: "40ft-container-stalls-shops",
        label: "40ft Container Stalls/Shops",
      },
      {
        value: "20ft-container-with-shelves",
        label: "20ft Container With Shelves",
      },
      {
        value: "40ft-container-with-shelves",
        label: "40ft Container With Shelves",
      },
    ],
  },
  {
    label: "Refrigerated Containers",
    options: [
      {
        value: "20ft-refrigerated-reefer-container-sale-hire",
        label: "20ft Refrigerated (Reefer) Container Sale/Hire",
      },
      {
        value: "40ft-refrigerated-reefer-container-sale-hire",
        label: "40ft Refrigerated (Reefer) Container Sale/Hire",
      },
    ],
  },
  {
    label: "Specialized Containers",
    options: [
      { value: "ablution-containers", label: "Ablution Containers" },
      { value: "tanktainers", label: "Tanktainers" },
    ],
  },
];

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  product: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      product: "",
      message: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    const recipientEmail = "info@globalkenyacontainers.com"; // Your company's email
    const subject = encodeURIComponent(values.subject);

    let body = `Name: ${values.name}\n`;
    body += `Email: ${values.email}\n`;
    body += `Subject: ${values.subject}\n`;
    if (values.product) {
      body += `Product of Interest: ${values.product}\n`;
    }
    body += `Message: ${values.message}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Since mailto doesn't provide direct feedback,
    // we'll provide a toast to inform the user what happened.
    toast.info("Your email client should open with a pre-filled message.");
    form.reset();
    setIsSubmitting(false); // Reset submitting state
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                <FormLabel>Your Email</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Container Inquiry" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product of Interest (Optional)</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {productOptions.map((group) => (
                    <SelectGroup key={group.label}>
                      <h3 className="font-medium text-sm px-2 py-1.5">{group.label}</h3>
                      {group.options.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your project..."
                  className="resize-none"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Send Message
        </Button>
      </form>
    </Form>
  );
}
