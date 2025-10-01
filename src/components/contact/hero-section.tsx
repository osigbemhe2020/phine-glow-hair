import { BookingForm } from "./booking-form";

export function HeroSection() {
  return (
    <section
      id="appointment"
      className="bg-gradient-to-br from-gray-500 to-gray-200 pb-7"
    >
      <div className="flex md:flex-row flex-col container justify-between max-w-7xl items-center">
        {/* Left Side - Image and Text */}
        <div className="flex items-center justify-center p-6 max-w-2xl md:ml-10">
          <div className="mx-auto text-center">
            <h1 className="text-3xl tracking-tight md:text-7xl font-bold text-gray-800 md:mb-6 font-sans md:text-left text-center">
              Welcome to phine Glows hair
            </h1>
            <p className="md:text-left text-sm md:text-2xl text-gray-700 md:pb-15 mb-8 font-sans mt-4 md:pl-4">
              what service do you need?
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center text-lg md:text-4xl text-white font-light md:translate-x-5 md:hover:translate-x-9 md:hover:translate-y-0 hover:translate-y-3 transition-transform duration-300">
              <span className="self-center align-middle justify-self-center">
                Book an appointment with us now
              </span>
              <svg
                className="w-10 h-10 ml-3 mt-3 hidden md:block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <BookingForm />
      </div>
    </section>
  );
}
