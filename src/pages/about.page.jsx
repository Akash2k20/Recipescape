import React from "react";
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#090D0C] via-[#0A1312] to-[#0E2020] min-h-screen ">
      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-white lg:text-7xl text-5xl m-3">Recipescape</h1>
        <h3 className="text-white m-3">All rights reserved ®</h3>
        <h4 className="text-white m-3 font-semibold">About Project: </h4>
        <div className="px-8 flex flex-col items-center justify-center">
          <p className="text-white text-center m-6">
            Social media has revolutionized the way chefs connect with their
            audience and promote their craft. Platforms like Instagram,
            Facebook, and Twitter have provided chefs with a powerful tool to
            showcase their culinary skills.
          </p>
          <p className="text-white text-center m-6">
            For chefs, social media is more than just a way to share photos of
            their dishes. It's an opportunity to tell their story, share their
            passion for cooking, and connect with their audience on a personal
            level. By sharing behind-the-scenes glimpses of their kitchen, their
            creative process, and their culinary inspiration, chefs can
            cultivate a loyal following and build a community of food lovers.
          </p>
          <p className="text-white text-2xl font-semibold text-center m-6">
            One of the most powerful ways chefs can use social media is by
            sharing their recipes.
          </p>
          <p className="text-white text-center m-6">
            They can reach a wider audience and inspire home cooks to try their
            recipes.
          </p>
          <p className="text-white text-center m-6">
            This can also be a great way to promote their restaurant or catering
            business by showcasing the dishes they serve. Social media also
            provides chefs with a platform to showcase their creativity.
          </p>
          <p className="text-white text-center m-6">
            To continue into recipescape, <br />
            <Link to="/login" className="m-1 underline">Login</Link>
            or
            <Link to="/signup" className="m-1 underline">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
