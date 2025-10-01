"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/buttin";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type BookingFormData ={
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Booking submitted:", formData);
    alert("Appointment booked successfully! We'll confirm within 24 hours.");

    // Reset form
    setFormData({
      firstName: "",
      surname: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
    });

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-600 px-6 shadow-xl flex flex-col items-center justify-center max-w-[350px] md:mx-5 mx-auto">
      <h3 className="text-white text-2xl font-light text-center mb-4 max-w-[200px] mx-auto mt-10 tracking-tight">
        BOOK AN APPOINTMENT
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-start w-full"
      >
        <div className="flex flex-row gap-2 items-start max-w-2xs md:max-w-[350px] w-full">
          <Input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-gray-300 bg-gray-50 outline-0"
          />
          <Input
            type="text"
            placeholder="Surname"
            value={formData.surname}
            onChange={(e) => handleInputChange("surname", e.target.value)}
            required
            className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-gray-300 bg-gray-50 outline-0"
          />
        </div>

        <div className="flex flex-col gap-3 w-full">
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
            className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-gray-300 bg-gray-50 outline-0"
          />

          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
            className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-gray-300 bg-gray-50 outline-0"
          />

          <Input
            type="date"
            value={formData.date}
            onChange={(e) => handleInputChange("date", e.target.value)}
            required
            className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-gray-300 bg-gray-50 outline-0"
          />

          <Select
            value={formData.time}
            onValueChange={(value) => handleInputChange("time", value)}
            required
          >
            <SelectTrigger className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:outline-gray-300 bg-gray-50 outline-0">
              <SelectValue placeholder="Select Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="09:00">9:00 AM</SelectItem>
              <SelectItem value="10:00">10:00 AM</SelectItem>
              <SelectItem value="11:00">11:00 AM</SelectItem>
              <SelectItem value="12:00">12:00 PM</SelectItem>
              <SelectItem value="13:00">1:00 PM</SelectItem>
              <SelectItem value="14:00">2:00 PM</SelectItem>
              <SelectItem value="15:00">3:00 PM</SelectItem>
              <SelectItem value="16:00">4:00 PM</SelectItem>
              <SelectItem value="17:00">5:00 PM</SelectItem>
            </SelectContent>
          </Select>

          <Select
            value={formData.service}
            onValueChange={(value) => handleInputChange("service", value)}
            required
          >
            <SelectTrigger className="rounded-sm border-0 focus:ring-1 focus:ring-slate-800 w-full placeholder:text-xs md:placeholder:text-sm font-mono text-sm px-4 py-2 border-gray-300 shadow-sm transition duration-300 ease-in-out transform focus:outline-gray-300 bg-gray-50 outline-0">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hair-color">Hair Color</SelectItem>
              <SelectItem value="highlights">Highlights</SelectItem>
              <SelectItem value="balayage">Balayage</SelectItem>
              <SelectItem value="cut-color">Cut & Color</SelectItem>
              <SelectItem value="consultation">Color Consultation</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-gray-500 rounded-md group mx-auto w-[80%] mt-4 hover:bg-gray-600"
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-gray-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-gray-600 rounded-md group-hover:translate-x-0"></span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="23px"
            viewBox="0 -960 960 960"
            width="23px"
            fill="#ffffff"
          >
            <path d="M438-226 296-368l58-58 84 84 168-168 58 58-226 226ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
          </svg>

          <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            {isSubmitting ? "Booking..." : "Book Appointment"}
          </span>
        </Button>
      </form>

      {/* Additional Info Tooltip */}
      <div className="relative inline-block group mt-3 pb-3">
        <button
          type="button"
          className="relative px-4 py-2 text-sm font-semibold text-white bg-slate-600/90 rounded-xl hover:bg-gray-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity"></div>
          <span className="relative flex items-center gap-2">
            <svg
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              className="w-4 h-4"
            >
              <path
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </span>
        </button>

        <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
          <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 text-indigo-400"
                >
                  <path
                    clipRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white">
                Important Information
              </h3>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-300">
                {"We'll confirm your appointment within 24 hours."}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#FFFFFF"
                >
                  <path d="M444-384v-336h72v336h-72Zm0 144v-72h72v72h-72Z" />
                </svg>
                <span>For same-day appointments, please call us directly</span>
              </div>
            </div>

            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
