import React from "react";
import LayoutSection from "../Shared/LayoutSection";

const Contact = () => {
  return (
    <LayoutSection
      title="Contact"
      id="contact"
      sectionClass="my-36"
      titleClass="flex justify-center"
    >
      <article className="flex flex-col my-10 items-center">
        <div>
          <form action="">
            <div>
              <label
                htmlFor="firstName"
                className="block font-medium text-white text-xl"
              >
                First Name
              </label>
              <div className="mt-1 flex flex-col items-center">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="Adriano"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="lastName"
                className="block font-medium text-white text-xl"
              >
                Last Name
              </label>
              <div className="mt-1 flex flex-col items-center">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="Cervera"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="email"
                className="block text-white text-xl font-medium"
              >
                Email
              </label>
              <div className="mt-1 flex flex-col items-center">
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="adri.cervera@gmail.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-white text-xl font-medium "
              >
                Message
              </label>
              <div className="mt-1 flex flex-col items-center">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md h-8 w-72"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button
                type="submit"
                className="py-2 px-4 border border-transparent font-medium rounded-md text-white bg-slate-600 hover:bg-gradient-to-r from-purple-300 via-pink-300 to-orange-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </article>
    </LayoutSection>
  );
};

export default Contact;