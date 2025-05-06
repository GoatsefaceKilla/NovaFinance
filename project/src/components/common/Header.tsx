import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="text-primary-700 font-bold text-xl">
            Nova Finance Group
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/programs" label="Loan Programs" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/calculator" label="Mortgage Calculator" currentPath={location.pathname} onClick={closeMenu} />
          <NavLink to="/about" label="About Us" currentPath={location.pathname} onClick={closeMenu} />
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="tel:3237026300"
            className="btn btn-primary flex items-center"
          >
            <Phone size={16} className="mr-2" />
            (323) 702-6300
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container py-4 space-y-3">
            <NavLink to="/" label="Home" currentPath={location.pathname} onClick={closeMenu} mobile />
            <NavLink to="/programs" label="Loan Programs" currentPath={location.pathname} onClick={closeMenu} mobile />
            <NavLink to="/calculator" label="Mortgage Calculator" currentPath={location.pathname} onClick={closeMenu} mobile />
            <NavLink to="/about" label="About Us" currentPath={location.pathname} onClick={closeMenu} mobile />
            <div className="pt-3">
              <a
                href="tel:3237026300"
                className="btn btn-primary flex items-center w-full justify-center"
              >
                <Phone size={16} className="mr-2" />
                (323) 702-6300
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
  currentPath: string;
  onClick: () => void;
  mobile?: boolean;
}

const NavLink = ({ to, label, currentPath, onClick, mobile = false }: NavLinkProps) => {
  const isActive = currentPath === to || (to !== '/' && currentPath.startsWith(to));
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${
        mobile ? 'block py-2 px-4 hover:bg-gray-50 rounded-md' : ''
      } ${
        isActive
          ? 'text-primary-700 font-medium'
          : 'text-gray-700 hover:text-primary-600'
      } transition-colors duration-200`}
    >
      {label}
    </Link>
  );
};

export default Header;