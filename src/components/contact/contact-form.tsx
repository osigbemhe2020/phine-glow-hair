"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/buttin";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 mt-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  First Name
                </Label>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
              <div>
                <Label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  Last Name
                </Label>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  required
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
              <div>
                <Label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <Label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Any specific requests or information we should know..."
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-slate-600 hover:bg-slate-800 font-semibold py-4 px-8 rounded-md transition-colors duration-200 transform hover:scale-105"
              >
                {isSubmitting ? "Sending..." : "Contact Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
