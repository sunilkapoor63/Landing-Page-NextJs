const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
        <div className="space-y-4">
          <details className="p-4 bg-white rounded-lg shadow-md">
            <summary className="font-bold">What is the cost of a mobile application?</summary>
            <p className="mt-2">Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow-md">
            <summary className="font-bold">Do you provide a guarantee for the mobile application?</summary>
            <p className="mt-2">Yes, we provide a guarantee for all our mobile applications.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow-md">
            <summary className="font-bold">How long will development take?</summary>
            <p className="mt-2">Average development time from start to finished application: Medium projects up to 3 months. Large projects about 4-6 months. To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.</p>
          </details>
          <details className="p-4 bg-white rounded-lg shadow-md">
            <summary className="font-bold">I will not tell my idea, do you guarantee confidentiality?</summary>
            <p className="mt-2">Yes, we guarantee confidentiality and are ready to sign a non-disclosure agreement.</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
