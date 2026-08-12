"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiCheckCircle, FiMail, FiSend } from "react-icons/fi";
import SocialLinks from "./SocialLinks";

// EmailJS values are loaded from the root .env file.
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;

const initialFormData = {
  from_name: "",
  reply_to: "",
  subject: "",
  message: "",
};

const defaultStatus = {
  type: "idle",
  message: "",
};

// tempory added code
const handleSubmit = (e) => {
  e.preventDefault();

  console.log("EmailJS config:", {
    serviceId: import.meta.env.EMAILJS_SERVICE_ID,
    templateId: import.meta.env.EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.EMAILJS_PUBLIC_KEY,
  });

  // your existing EmailJS code...
};

// Provides an EmailJS-powered contact form with custom validation.
function Contact() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(defaultStatus);

  const emailJsIsConfigured = Boolean(
    EMAILJS_SERVICE_ID &&
    EMAILJS_TEMPLATE_ID &&
    EMAILJS_PUBLIC_KEY,
  );

  // Checks an individual form field.
  const validateField = (name, value) => {
    const cleanValue = value.trim();

    if (!cleanValue) {
      return "This field is required.";
    }

    if (name === "reply_to") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(cleanValue)) {
        return "Please enter a valid email address.";
      }
    }

    return "";
  };

  // Updates the input value and removes its error when corrected.
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));

    if (fieldErrors[name]) {
      setFieldErrors((currentErrors) => ({
        ...currentErrors,
        [name]: validateField(name, value),
      }));
    }
  };

  // Validates a field when the user leaves it.
  const handleBlur = (event) => {
    const { name, value } = event.target;

    setFieldErrors((currentErrors) => ({
      ...currentErrors,
      [name]: validateField(name, value),
    }));
  };

  // Returns red styles when a field contains an error.
  const getFieldClasses = (fieldName) =>
    [
      "focus-ring w-full rounded-xl border px-4 py-3.5",
      "text-sm text-slate-950 placeholder:text-slate-400",
      "transition-colors duration-200",
      fieldErrors[fieldName]
        ? [
          "border-red-500 bg-red-50",
          "focus:border-red-500 focus:bg-white",
          "focus-visible:ring-red-200",
        ].join(" ")
        : [
          "border-slate-200 bg-slate-50",
          "focus:border-violet-500 focus:bg-white",
        ].join(" "),
    ].join(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus(defaultStatus);

    const validationErrors = {};

    Object.entries(formData).forEach(([name, value]) => {
      const errorMessage = validateField(name, value);

      if (errorMessage) {
        validationErrors[name] = errorMessage;
      }
    });

    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fill in all required fields correctly.",
      });

      return;
    }

    if (!emailJsIsConfigured) {
      setStatus({
        type: "error",
        message: "Add your EmailJS values inside the .env file first.",
      });

      return;
    }

    try {
      setIsSending(true);

      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setFormData(initialFormData);
      setFieldErrors({});

      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully.",
      });
    } catch (error) {
      console.error("EmailJS send error:", error);

      setStatus({
        type: "error",
        message: "The message could not be sent. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-spacing relative overflow-hidden bg-white"
    >
      <div
        className={[
          "absolute -left-32 bottom-0 size-80 rounded-full",
          "bg-violet-100/70 blur-3xl",
        ].join(" ")}
        aria-hidden="true"
      />

      <div
        className={[
          "absolute -right-32 top-0 size-80 rounded-full",
          "bg-blue-100/70 blur-3xl",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <div
          className={[
            "overflow-hidden rounded-[2rem] bg-slate-950",
            "shadow-2xl shadow-violet-200/40",
          ].join(" ")}
        >
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact information */}
            <div className="relative overflow-hidden p-7 text-white sm:p-10 lg:p-12">
              <div
                className={[
                  "absolute -right-20 -top-20 size-64 rounded-full",
                  "bg-violet-600/30 blur-3xl",
                ].join(" ")}
                aria-hidden="true"
              />

              <div className="relative">
                <p
                  className={[
                    "text-sm font-bold uppercase",
                    "tracking-[0.18em] text-violet-400",
                  ].join(" ")}
                >
                  Start a conversation
                </p>

                <h2
                  className={[
                    "mt-4 text-3xl font-black tracking-tight",
                    "sm:text-4xl lg:text-5xl",
                  ].join(" ")}
                >
                  Let&apos;s build something useful together.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  Tell us what you want to create, improve, or launch.
                  We&apos;ll respond with clear next steps.
                </p>

                <div
                  className={[
                    "mt-9 rounded-2xl border border-white/10",
                    "bg-white/5 p-5",
                  ].join(" ")}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={[
                        "grid size-11 shrink-0 place-items-center",
                        "rounded-xl bg-violet-500/20 text-violet-300",
                      ].join(" ")}
                    >
                      <FiMail size={20} aria-hidden="true" />
                    </span>

                    <div>
                      <p className="text-sm font-bold text-white">
                        Contact by email
                      </p>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Complete the form and your message will arrive directly
                        in our inbox.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-9">
                  <p
                    className={[
                      "mb-4 text-xs font-bold uppercase",
                      "tracking-[0.16em] text-slate-500",
                    ].join(" ")}
                  >
                    Find us online
                  </p>

                  <SocialLinks theme="dark" />
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-white p-7 sm:p-10 lg:p-12">
              <p
                className={[
                  "text-sm font-bold uppercase",
                  "tracking-[0.16em] text-violet-700",
                ].join(" ")}
              >
                Project inquiry
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Tell us about your idea.
              </h3>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Name{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="name"
                    name="from_name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.from_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    aria-invalid={Boolean(fieldErrors.from_name)}
                    aria-describedby={
                      fieldErrors.from_name ? "name-error" : undefined
                    }
                    className={getFieldClasses("from_name")}
                  />

                  {fieldErrors.from_name && (
                    <p
                      id="name-error"
                      className="mt-1.5 text-xs font-semibold text-red-600"
                    >
                      {fieldErrors.from_name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Email{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="email"
                    name="reply_to"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.reply_to}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(fieldErrors.reply_to)}
                    aria-describedby={
                      fieldErrors.reply_to ? "email-error" : undefined
                    }
                    className={getFieldClasses("reply_to")}
                  />

                  {fieldErrors.reply_to && (
                    <p
                      id="email-error"
                      className="mt-1.5 text-xs font-semibold text-red-600"
                    >
                      {fieldErrors.reply_to}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Subject{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="For example: Landing page development"
                    aria-invalid={Boolean(fieldErrors.subject)}
                    aria-describedby={
                      fieldErrors.subject ? "subject-error" : undefined
                    }
                    className={getFieldClasses("subject")}
                  />

                  {fieldErrors.subject && (
                    <p
                      id="subject-error"
                      className="mt-1.5 text-xs font-semibold text-red-600"
                    >
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    Message{" "}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="What do you want to build?"
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={
                      fieldErrors.message ? "message-error" : undefined
                    }
                    className={`${getFieldClasses("message")} resize-y`}
                  />

                  {fieldErrors.message && (
                    <p
                      id="message-error"
                      className="mt-1.5 text-xs font-semibold text-red-600"
                    >
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={[
                    "focus-ring group inline-flex w-full items-center",
                    "justify-center gap-3 rounded-xl px-5 py-4",
                    "bg-violet-600 font-extrabold text-white",
                    "shadow-lg shadow-violet-200",
                    "transition-all duration-300",
                    "hover:-translate-y-0.5 hover:bg-blue-600",
                    "disabled:cursor-not-allowed disabled:opacity-60",
                  ].join(" ")}
                >
                  {isSending ? "Sending..." : "Send Message"}

                  <FiSend
                    className={[
                      "transition-transform duration-300",
                      "group-hover:translate-x-1",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                </button>

                <div aria-live="polite" className="min-h-7">
                  {status.message && (
                    <p
                      className={[
                        "flex items-start gap-2 rounded-xl",
                        "px-4 py-3 text-sm font-semibold",
                        status.type === "success"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-700",
                      ].join(" ")}
                    >
                      {status.type === "success" && (
                        <FiCheckCircle
                          className="mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      )}

                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;