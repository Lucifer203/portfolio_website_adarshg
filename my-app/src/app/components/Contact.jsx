import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName || formData.fullName.length < 2) {
      newErrors.fullName = "Name must be at least 2 characters long";
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSuccess(true);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          message: "",
        });
        setCharCount(0);
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <FaTwitter className="w-6 h-6" />,
      url: "https://twitter.com",
      label: "Twitter",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have a question or want to work together?
          </p>
        </div>

        <div className="  gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {isSuccess ? (
              <div className="text-center p-6 bg-green-100 rounded-lg">
                <p className="text-green-600 font-semibold">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby="fullName-error"
                  />
                  {errors.fullName && (
                    <p
                      id="fullName-error"
                      className="mt-1 text-sm text-red-600"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby="email-error"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    aria-describedby="message-error"
                  />
                  <div className="flex justify-between mt-1">
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                    <span className="text-sm text-gray-500">
                      {charCount}/500
                    </span>
                  </div>
                </div>

                <div className="items-center flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" bg-white border-2 border-[#31A3DC]  text-black py-2 px-4 rounded-md hover:bg-[#31A3DC] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
