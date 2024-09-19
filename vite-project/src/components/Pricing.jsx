/*import React, { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      title: "Micro",
      description: "All the basics for your micro business",
      monthlyPrice: "₹49",
      annualPrice: "₹42",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "15 GB storage",
        "Email Support",
      ],
    },
    {
      title: "Small",
      description: "Scale effectively your small business",
      monthlyPrice: "₹99",
      annualPrice: "₹83",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "30 GB storage",
        "Email and Voice Support",
      ],
    },
    {
      title: "Medium",
      description: "Maximize your medium-sized business",
      monthlyPrice: "₹149",
      annualPrice: "₹125",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "45 GB storage",
        "Email and Voice Support",
      ],
    },
    {
      title: "Enterprise",
      description: "Excellence at your enterprise business",
      monthlyPrice: "₹199",
      annualPrice: "₹167",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "75 GB storage",
        "Email and Voice Support",
      ],
    },
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly");
  };

  return (
    <section id="pricing" className="pricing-table bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-indigo-700">Pricing</h3>
          <h2 className="text-4xl font-semibold mt-2">Pricing Plan</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Designed for industry segments like yours with a focus on technology,
            innovation, and subject matter expertise to benefit long-term values
            and drive economic growth.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-gray-500">Month</span>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={billingCycle === "annually"}
              onChange={toggleBillingCycle}
            />
            <span className="relative w-12 h-6 bg-gray-300 rounded-full">
              <span
                className={`${
                  billingCycle === "monthly"
                    ? "translate-x-1"
                    : "translate-x-6"
                } inline-block w-5 h-5 transform bg-white rounded-full transition`}
              ></span>
            </span>
          </label>
          <span className="text-gray-500">Year</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="single-table p-6 border rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="table-head mb-6 text-center">
                <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="price">
                  <h2 className="text-4xl font-bold">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                    <span className="text-lg font-normal">
                      /user/month, billed{" "}
                      {billingCycle === "monthly" ? "monthly" : "annually"}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="table-content">
                <ul className="table-list mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-center mb-2">
                      <i className="lni lni-checkmark-circle mr-2 text-green-600"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="btn bg-indigo-700 text-white py-2 px-6 rounded-md hover:bg-indigo-800 transition">
                    Buy {plan.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; */

import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch"; // Import ToggleSwitch Component

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingPlans = [
    {
      title: "Micro",
      description: "All the basics for your micro business",
      monthlyPrice: "₹49",
      annualPrice: "₹42",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "15 GB storage",
        "Email Support",
      ],
    },
    {
      title: "Small",
      description: "Scale effectively your small business",
      monthlyPrice: "₹99",
      annualPrice: "₹83",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "30 GB storage",
        "Email and Voice Support",
      ],
    },
    {
      title: "Medium",
      description: "Maximize your medium-sized business",
      monthlyPrice: "₹149",
      annualPrice: "₹125",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "45 GB storage",
        "Email and Voice Support",
      ],
    },
    {
      title: "Enterprise",
      description: "Excellence at your enterprise business",
      monthlyPrice: "₹199",
      annualPrice: "₹167",
      features: [
        "Unlimited Projects",
        "Unlimited Issue Tracking",
        "75 GB storage",
        "Email and Voice Support",
      ],
    },
  ];

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "annually" : "monthly");
  };

  return (
    <section id="pricing" className="pricing-table bg-white py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-indigo-700">Pricing</h3>
          <h2 className="text-4xl font-semibold mt-2">Pricing Plan</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Designed for industry segments like yours with a focus on technology,
            innovation, and subject matter expertise to benefit long-term values
            and drive economic growth.
          </p>
        </div>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <span className="text-gray-500">Month</span>
          <ToggleSwitch
            checked={billingCycle === "annually"}
            onChange={toggleBillingCycle}
          />
          <span className="text-gray-500">Year</span>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4  ">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="single-table p-6 border rounded-lg hover:scale-105 duration-500 ease-in-out shadow-lg hover:shadow-xl transition"
            >
              <div className="table-head mb-6 text-center">
                <h4 className="text-xl font-bold text-[#061e5c] mb-2 mt-4">{plan.title}</h4>
                <p className="text-gray-500 mb-4 mt-4">{plan.description}</p>
                <div className="price mt-8">
                  <h2 className="text-4xl font-bold text-[#061e5c]">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.annualPrice}
                    <span className="text-lg font-normal ">
                      /user/month, billed{" "}
                      {billingCycle === "monthly" ? "monthly" : "annually"}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="table-content">
                <ul className="table-list mb-6 mt-16">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-700 flex items-center mb-2">
                      <i className="lni lni-checkmark-circle mr-2 text-green-600"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center my-8">
                  <button className="btn bg-[#008000] text-white py-2 px-6 rounded-md hover:bg-white hover:text-[#008000] transition hover:shadow-xl">
                    Buy {plan.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

