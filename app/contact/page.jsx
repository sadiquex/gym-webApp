import PageHeader from "../components/ui/PageHeader";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import Button from "../components/ui/Button";

export default function page() {
  const socialIcons = [
    <FaInstagramSquare />,
    <FaTwitter />,
    <FaPinterest />,
    <FaFacebook />,
  ];

  return (
    <div>
      <PageHeader pageTitle="Contact Us" />
      <div className="max-w-[1000px] mx-auto p-4 md:p-0 mt-6 flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="flex-1 flex flex-col gap-8 p-4 md:p-6">
          <h2 className="text-4xl font-bold">
            We are here for help you! To Shape Your Body.
          </h2>
          <p className="text-md text-darkAsh">
            At Gymate, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          {/* 4 cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4">
            <div className="">
              {/* location */}
              <h3 className="text-xl font-bold">Labone, Accra - Ghana</h3>
              <p className="text-darkAsh text-md">
                85 Briston Mint Street, <br /> London, E1 8LG, USA
              </p>
            </div>
            {/* opening hours */}
            <div className="">
              <h3 className="text-xl font-bold">Opening Hours</h3>
              <p className="text-darkAsh text-md whitespace-nowrap">
                Mon to Fri: 7:30 am — 1:00 am
                <br />
                Mon to Fri: 7:30 am — 1:00 am
              </p>
            </div>
            {/* contacts */}
            <div className="">
              <h3 className="text-xl font-bold">Information</h3>
              <p className="text-darkAsh text-md">
                +233 24 244 6461
                <br />
                abubakasaddik1@gmail.com
              </p>
            </div>
            {/* social media */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Us On</h3>
              <div className="flex gap-2">
                {socialIcons.map((icon, i) => (
                  <span
                    className="rounded-full bg-gray-200 p-3 text-xl hover:bg-primaryColor hover:text-white cursor-pointer"
                    key={i}
                  >
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 flex-1 flex flex-col gap-8 p-6">
          <h3 className="text-2xl font-bold">Leave Us Your Info</h3>
          {/* input fields */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="p-4 bg-white"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="p-4 bg-white"
              placeholder="Email Address"
            />
            <select name="Select Class" id="" className="p-4 bg-white">
              <option value="Body Building">Body Building</option>
              <option value="Boxing">Boxing</option>
              <option value="Fitness">Fitness</option>
              <option value="Running">Running</option>
            </select>
            <textarea
              type="text"
              className="p-4 bg-white"
              placeholder="Comment"
            />
          </div>
          <button className="bg-primaryColor text-white font-bold whitespace-nowrap py-4 px-8 cursor-pointer">
            SUBMIT
          </button>
        </div>
      </div>

      {/* put map here */}
      <div className="py-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.6260049492485!2d-0.17592502652318784!3d5.62210563298455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sgh!4v1708458631064!5m2!1sen!2sgh"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
