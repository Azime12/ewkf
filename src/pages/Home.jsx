import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Trophy, 
  Users, 
  Award, 
  Target, 
  Shield, 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink,
  ChevronRight,
  Star,
  Heart,
  TrendingUp,
  Globe,
  ShieldCheck,
  BookOpen,
  Newspaper,
  Briefcase,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Map
} from 'lucide-react';

// Reusable Components
const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="mb-3 text-3xl font-bold text-gray-900 md:text-4xl">
      {children}
    </h2>
    {subtitle && (
      <p className="max-w-3xl mx-auto text-lg text-gray-600">
        {subtitle}
      </p>
    )}
    <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
  </div>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  // Featured Athletes Data
  const featuredAthletes = [
    {
      id: 1,
      name: "Alemayehu Bekele",
      weightClass: "Middleweight (75kg)",
      achievements: "2x National Champion",
      ranking: "Rank #1 in Ethiopia",
      image: "/images/athletes/alemayehu.jpg",
      style: "K-1 Rules"
    },
    {
      id: 2,
      name: "Sofia Mekonnen",
      weightClass: "Featherweight (57kg)",
      achievements: "East African Gold Medalist",
      ranking: "Rank #3 in Africa",
      image: "/images/athletes/sofia.jpg",
      style: "Low Kick"
    },
    {
      id: 3,
      name: "Daniel Haile",
      weightClass: "Heavyweight (91+kg)",
      achievements: "International Bronze Medalist",
      ranking: "Rank #2 in Ethiopia",
      image: "/images/athletes/daniel.jpg",
      style: "Full Contact"
    }
  ];

  // Upcoming Events
  const upcomingEvents = [
    {
      id: 1,
      title: "National Kickboxing Championship 2024",
      date: "December 15-20, 2024",
      location: "Addis Ababa Stadium",
      type: "Championship",
      registrationOpen: true
    },
    {
      id: 2,
      title: "Regional Trials - Oromia Region",
      date: "November 30, 2024",
      location: "Adama City Arena",
      type: "Qualification",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Coach Certification Workshop",
      date: "December 5-7, 2024",
      location: "EWKF Training Center",
      type: "Training",
      registrationOpen: false
    }
  ];

  // Training Clubs
  const trainingClubs = [
    {
      name: "Addis Ababa Kickboxing Academy",
      location: "Bole, Addis Ababa",
      coach: "Coach Tewodros Asrat",
      contact: "+251 911 234 567"
    },
    {
      name: "Hawassa Fight Club",
      location: "Hawassa, Sidama Region",
      coach: "Coach Yohannes Mekonnen",
      contact: "+251 922 345 678"
    },
    {
      name: "Mekelle Combat Center",
      location: "Mekelle, Tigray Region",
      coach: "Coach Samuel Gebre",
      contact: "+251 933 456 789"
    }
  ];

  // Kickboxing Styles
  const kickboxingStyles = [
    {
      name: "K-1 Rules",
      description: "Fast-paced striking with kicks, punches & knees",
      icon: "🥊"
    },
    {
      name: "Low Kick",
      description: "Full-power leg kicks allowed for strategic advantage",
      icon: "🦵"
    },
    {
      name: "Full Contact",
      description: "Kicks above the waist with full power",
      icon: "💥"
    },
    {
      name: "Light Contact",
      description: "Controlled, technical sparring for skill development",
      icon: "🎯"
    },
    {
      name: "Point Fighting",
      description: "Precision-based scoring for technique mastery",
      icon: "⭐"
    }
  ];

  // Leadership Team
  const leadershipTeam = [
    {
      name: "Dr. Samuel Tekle",
      position: "President",
      bio: "Former national champion with 20+ years in martial arts administration",
      image: "/images/leadership/president.jpg"
    },
    {
      name: "Coach Marta Assefa",
      position: "Vice President",
      bio: "International referee and coach with Olympic experience",
      image: "/images/leadership/vp.jpg"
    },
    {
      name: "Dr. Michael Solomon",
      position: "Technical Director",
      bio: "Sports medicine specialist and training methodology expert",
      image: "/images/leadership/technical.jpg"
    }
  ];

  // Latest News
  const latestNews = [
    {
      id: 1,
      title: "EWKF Athletes Win Gold at African Championships",
      date: "Oct 15, 2024",
      category: "Championship Results",
      excerpt: "Three Ethiopian fighters secured gold medals at the African Kickboxing Championships in Cairo."
    },
    {
      id: 2,
      title: "New Youth Development Program Launched",
      date: "Oct 10, 2024",
      category: "Youth Sports",
      excerpt: "EWKF introduces free kickboxing training for youth aged 12-18 in Addis Ababa."
    },
    {
      id: 3,
      title: "International Referee Certification Completed",
      date: "Oct 5, 2024",
      category: "Training",
      excerpt: "15 Ethiopian referees receive international certification from WAKO."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative px-4 py-20 mx-auto md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 mb-4 text-sm font-bold text-black bg-yellow-500 rounded-full">
                OFFICIAL GOVERNING BODY
              </div>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl">
                Ethiopian World Kickboxing Federation
              </h1>
              <p className="mb-8 text-xl text-gray-200 md:text-2xl">
                Empowering Champions. Building the Future of Combat Sport in Ethiopia.
              </p>
              <p className="mb-10 text-lg text-gray-300">
                Discover the official home of kickboxing in Ethiopia. Training. Discipline. National pride.
              </p>
            </div>
            
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/registrations"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:scale-105"
              >
                Join EWKF
                <ChevronRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-yellow-500 transition-all duration-300 bg-transparent border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black"
              >
                Upcoming Events
                <Calendar className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="py-6 bg-black/80">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1500+</div>
                <div className="text-gray-300">Registered Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-gray-300">Certified Clubs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25</div>
                <div className="text-gray-300">National Champions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">12</div>
                <div className="text-gray-300">Regions Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Official governing body for kickboxing in Ethiopia">
            About EWKF
          </SectionTitle>
          
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-6 text-lg text-gray-700">
                The <strong>Ethiopian World Kickboxing Federation (EWKF)</strong> is the official governing body responsible for developing and promoting kickboxing throughout Ethiopia. EWKF organizes national competitions, certifies coaches and athletes, and represents Ethiopia in global kickboxing competitions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <ShieldCheck className="mt-1 mr-3 text-yellow-500" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Recognized National Body</h4>
                    <p className="text-gray-600">Officially recognized by the Ministry of Youth and Sports</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="mt-1 mr-3 text-yellow-500" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">International Membership</h4>
                    <p className="text-gray-600">Member of World Association of Kickboxing Organizations (WAKO)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mt-1 mr-3 text-yellow-500" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Nationwide Support</h4>
                    <p className="text-gray-600">Supporting athletes across all 12 regions of Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="p-8 bg-gray-100 shadow-inner rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <Card className="text-center border-l-4 border-yellow-500">
                    <Target className="mx-auto mb-3 text-yellow-500" size={32} />
                    <h4 className="mb-2 font-bold text-gray-900">Mission</h4>
                    <p className="text-sm text-gray-600">
                      To develop world-class kickboxing athletes through structured training, fair competition, and ethical sportsmanship.
                    </p>
                  </Card>
                  
                  <Card className="text-center border-l-4 border-yellow-500">
                    <Trophy className="mx-auto mb-3 text-yellow-500" size={32} />
                    <h4 className="mb-2 font-bold text-gray-900">Vision</h4>
                    <p className="text-sm text-gray-600">
                      To make Ethiopia a leading force in African and global kickboxing.
                    </p>
                  </Card>
                </div>
                
                <div className="mt-8">
                  <h4 className="mb-4 font-bold text-center text-gray-900">Core Values</h4>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Discipline', 'Respect', 'Integrity', 'Excellence', 'National Spirit'].map((value) => (
                      <span key={value} className="px-4 py-2 font-medium text-yellow-700 rounded-full bg-yellow-50">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kickboxing Styles */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Master different forms of kickboxing under expert guidance">
            Kickboxing Disciplines
          </SectionTitle>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {kickboxingStyles.map((style, index) => (
              <Card key={index} className="text-center transition-all duration-300 border-2 border-transparent hover:border-yellow-500">
                <div className="mb-4 text-4xl">{style.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{style.name}</h3>
                <p className="text-gray-600">{style.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Athletes */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Meet our top performing athletes representing Ethiopia">
            Featured Athletes
          </SectionTitle>
          
          <div className="grid gap-8 md:grid-cols-3">
            {featuredAthletes.map((athlete) => (
              <Card key={athlete.id} className="text-center transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full">
                  <Users size={48} className="text-gray-400" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900">{athlete.name}</h3>
                <div className="mb-2 font-medium text-yellow-600">{athlete.weightClass}</div>
                <div className="mb-3 text-gray-700">{athlete.achievements}</div>
                <div className="inline-block px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-100 rounded-full">
                  {athlete.ranking}
                </div>
                <div className="pt-4 mt-4 border-t">
                  <div className="text-sm text-gray-500">Specialty</div>
                  <div className="font-medium">{athlete.style}</div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/fighters"
              className="inline-flex items-center font-semibold text-yellow-600 hover:text-yellow-700"
            >
              View All Athletes
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 text-white bg-gradient-to-b from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Don't miss our upcoming tournaments and training sessions">
            Upcoming Competitions
          </SectionTitle>
          
          <div className="grid gap-6 md:grid-cols-3">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="p-6 transition-all duration-300 bg-gray-800 rounded-xl hover:bg-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.registrationOpen ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>
                    {event.registrationOpen ? 'Registration Open' : 'Registration Closed'}
                  </span>
                  <span className="px-3 py-1 text-sm text-yellow-400 rounded-full bg-yellow-500/20">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="mb-4 text-xl font-bold">{event.title}</h3>
                
                <div className="mb-6 space-y-3">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-gray-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={18} className="mr-3 text-gray-400" />
                    <span>{event.location}</span>
                  </div>
                </div>
                
                {event.registrationOpen && (
                  <Link
                    to="/registrations"
                    className="block w-full py-3 font-semibold text-center text-black transition-colors bg-yellow-500 rounded-lg hover:bg-yellow-600"
                  >
                    Register Now
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/events"
              className="inline-flex items-center px-6 py-3 font-semibold text-yellow-500 transition-all duration-300 bg-transparent border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black"
            >
              View All Events
              <Calendar className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Join Ethiopia's premier kickboxing organization">
            Become a Member
          </SectionTitle>
          
          <div className="max-w-4xl mx-auto">
            <div className="p-8 shadow-lg bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Why Join EWKF?</h3>
                  <ul className="space-y-4">
                    {[
                      'Official athlete license and ID card',
                      'National and international competition eligibility',
                      'Professional coaching certifications',
                      'Exclusive training programs and seminars',
                      'Club recognition and affiliation',
                      'Insurance coverage during sanctioned events',
                      'Access to national ranking system'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="flex-shrink-0 mt-1 mr-3 text-green-500" size={20} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-white shadow rounded-xl">
                  <h3 className="mb-6 text-xl font-bold text-gray-900">Register Now</h3>
                  <div className="space-y-4">
                    <Link
                      to="/registrations/athlete"
                      className="block w-full py-4 font-semibold text-center text-black transition-all duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:scale-105"
                    >
                      Register as Athlete
                    </Link>
                    <Link
                      to="/registrations/coach"
                      className="block w-full py-4 font-semibold text-center text-yellow-600 transition-all duration-300 border-2 border-yellow-500 rounded-lg hover:bg-yellow-50"
                    >
                      Register as Coach
                    </Link>
                    <Link
                      to="/registrations/club"
                      className="block w-full py-4 font-semibold text-center text-gray-700 transition-all duration-300 border-2 border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                      Register Your Club
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Clubs */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Train at official EWKF certified facilities across Ethiopia">
            Official EWKF Clubs
          </SectionTitle>
          
          <div className="grid gap-8 md:grid-cols-3">
            {trainingClubs.map((club, index) => (
              <Card key={index} className="transition-all duration-300 border-2 border-transparent hover:border-yellow-500">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-yellow-100 rounded-lg">
                    <MapPin className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{club.name}</h3>
                    <p className="text-sm text-gray-600">{club.location}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Head Coach</div>
                    <div className="font-medium">{club.coach}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Contact</div>
                    <div className="font-medium">{club.contact}</div>
                  </div>
                </div>
                
                <Link
                  to="/clubs"
                  className="inline-flex items-center mt-6 font-medium text-yellow-600 hover:text-yellow-700"
                >
                  View Details
                  <ChevronRight className="ml-1" size={16} />
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/clubs"
              className="inline-flex items-center px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600"
            >
              Explore All Clubs
              <MapPin className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rules & Safety */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 shadow-inner bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 mr-4 bg-yellow-100 rounded-lg">
                  <BookOpen className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Rules & Safety Guidelines</h2>
                  <p className="text-gray-600">Ensuring fair play and athlete safety</p>
                </div>
              </div>
              
              <div className="grid gap-6 mb-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-bold text-gray-900">Competition Rules</h3>
                  <ul className="space-y-2">
                    {[
                      'Legal techniques and prohibited moves',
                      'Scoring system and point allocation',
                      'Weight categories and divisions',
                      'Round duration and rest periods',
                      'Referee signals and commands'
                    ].map((rule, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 mr-3 bg-yellow-500 rounded-full"></div>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-3 font-bold text-gray-900">Safety Requirements</h3>
                  <ul className="space-y-2">
                    {[
                      'Mandatory protective equipment',
                      'Medical clearance requirements',
                      'Doping control procedures',
                      'Injury protocols and first aid',
                      'Venue safety standards'
                    ].map((requirement, index) => (
                      <li key={index} className="flex items-center">
                        <Shield className="mr-3 text-yellow-500" size={16} />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <Link
                  to="/rules"
                  className="inline-flex items-center px-6 py-3 font-semibold text-black transition-all duration-300 bg-yellow-500 rounded-lg hover:bg-yellow-600"
                >
                  View Full Rules & Regulations
                  <ExternalLink className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Stay updated with the latest from Ethiopian kickboxing">
            Latest News
          </SectionTitle>
          
          <div className="grid gap-8 md:grid-cols-3">
            {latestNews.map((news) => (
              <Card key={news.id} className="transition-all duration-300 hover:shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-sm text-yellow-800 bg-yellow-100 rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{news.title}</h3>
                <p className="mb-4 text-gray-600">{news.excerpt}</p>
                <Link
                  to={`/news/${news.id}`}
                  className="inline-flex items-center font-medium text-yellow-600 hover:text-yellow-700"
                >
                  Read More
                  <ChevronRight className="ml-1" size={16} />
                </Link>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center px-6 py-3 font-semibold text-yellow-600 transition-all duration-300 border-2 border-yellow-500 rounded-lg hover:bg-yellow-50"
            >
              View All News Articles
              <Newspaper className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <SectionTitle subtitle="Meet the team guiding Ethiopian kickboxing to excellence">
            EWKF Leadership
          </SectionTitle>
          
          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-3">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 bg-gray-200 rounded-full">
                  <Users size={64} className="text-gray-400" />
                </div>
                <h3 className="mb-1 text-xl font-bold text-gray-900">{leader.name}</h3>
                <div className="mb-3 font-medium text-yellow-600">{leader.position}</div>
                <p className="text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

// Helper component for checkmarks
const CheckCircle = ({ className, size }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={`h-6 w-6 ${className}`}
    width={size}
    height={size}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default Home;