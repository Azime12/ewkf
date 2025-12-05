import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, ShoppingCart, Search, Calendar, ChevronDown } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = ({ 
  email = 'contact@ewkf.org',
  giveawayDate = 'NOVEMBER 12!',
  giveawayLink = '/giveaway',
  logoUrl = '/images/logo-black.jpg',
  logoAlt = 'EWKF Logo',
  showTopBar = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'News', href: '/news' },
    { 
      label: 'Members', 
      href: '/members',
      dropdown: [
        { label: 'Clubs', href: '/clubs' },
        { label: 'Fighters', href: '/fighters' },
        { label: 'Instructors', href: '/instructors' }
      ]
    },
    { label: 'Rules', href: '/rules' },
    { label: 'Registrations', href: '/registrations' },
    { label: 'Events', href: '/events' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact Us', href: '/contact' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDropdownToggle = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Close dropdown when route changes
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      {/* Top Bar - Giveaway Banner (Conditional) */}
      {showTopBar && (
        <div className="h-8 bg-yellow-400">
          <div className="container h-full px-4 mx-auto">
            <div className="flex items-center justify-center h-full">
              <div className="w-full overflow-hidden">
                <div className="px-4 animate-marquee whitespace-nowrap">
                  <Link
                    to={giveawayLink}
                    className="flex items-center justify-center gap-2 text-xs font-bold text-gray-900 transition-all duration-300 hover:text-gray-700 lg:text-sm"
                  >
                    <Calendar size={14} className="hidden sm:inline" />
                    <span>
                      <span className="uppercase">GIVEAWAY</span> for 
                      <span className="ml-2 font-extrabold">{giveawayDate}</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navigation - Black Background */}
      <div className="bg-black">
        <div className="container px-4 py-3 mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="z-20 flex-shrink-0">
              <Link to="/" className="block">
                <img 
                  src={logoUrl} 
                  alt={logoAlt}
                  className="w-auto h-20 md:h-20"
                  width={150}
                  height={60}
                />
              </Link>
            </div>

            {/* Desktop Navigation - Black with Yellow Accents */}
            <div className="items-center justify-center flex-1 hidden py-3 md:flex ">
              <ul className="flex items-center space-x-1 text-white lg:space-x-1">
                {navItems.map((item) => (
                  <li key={item.label} className="relative group">
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          onMouseEnter={() => !isMobile && setActiveDropdown(item.label)}
                          className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg lg:text-base hover:text-yellow-400 hover:bg-gray-900 group"
                        >
                          <span className="relative">
                            {item.label}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                          </span>
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-yellow-400' : 'text-gray-300'}`}
                          />
                        </button>
                        
                        {/* Dropdown Menu */}
                        {activeDropdown === item.label && (
                          <div 
                            className="absolute left-0 z-30 w-56 py-2 mt-2 bg-black border border-gray-800 rounded-lg shadow-xl"
                            onMouseLeave={() => !isMobile && setActiveDropdown(null)}
                          >
                            {item.dropdown.map((subItem) => (
                            <NavLink
  key={subItem.label}
  to={subItem.href}
  className={({ isActive }) =>
    `block px-4 py-3 text-sm transition-all duration-300 hover:text-yellow-400 hover:bg-gray-900 ${
      isActive ? 'text-yellow-400 bg-gray-900' : 'text-gray-300'
    }`
  }
  onClick={() => {
    setActiveDropdown(null);
    handleLinkClick();
  }}
>
  <div className="flex items-center">
    {subItem.label}
  </div>
</NavLink>

                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={item.href}
                        className={({ isActive }) => 
                          `relative block px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg lg:text-base hover:text-yellow-400 hover:bg-gray-900 group ${
                            isActive ? 'text-yellow-400' : 'text-white'
                          }`
                        }
                      >
                        {item.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Desktop Action Buttons */}
            <div className="items-center hidden space-x-3 md:flex">
              {/* <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 transition-all duration-300 rounded-lg hover:text-yellow-400 hover:bg-gray-900"
              >
                <Mail size={16} />
                <span className="hidden lg:inline">Contact</span>
              </a> */}
              <button 
                className="p-2 transition-all duration-300 rounded-full hover:text-yellow-400 hover:bg-gray-900"
                aria-label="Search"
              >
                <Search size={20} className="text-gray-300" />
              </button>
            </div>

            {/* Mobile Menu Button - Yellow */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="z-30 p-2 transition-all duration-300 rounded-lg md:hidden hover:bg-gray-900"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={24} className="text-yellow-400" />
              ) : (
                <Menu size={24} className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Left Side, Black with Yellow Text */}
      <div className={`
        fixed inset-0 z-40 md:hidden
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        {/* Overlay - Semi-transparent black */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-70' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Panel - Slides from left */}
        <div className={`
          absolute left-0 top-0 h-full w-4/5 max-w-xs bg-black shadow-2xl transform transition-all duration-300 ease-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full">
            {/* Mobile Header - Yellow accent */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-400/10">
                  <Mail size={18} className="text-gray-200" />
                </div>
                <a 
                  href={`mailto:${email}`}
                  className="text-sm text-yellow-400 transition-colors duration-300 hover:text-yellow-300"
                  onClick={handleLinkClick}
                >
                  {email}
                </a>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 transition-all duration-300 rounded-full hover:bg-gray-900 hover:text-yellow-400"
              >
                <X size={20} className="text-yellow-400" />
              </button>
            </div>

            {/* Mobile Navigation */}
        <div className="flex-1 py-6 overflow-y-auto">
  {/* Giveaway Banner (Only if showTopBar is true) */}
  {showTopBar && (
    <div className="px-4 mb-6">
      <div className="p-4 border rounded-lg bg-yellow-400/5 border-yellow-400/20">
        <Link
          to={giveawayLink}
          className="flex items-center justify-center gap-2 text-sm font-bold text-yellow-400 transition-colors duration-300 hover:text-yellow-300"
          onClick={handleLinkClick}
        >
          <Calendar size={16} />
          <span>Giveaway for</span>
          <span className="text-yellow-300">{giveawayDate}</span>
        </Link>
      </div>
    </div>
  )}

  <ul className="px-4 space-y-1">
    {navItems.map((item) => (
      <li key={item.label} className="mb-1">
        {item.dropdown ? (
          <>
            {/* MAIN DROPDOWN BUTTON */}
            <button
              onClick={() => handleDropdownToggle(item.label)}
              className="flex items-center justify-between w-full px-4 py-4 font-medium text-left text-yellow-400 transition-all duration-300 rounded-lg hover:bg-gray-900 hover:text-yellow-300"
            >
              <span>{item.label}</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  activeDropdown === item.label
                    ? "rotate-180 text-yellow-300"
                    : "text-yellow-400"
                }`}
              />
            </button>

            {/* DROPDOWN ITEMS */}
            {activeDropdown === item.label && (
              <div className="pl-4 mt-1 mb-2 space-y-1">
                {item.dropdown.map((subItem) => (
                  <NavLink
                    key={subItem.label}
                    to={subItem.href}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-sm transition-all duration-300 rounded-lg hover:text-yellow-400 hover:bg-gray-900 ${
                        isActive ? "text-gray-100 bg-gray-900" : "text-gray-300"
                      }`
                    }
                    onClick={handleLinkClick}
                  >
                    {subItem.label}
                  </NavLink>
                ))}
              </div>
            )}
          </>
        ) : (
          // NORMAL NAV LINKS
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              `block px-4 py-4 font-medium transition-all duration-300 rounded-lg hover:bg-gray-900 hover:text-yellow-300 ${
                isActive ? "text-gray-100 bg-yellow-500" : "text-gray-100"
              }`
            }
            onClick={handleLinkClick}
          >
            {item.label}
          </NavLink>
        )}
      </li>
    ))}
  </ul>
</div>


            {/* Mobile Footer Actions */}
            <div className="p-6 border-t border-gray-800">
              <div className="flex items-center justify-center space-x-6">
                <a 
                  href={`mailto:${email}`}
                  className="p-3 transition-all duration-300 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20"
                  onClick={handleLinkClick}
                >
                  <Mail size={20} className="text-yellow-400" />
                </a>
                <button 
                  className="p-3 transition-all duration-300 rounded-full bg-yellow-400/10 hover:bg-yellow-400/20"
                  onClick={handleLinkClick}
                  aria-label="Search"
                >
                  <Search size={20} className="text-yellow-400" />
                </button>
              
              </div>
              
              {/* Copyright */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} EWKF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Action Buttons - Fixed at bottom right */}
      {!isMenuOpen && isMobile && (
        <div className="fixed z-30 bottom-6 right-4 md:hidden">
          <div className="flex flex-col items-end gap-3">
            <button 
              className="p-3 transition-all duration-300 bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500 hover:shadow-xl active:scale-95"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} className="text-black" />
            </button>
            
            <div className="flex items-center gap-2">
              <button className="p-3 transition-all duration-300 bg-black rounded-full shadow-lg hover:bg-gray-900 hover:shadow-xl active:scale-95">
                <Search size={20} className="text-yellow-400" />
              </button>
              
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;