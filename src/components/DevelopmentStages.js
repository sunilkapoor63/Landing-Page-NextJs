const DevelopmentStages = () => {
  return (
    <section className="py-20 bg-gray-50 development-stages">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Application Development Stages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="space-y-8 stage">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">1. Analysis</h3>
              <p>We craft precise technical specs, aligning with your business, technology, and user requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">2. Design</h3>
              <p>We adapt the customer’s corporate identity to the platform guidelines. We draw convenient and understandable interfaces.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">3. Development</h3>
              <p>We create an extensible architecture, write clean and stable code. We integrate with customer technologies.</p>
            </div>
          </div>
          <div className="flex justify-center stage">
            <img src="/phone.png" alt="Phone" className="w-full max-w-xs md:max-w-md" />
          </div>
          <div className="space-y-8 stage">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">4. Testing</h3>
              <p>We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">5. Launching</h3>
              <p>We design the application page and publish it in the App Store and Google Play stores.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">6. Support</h3>
              <p>We monitor the stability of the application, update it for new devices and versions of iOS and Android.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStages;
