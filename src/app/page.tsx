import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTooth,
  FaSmile,
  FaMagic,
  FaCrown,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white text-gray-800">
      <section className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">
          Welcome to Aanannya Dental Care
        </h2>
        <p className="text-lg leading-relaxed">
          We provide high-quality dental care in a comfortable and friendly
          environment. Our team of experienced dentists is committed to ensuring
          your oral health and giving you a beautiful smile.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: FaTooth, text: "General Dentistry" },
            { icon: FaSmile, text: "Cosmetic Dentistry" },
            { icon: FaMagic, text: "Teeth Whitening" },
            { icon: FaCrown, text: "Dental Implants" },
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 bg-blue-50 rounded-md"
            >
              <service.icon className="text-3xl text-blue-500" />
              <span className="text-lg">{service.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">
          Contact Us
        </h2>
        <div className="space-y-4">
          <p className="flex items-center">
            <FaPhone className="mr-4 text-blue-500" /> (123) 456-7890
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-4 text-blue-500" />{" "}
            info@smilebrightdental.com
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-4 text-blue-500" /> 123 Main St,
            Anytown, USA 12345
          </p>
        </div>
      </section>
    </main>
  );
}
