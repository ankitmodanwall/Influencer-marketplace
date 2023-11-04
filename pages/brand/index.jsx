import React from "react";

const index = () => {
  return (
    <div>
      <nav className="border-2 p-8">Navbar</nav>
      <div className="head-center text-center">
        <h1 className=" p-4 text-5xl font-bold leading-snug">
          Get your products to a <br /> different level
        </h1>
        <p className="p-2 pt-0 text-xl pb-5">
          Discover influential personalities, execute marketing campaigns, and
          generate distinctive <br /> content for your brand effortlessly.
        </p>
        <button className="btn border p-3 rounded-lg bg-slate-500 text-white hover:bg-slate-700">
          Get Started ...
        </button>
      </div>
    </div>
  );
};

export default index;
