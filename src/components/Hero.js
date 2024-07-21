const Hero = () => {
  return (
    <section className="py-20 bg-gray-100 hero-section">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left hero-section">
          <div className="md:w-1/2 w-full hero-text">
            <h1 className="text-4xl font-bold text-yellow-600">User-Centric Excellence:</h1>
            <h2 className="text-3xl font-bold text-gray-800">Our App Development services Tackles Your Pain Points</h2>
            <p className="mt-4 text-gray-600">
              Experience a Seamless Digital Journey with Desun - Where Every Line of Code Resolves Your Challenges and Elevates Your App Experience to Unparalleled Heights.
            </p>
            <form className="mt-8 bg-white p-6 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-4">Leave your contacts and we will call you back within 30 minutes</h3>
              <input type="text" placeholder="Full name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
              <input type="text" placeholder="Phone number" className="w-full p-2 mb-4 border border-gray-300 rounded" />
              <input type="text" placeholder="Business name" className="w-full p-2 mb-4 border border-gray-300 rounded" />
              <input type="text" placeholder="Business mail" className="w-full p-2 mb-4 border border-gray-300 rounded" />
              <button type="submit" className="w-full p-2 bg-green-500 text-white font-bold rounded">Get consultation</button>
            </form>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center hero-image">
            <img src="/mobile.png" alt="Mobile App" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
