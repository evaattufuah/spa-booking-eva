"use client"
import { useState } from 'react';
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { toast, Toaster } from 'react-hot-toast';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phoneNumber: z.string().min(11, {
        message: "Phone number must be at least 11 characters.",
    }),
    about: z.string().min(2, {
        message: "About section must be at least 2 characters.",
    }),
    appointmentDate: z.string().refine(date => {
        const parsedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return !isNaN(parsedDate.getTime()) && parsedDate >= today;
    }, {
        message: "Appointment date must be today or in the future.",
    }),
});

export function ContactForm() {
    const [isFormVisible, setFormVisible] = useState(false);
    const [appointmentDate, setAppointmentDate] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            about: "",
            appointmentDate: ""
        },
    });

    function handleDateChange(event) {
        const date = event.target.value;
        setAppointmentDate(date);
        const parsedDate = new Date(date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (!isNaN(parsedDate.getTime()) && parsedDate >= today) {
            setFormVisible(true);
        } else {
            setFormVisible(false);
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);

        emailjs
            .sendForm(
                "service_9ajquz6",  // for service
                "template_yzjk79p",  // template My Default Template
                "#my-form",         // id
                "6g4vhpanhu-7hZExh"   // template API keys Public Key

            )
            .then((response) => {
                console.log("Email sent successfully:", response);
                toast.success('Form submitted successfully');
                form.reset();
                setFormVisible(false); // Reset form visibility after submission
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                toast.error('Form submission failed');
            });
    }

    return (
        <div className="container mr-auto w-full ">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} id="my-form" className="space-y-4">
                    <FormField
                        control={form.control}
                        name="appointmentDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-white">Appointment Date</FormLabel>
                                <FormControl>
                                    <Input
                                        type="date"
                                        placeholder="Appointment Date"
                                        {...field}
                                        value={appointmentDate}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleDateChange(e);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {isFormVisible && (
                        <>
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last Name" {...field} />
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
                                        <FormLabel className="text-white">Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email Address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Phone Number" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="about"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-white">About</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Text Message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <button type="submit" className=" text-white mt-7 w-fit tracking-wide border border-gray-50 transition ease-in-out delay-150 bg-black font-bold shadow-lg shadow-indigo-500/40 p-5 rounded-2xl pr-10 text-center  hover:-translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 ...">
                                Submit
                            </button>
                        </>
                    )}
                </form>
            </Form>
            <Toaster position="top-right" />
        </div>
    )
}
