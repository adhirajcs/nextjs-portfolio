"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input, TextAreaInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { MdContentCopy } from "react-icons/md";

export default function ContactForm() {
  // State to handle form inputs and submission feedback
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false); // State for copy success

  // Handle form data change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the form data to the API route using axios
      const response = await axios.post("/api/contact", formData);

      if (response.data.error) {
        setFeedbackMessage("Failed to send feedback.");
      } else {
        setFeedbackMessage("Feedback sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setFeedbackMessage("Error occurred. Please try again.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle copy to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText("adhirajsaha24@gmail.com").then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset the success message after 2 seconds
    });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:px-8 shadow-input bg-white/80 dark:bg-slate-900/50">
      {/* Feedback message */}
      {feedbackMessage && (
        <p
          className={`text-sm ${
            feedbackMessage.includes("success")
              ? "text-green-600"
              : "text-red-600"
          } mb-4`}
        >
          {feedbackMessage}
        </p>
      )}

      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2> */}
      {/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Feel free to send me a message regarding any inquiries or collaborations.
      </p> */}
      <form onSubmit={handleSubmit}>
        {/* To input (non-editable) with copy button */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="to">To</Label>
          <div className="relative">
            <Input
              id="to"
              type="text"
              value="adhirajsaha24@gmail.com"
              readOnly
              className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 cursor-default pr-12"
            />
            <button
              type="button"
              onClick={handleCopy}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors ${
                copySuccess ? 'text-green-500' : 'text-gray-500 dark:text-gray-400'
              }`}
              title={copySuccess ? "Copied!" : "Copy email"}
            >
              <MdContentCopy size={18} />
            </button>
          </div>
        </LabelInputContainer>

        {/* Name input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* Email input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* Message input */}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextAreaInput
            id="message"
            placeholder="Write your message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        {/* Submit button */}
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-slate-800 dark:to-slate-800 to-neutral-600 block w-full text-white rounded-md h-10 font-medium"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"} &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
