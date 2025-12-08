import React from "react";
import imgBrowse from "../assets/hustlehowitworks1.png";
import imgApply from "../assets/hustlehowitworks2.png";
import imgHustle from "../assets/works3.png";

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-20 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">How it works</h2>
      <p className="text-gray-300 max-w-2xl mx-auto text-center">
        Find gigs, apply, and build real experience — made for students.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="bg-[#0F1724] p-6 rounded-lg text-center">
          <img
            src={imgBrowse}
            alt="browse"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded"
          />
          <h3 className="font-semibold mb-2">Browse</h3>
          <p className="text-sm text-gray-300">Explore campus gigs near you.</p>
        </div>

        <div className="bg-[#0F1724] p-6 rounded-lg text-center">
          <img
            src={imgApply}
            alt="apply"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded"
          />
          <h3 className="font-semibold mb-2">Apply</h3>
          <p className="text-sm text-gray-300">Submit your skills and connect.</p>
        </div>

        <div className="bg-[#0F1724] p-6 rounded-lg text-center">
          <img
            src={imgHustle}
            alt="hustle"
            className="mx-auto mb-4 w-24 h-24 object-cover rounded"
          />
          <h3 className="font-semibold mb-2">Hustle</h3>
          <p className="text-sm text-gray-300">Complete gigs and get paid.</p>
        </div>
      </div>
    </section>
  );
}
