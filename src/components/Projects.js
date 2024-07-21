const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Projects We Are Proud Of</h2>
        <div className="flex justify-center space-x-4 mb-8">
          <button className="border-b-2 border-yellow-500 pb-1">Project 1</button>
          <button>Project 2</button>
          <button>Project 3</button>
          <button>Project 4</button>
        </div>
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8 space-y-8 md:space-y-0">
          <div className="text-left md:w-1/2">
            <h3 className="text-2xl font-bold">Project 1</h3>
            <p className="mt-4">Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels.</p>
            <p className="mt-4">Business analysis / iOS / Android / QA / UI/UX Design</p>
            <p className="mt-4">India / Real Estate</p>
            <div className="flex space-x-4 mt-4">
              <span>400% User Growth</span>
              <span>+200,000 Active Users</span>
            </div>
            <div className="flex space-x-4 mt-4">
              <img src="/appstore.png" alt="App Store" className="h-10" />
              <img src="/playstore.png" alt="Google Play" className="h-10" />
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/project-image.png" alt="Project Image" className="h-96" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
