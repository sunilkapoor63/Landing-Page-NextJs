// src/components/Team.js
import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-4">
        <div className="lg:w-1/2 lg:pr-8">
          <h2 className="text-3xl font-bold mb-6">Our Team</h2>
          <p className="mb-4">
            Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mb-6 p-5">
            <div>
              <p className="text-4xl font-bold">28</p>
              <p className="text-gray-600">team members</p>
            </div>
            <div>
              <p className="text-4xl font-bold">+100</p>
              <p className="text-gray-600">projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold">7 years</p>
              <p className="text-gray-600">in IT sphere</p>
            </div>
          </div>
          <p className="text-gray-600">
            All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It’s expensive but worth it.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image src="/team-image.png" alt="Team Image" width={800} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Team;
