'use client';

import React, { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { MakeWebContact } from "@/lib/graphql/mutations";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    toast.loading("Submitting Form", { duration: 3000 });

    try {
      await MakeWebContact(data);
      toast.success(
        "Successfully submitted form, I will be contacting you soon!",
        { duration: 4000 }
      );

      // WhatsApp prefill logic
      const phoneNumber = "256770773552";
      const message = `Hello Calvin, my name is ${data.name}. ${data.message} (Email: ${data.email})`;
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.log(error);
      toast.error("Form Submission Failed, please try again", {
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url(" + "/main-bg.png" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center justify-center w-full md:min-h-screen p-8 text-white"
    >
      <div className="max-w-2xl w-full">
        <h1 className="mb-5 text-4xl font-bold text-center">Contact Me</h1>

        <div className="flex items-center justify-center mb-8 space-x-4 text-lg">
          <a
            href="https://www.facebook.com/profile.php?id=100073695104661"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook className="socialIcon" />
          </a>
          <a
            href="https://www.instagram.com/calvinmagezi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className="socialIcon" />
          </a>
          <a
            href="https://twitter.com/CalvinMagezi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="socialIcon" />
          </a>
          <a
            href="https://github.com/CalvinMagezi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="socialIcon" />
          </a>
          <a
            href="https://www.linkedin.com/in/calvin-magezi-639a53228/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="socialIcon" />
          </a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center w-full h-64 bg-white/10 rounded-lg">
              <p className="text-xl font-bold">Submitted Successfully!</p>
              <p>Thank you for reaching out. I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20 text-white placeholder-gray-300"
                  placeholder="Your name"
                  {...register("name", {
                    required: "This is required",
                  })}
                />
                {errors.name && (
                  <p className="text-red-300 mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20 text-white placeholder-gray-300"
                  placeholder="your.email@example.com"
                  {...register("email", {
                    required: "This is required",
                  })}
                />
                {errors.email && (
                  <p className="text-red-300 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white/20 text-white placeholder-gray-300"
                  placeholder="Your message..."
                  {...register("message", {
                    required: "This is required",
                  })}
                />
                {errors.message && (
                  <p className="text-red-300 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <div className="flex items-center justify-center my-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}