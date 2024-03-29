import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_g00ymx6", "template_loculjn", form.current, {
        publicKey: "F97OhNRR-CZ3SWv6S",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          event.target.reset();
          toast.success('Message send successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(`Somthing wrong - ${error.text}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
        }
      );
  };

  return (
    <div data-aos="zoom-in" id="contact">
      <h1 className="mt-20 text-center text-3xl font-bold text-slate-700 mb-10">
        Contact
      </h1>
      <form ref={form} onSubmit={handleSubmit} className="text-center mb-16">
        <div className="flex items-center flex-col gap-y-2">
          <label htmlFor="name" className="text-slate-700 font-semibold">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name e.g."
            className="w-72 p-2 border bg-slate-100 rounded-lg"
            required
          />
        </div>
        <div className="flex items-center flex-col gap-y-2 my-6">
          <label htmlFor="email" className="text-slate-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email demo@gmail.com"
            className="w-72 p-2 border bg-slate-100 rounded-lg"
            required
          />
        </div>
        <div className="flex items-center flex-col gap-y-2">
          <label htmlFor="message" className="text-slate-700 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows="3"
            placeholder="Write your message...."
            className="w-72 p-2 border bg-slate-100 rounded-lg"
            required
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-gradient-to-r from-cyan-500 to-[#3e6ff4] px-6 py-2 rounded-lg text-white font-semibold md:mt-8 mt-8 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Contact;
