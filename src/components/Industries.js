const Industries = () => {
  const industries = [
    { name: 'Social media', icon: '📞' },
    { name: 'Fitness and sport', icon: '⚽' },
    { name: 'Bank', icon: '🏦' },
    { name: 'Construction', icon: '🏗️' },
    { name: 'Game projects', icon: '🎮' },
    { name: 'Education', icon: '🎓' },
    { name: 'Auto, transport', icon: '🚗' },
    { name: 'Medicine, health', icon: '💉' },
    { name: 'Restaurants, food delivery', icon: '🍔' },
    { name: 'Marketplaces', icon: '🛒' },
    { name: 'AR technology', icon: '🛠️' },
    { name: 'TV series', icon: '📺' },
    { name: 'Startups', icon: '🚀' },
    { name: 'Religion', icon: '⛪' },
    { name: 'Online courses', icon: '💻' },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-8">
          Developed more than <span className="text-green-500">100</span> projects in <span className="text-green-500">15</span> industries
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {industries.slice(0, 5).map((industry, index) => (
              <div key={index} className="flex items-center mb-4">
                <span className="text-2xl mr-4">{industry.icon}</span>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
          <div>
            {industries.slice(5, 10).map((industry, index) => (
              <div key={index} className="flex items-center mb-4">
                <span className="text-2xl mr-4">{industry.icon}</span>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
          <div>
            {industries.slice(10).map((industry, index) => (
              <div key={index} className="flex items-center mb-4">
                <span className="text-2xl mr-4">{industry.icon}</span>
                <span>{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
