const Services = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Full Development Cycle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h3 className="text-lg font-bold mb-4">Web</h3>
            <p className="text-gray-600">
              PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js <br />
              Nuxt / MySQL / Laravel / GO lang / Django / Python
            </p>
            <h3 className="text-lg font-bold mt-8 mb-4">Mobile</h3>
            <p className="text-gray-600">
              Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm <br />
              Coroutine / RxJava / RxSwift / Unit Test / Navigation
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Other Services</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>iOS Development</li>
              <li>Android Development</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Testing</li>
              <li>Launch</li>
              <li>IT Consulting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
