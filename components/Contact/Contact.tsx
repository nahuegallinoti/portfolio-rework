import axios from "axios";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import LayoutSection from "../Shared/LayoutSection";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  //declaramos el email como un state porque queremos controlar el input
  //los demas valores se mapean con el atributo name del input
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    //hay que setear a mano los input controlados
    formData.set("email", email);

    //transforma elementos del form en objeto json
    const objectData = Object.fromEntries(formData);

    axios
      .post("http://localhost:3000/api/contact/contact", objectData)
      .then(async (res) => {
        toast("✅ Email Sent!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        console.log(await res.data);
      })
      .catch((err) => {
        toast("❌ Email Fail!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        console.log(err);
      });
  };

  return (
    <LayoutSection
      title="Contact"
      id="contact"
      sectionClass="my-36"
      titleClass="flex justify-center"
    >
      <article className="flex flex-col my-10 items-center">
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="font-medium text-white text-xl"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="placeholder: p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="Adriano"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="lastName"
                className="font-medium text-white text-xl"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="placeholder: p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="Cervera"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="email" className="text-white text-xl font-medium">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  className="placeholder: p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md h-8 w-72"
                  placeholder="adri.cervera@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className=" text-white text-xl font-medium "
              >
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="placeholder: p-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md h-8 w-72"
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </article>
    </LayoutSection>
  );
};

export default Contact;
