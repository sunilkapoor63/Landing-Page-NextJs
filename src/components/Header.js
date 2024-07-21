import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Company Logo" className="h-10" />
          <span className="text-xl font-bold">My Company</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Services</a>
          </Link>
          <Link href="#media" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Media</a>
          </Link>
          <Link href="#cases" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Cases</a>
          </Link>
          <Link href="#faq" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">FAQ</a>
          </Link>
          <Link href="#contacts" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Contacts</a>
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4 text-green-500">
          <div className="flex items-center space-x-1">
            <span>📞</span>
            <span>+91 0000000000</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>✉️</span>
            <span>demo@gmail.com</span>
          </div>
        </div>
        <div className="md:hidden">
          <button>Menu</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
