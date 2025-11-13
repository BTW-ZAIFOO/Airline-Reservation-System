import React from "react";

const testimonialsData = [
  {
    name: "John Doe",
    role: "Frequent Traveler",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    message:
      "Booking flights has never been easier! The process is fast, reliable, and stress-free.",
  },
  {
    name: "Jane Smith",
    role: "Business Traveler",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    message:
      "I love the global destinations and 24/7 support. This airline makes my business trips smooth.",
  },
  {
    name: "Michael Lee",
    role: "Vacation Planner",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    message:
      "Amazing booking experience and great customer service. Highly recommended for family trips!",
  },
  {
    name: "Kane Wilson",
    role: "Adventure Seeker",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    message:
      "The variety of destinations is incredible! I was able to explore new places with ease thanks to their seamless booking system.",
  },
  {
    name: "Emily Davis",
    role: "Frequent Flyer",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    message:
      "Their fast and reliable flight services have made my travels so much more enjoyable. Highly recommend!",
  },
  {
    name: "Quinn Taylor",
    role: "Business Executive",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    message:
      "The 24/7 support team is fantastic! They assisted me promptly during a last-minute change to my itinerary.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from travelers who have experienced seamless journeys with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <p className="text-gray-500 mb-4">{testimonial.role}</p>
              <p className="text-gray-600 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
