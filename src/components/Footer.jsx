import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  Heart,
  ChevronUp,
  Globe,
  Shield,
  Home,
  Calendar,
  Image,
  Users,
  ShoppingBag,
  FileText,
  HelpCircle
} from 'lucide-react';

const Footer = ({
  logoUrl = '/images/logo-black.jpg',
  logoAlt = 'EWKF Logo',
  developerLink = 'https://www.addiswebsite.com',
  developerName = 'Addis Website',
  currentYear = new Date().getFullYear(),
  organizationName = 'Ethiopian World Kickboxing Federation'
}) => {
  // Social media links
  const socialLinks = [
    { 
      icon: <Facebook size={18} />, 
      href: "https://facebook.com/ewkforg", 
      label: "Facebook",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      icon: <Instagram size={18} />, 
      href: "https://instagram.com/davedan_kickboxing", 
      label: "Instagram",
      bgColor: "bg-pink-600 hover:bg-pink-700"
    },
    { 
      icon: <Youtube size={18} />, 
      href: "https://youtube.com/@davedankickboxingandhealth7751", 
      label: "YouTube",
      bgColor: "bg-red-600 hover:bg-red-700"
    },
    { 
      icon: <MessageCircle size={18} />, 
      href: "whatsapp:contact=+251911604629", 
      label: "WhatsApp",
      bgColor: "bg-green-500 hover:bg-green-600"
    },
    { 
      icon: <Twitter size={18} />, 
      href: "https://x.com/ewkforg", 
      label: "Twitter",
      bgColor: "bg-gray-800 hover:bg-gray-900"
    },
    { 
      icon: <Linkedin size={18} />, 
      href: "https://linkedin.com/in/dave-dan", 
      label: "LinkedIn",
      bgColor: "bg-blue-700 hover:bg-blue-800"
    }
  ];

  // Navigation links
  const navLinks = [
    { icon: <Home size={16} />, label: "Home", href: "/" },
    { icon: <FileText size={16} />, label: "News", href: "/news" },
    { icon: <Users size={16} />, label: "Members", href: "/members" },
    { icon: <Calendar size={16} />, label: "Events", href: "/events" },
    { icon: <Image size={16} />, label: "Gallery", href: "/gallery" },
    { icon: <ShoppingBag size={16} />, label: "Shop", href: "/shop" }
  ];

  // Quick links
  const quickLinks = [
    { icon: <Globe size={16} />, label: "About Us", href: "/about" },
    { icon: <Users size={16} />, label: "Instructors", href: "/instructors" },
    { icon: <Shield size={16} />, label: "Rules", href: "/rules" },
    { icon: <HelpCircle size={16} />, label: "FAQs", href: "/faq" }
  ];

  return (
    <footer className="text-white bg-gradient-to-r from-gray-900 to-black">
     

      {/* Main Footer Content */}
      <div className="py-10">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4 md:text-left">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex flex-col items-center space-y-4 md:items-start">
                <img 
                  src={logoUrl} 
                  alt={logoAlt}
                  className="w-16 h-16 rounded-lg md:w-20 md:h-20"
                  width={80}
                  height={80}
                />
                <div>
                  <h3 className="text-xl font-bold">{organizationName}</h3>
                  <p className="mt-1 text-sm text-gray-400">EWKF</p>
                </div>
              </div>
              <p className="text-gray-300">
                Promoting excellence in kickboxing across Ethiopia and developing world-class martial artists.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="flex items-center justify-center gap-3 text-gray-300 transition-colors hover:text-white group md:justify-start"
                    >
                      <span className="text-yellow-400 transition-opacity opacity-0 group-hover:opacity-100">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="flex items-center justify-center gap-3 text-gray-300 transition-colors hover:text-white group md:justify-start"
                    >
                      <span className="text-yellow-400 transition-opacity opacity-0 group-hover:opacity-100">
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
              <div className="space-y-4">
                <a href="tel:+251911604629" className="flex items-center justify-center gap-3 text-gray-300 hover:text-white md:justify-start">
                  <Phone size={18} className="text-yellow-400" />
                  <span>+251 911 604 629</span>
                </a>
                <a href="mailto:contact@ewkf.org" className="flex items-center justify-center gap-3 text-gray-300 hover:text-white md:justify-start">
                  <Mail size={18} className="text-yellow-400" />
                  <span>contact@ewkf.org</span>
                </a>
                <div className="flex items-center justify-center gap-3 text-gray-300 md:justify-start">
                  <MapPin size={18} className="text-yellow-400" />
                  <span>Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-6 border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between">
            {/* Copyright */}
            <div>
              <p className="text-sm text-gray-400">
                © {currentYear} {organizationName}. All rights reserved.
              </p>
            </div>

            {/* Developer Credit */}
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Developed with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>by</span>
              <a 
                href={developerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-purple-400 hover:text-purple-300"
              >
                {developerName}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed z-50 p-3 text-gray-900 transition-all duration-300 bg-yellow-500 rounded-full shadow-lg bottom-6 right-6 hover:bg-yellow-600 hover:scale-110 hover:shadow-xl"
        aria-label="Back to top"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;