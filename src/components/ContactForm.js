const ContactForm = () => {
  return (
    <section className="bg-gradient-to-r from-yellow-400 to-green-500 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white mb-10 lg:mb-0 mr-10">
          <h2 className="text-4xl font-bold mb-4">Let's discuss <br /> Your project</h2>
          <p className="text-lg">Let's figure out how to create an effective application, its cost and terms of its development</p>
        </div>
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
          <form className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Full name" className="border p-3 rounded" />
            <input type="text" placeholder="Phone number" className="border p-3 rounded" />
            <input type="text" placeholder="Business name" className="border p-3 rounded" />
            <input type="email" placeholder="Business mail" className="border p-3 rounded" />
            <div className="col-span-2 text-center">
              <button type="submit" className="bg-orange-500 text-white py-3 px-6 rounded hover:bg-orange-600 transition">Discuss the project</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
