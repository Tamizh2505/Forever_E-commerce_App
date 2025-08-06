import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md-w[2/4] text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revalutionize the way people shop online.Our journery begin with
            simple idea: to provide a platform with customer can easily
            discover,explore,and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inspection,we've worked tirelessly to curate a diverse
            selection of high-qulatiy product that caters every taste and
            preference.From fashion and beauty to electronics and home
            essentials,We offer an extensive collection sourced from trusted
            brands and suppliers
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customer with
            choice,convenience,and confidence.We're decided to providing a
            seamless shopping experience that exceeds expectation,from browsing
            and ordering to delivery and byond.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" US"} />
      </div>
      <div className="flex flec-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality assurance:</b>
          <p>
            We meticulously select and verified every product to ensure it meets
            our stringent our quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p>
            Without user-friendly interface and hassle free ordering
            process,Shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Cutomer Service:</b>
          <p>
            Our team of dedicated professionals is here to assit you the
            way,ensuring your satisfaction is our top priority.{" "}
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
