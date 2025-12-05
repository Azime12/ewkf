import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Target, 
  Users, 
  Globe, 
  Shield, 
  Award, 
  TrendingUp,
  Star,
  Heart,
  Calendar,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const coreValues = [
    {
      icon: <Shield size={24} />,
      title: "Discipline",
      description: "Cultivating mental and physical discipline through rigorous training"
    },
    {
      icon: <Heart size={24} />,
      title: "Respect",
      description: "Honoring opponents, coaches, and the sport itself"
    },
    {
      icon: <Star size={24} />,
      title: "Excellence",
      description: "Striving for peak performance in every aspect"
    },
    {
      icon: <Target size={24} />,
      title: "Integrity",
      description: "Maintaining highest ethical standards in competition and training"
    }
  ];

  const leadershipTeam = [
    {
      name: "Master Dawit Terefe (Dave Dan)",
      position: "President",
      role: "Head of Federation",
      bio: "Renowned martial artist with over 20 years of experience in kickboxing and MMA. Former national champion and international competitor.",
      achievements: [
        "20+ Years Martial Arts Experience",
        "International Competitor",
        "Certified Master Trainer"
      ],
      image: "/images/leadership/president.jpg"
    },
    {
      name: "Coach Alemayehu Bekele",
      position: "Head Coach & Technical Director",
      role: "Training & Development",
      bio: "International certified coach with expertise in developing champions for global competitions.",
      achievements: [
        "International Coach Certification",
        "5 National Champions Trained",
        "WKF Certified Referee"
      ],
      image: "/images/leadership/coach.jpg"
    },
    {
      name: "Dr. Sofia Mekonnen",
      position: "Medical Director",
      role: "Athlete Health & Safety",
      bio: "Sports medicine specialist ensuring athlete welfare and optimal performance.",
      achievements: [
        "Sports Medicine Specialist",
        "International Competition Experience",
        "Injury Prevention Expert"
      ],
      image: "/images/leadership/medical.jpg"
    }
  ];

  const federationGoals = [
    {
      title: "National Development",
      items: [
        "Establish training centers in all 12 regions",
        "Train 100+ certified coaches annually",
        "Develop youth programs across Ethiopia"
      ]
    },
    {
      title: "International Recognition",
      items: [
        "Produce world champions by 2025",
        "Host international tournaments in Ethiopia",
        "Increase Ethiopian representation in WKF"
      ]
    },
    {
      title: "Community Impact",
      items: [
        "Promote fitness and discipline among youth",
        "Create employment opportunities in sports",
        "Build national pride through athletic excellence"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      {/* <section className="relative overflow-hidden text-white bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative px-4 py-20 mx-auto md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 mb-6 text-sm font-bold text-black bg-yellow-500 rounded-full">
                ABOUT THE FEDERATION
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
                Unleash Your Inner Champion
              </h1>
              <p className="mb-8 text-xl text-gray-200">
                The Ethiopian World Kickboxing Federation (EWKF) is your gateway to the world of competitive kickboxing and mixed martial arts in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Introduction Section */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                Welcome to EWKF
              </h2>
              <div className="w-24 h-1 mx-auto bg-yellow-500"></div>
            </div>
            
            <div className="mx-auto prose prose-lg text-gray-700">
              <p className="mb-8 text-xl leading-relaxed">
                The Ethiopian World Kickboxing Federation (EWKF) is passionate about empowering Ethiopian fighters to reach their full potential on the international stage. We are dedicated to creating a thriving community for athletes, coaches, and fans alike.
              </p>
              
              <div className="p-6 my-8 border-l-4 border-yellow-500 rounded-lg bg-yellow-50">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-lg text-gray-800">
                  To develop world-class kickboxing athletes through structured training, fair competition, and ethical sportsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Leadership Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Federation Leadership
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Led by experienced martial artists dedicated to Ethiopian kickboxing excellence
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="mb-16 overflow-hidden bg-white shadow-xl rounded-2xl">
              <div className="md:flex">
                <div className="flex flex-col justify-center p-8 md:w-1/3 bg-gradient-to-br from-yellow-500 to-yellow-600">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-full bg-white/20">
                      <Trophy size={48} className="text-white" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Master Dawit Terefe</h3>
                    <div className="mb-2 font-semibold text-yellow-100">(Dave Dan)</div>
                    <div className="inline-block px-4 py-1 text-sm text-white rounded-full bg-white/20">
                      President
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:w-2/3">
                  <div className="mb-6">
                    <h4 className="mb-3 text-xl font-bold text-gray-900">About President Dave Dan</h4>
                    <p className="mb-4 text-gray-700">
                      Master Dawit Terefe, known as Dave Dan, is a renowned martial artist with over 20 years of experience in kickboxing and MMA. As President of EWKF, he leads the federation with a vision to elevate Ethiopian fighters to global prominence.
                    </p>
                    <p className="text-gray-700">
                      Former national champion and international competitor, Master Dawit brings invaluable experience and passion to developing the next generation of Ethiopian champions.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-gray-50">
                      <div className="font-semibold text-gray-900">Experience</div>
                      <div className="text-yellow-600">20+ Years</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-50">
                      <div className="font-semibold text-gray-900">Specialty</div>
                      <div className="text-yellow-600">Kickboxing & MMA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {leadershipTeam.slice(1).map((leader, index) => (
                <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full">
                      {index === 0 ? <Target size={32} className="text-yellow-600" /> : <Heart size={32} className="text-yellow-600" />}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-center text-gray-900">{leader.name}</h3>
                    <div className="mb-3 font-semibold text-center text-yellow-600">{leader.position}</div>
                    <p className="mb-6 text-center text-gray-600">{leader.bio}</p>
                    
                    <div className="space-y-2">
                      {leader.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle size={16} className="mr-2 text-green-500" />
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              The principles that guide everything we do at EWKF
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
          </div>

          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 bg-yellow-100 rounded-full group-hover:bg-yellow-500">
                  <div className="text-yellow-600 transition-colors duration-300 group-hover:text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* What We Do */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              What We're Dedicated To
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Empowering Ethiopian fighters through comprehensive programs and international partnerships
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-yellow-100 rounded-lg">
                    <Globe className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Promoting Kickboxing & MMA in Ethiopia</h3>
                    <p className="text-gray-700">
                      We strive to create a thriving community for athletes, coaches, and fans alike. Through regular events, training camps, and public demonstrations, we're building a strong kickboxing culture across Ethiopia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-yellow-100 rounded-lg">
                    <Trophy className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Developing World-Class Fighters</h3>
                    <p className="text-gray-700">
                      Through expert training, competitions, and international partnerships, we nurture fighters who can compete with the best. Our training programs combine traditional techniques with modern sports science.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                <div className="flex items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-yellow-100 rounded-lg">
                    <Award className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Elevating Ethiopian Talent Globally</h3>
                    <p className="text-gray-700">
                      We work closely with the World Kickboxing Federation (WKF) to provide opportunities for Ethiopian fighters to showcase their skills on an international platform. Our athletes compete in continental and world championships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Goals & Vision */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Our Strategic Goals
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Building a comprehensive kickboxing ecosystem in Ethiopia
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
          </div>

          <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
            {federationGoals.map((goal, index) => (
              <div key={index} className="p-6 transition-shadow duration-300 bg-gray-50 rounded-xl hover:shadow-lg">
                <h3 className="mb-4 text-xl font-bold text-gray-900">{goal.title}</h3>
                <ul className="space-y-3">
                  {goal.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-1 mr-3 bg-yellow-500 rounded-full">
                        <span className="text-sm text-white">{idx + 1}</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Join Call to Action */}
      {/* <section className="py-16 text-white bg-gradient-to-r from-black to-gray-900">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Building Champions Together
            </h2>
            <p className="mb-8 text-xl text-gray-200">
              The EWKF is committed to fostering a supportive and inclusive environment where athletes of all skill levels can train, grow, and achieve their dreams. We provide access to high-quality training programs, experienced coaches, and competitive events that push boundaries and test limits.
            </p>
            
            <div className="mb-10 space-y-6">
              <div className="p-6 bg-gray-800/50 rounded-xl">
                <h3 className="mb-4 text-xl font-bold">What We Offer</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    "Professional Training Programs",
                    "National & International Competitions",
                    "Coach Certification"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <CheckCircle className="mr-2 text-green-400" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-400">
                Join the EWKF and take your first step towards becoming a world-class kickboxing or MMA fighter!
              </h3>
              
              <div className="flex flex-col justify-center gap-4 mt-8 sm:flex-row">
                <Link
                  to="/registrations"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-300 transform bg-yellow-500 rounded-lg hover:bg-yellow-600 hover:scale-105"
                >
                  Register Now
                  <ChevronRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-yellow-500 transition-all duration-300 bg-transparent border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black"
                >
                  Contact Us
                  <Mail className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Connect Section */}
      {/* <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Connect With Us
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Stay up-to-date on events, news, and training opportunities
            </p>
            <div className="w-24 h-1 mx-auto mt-4 bg-yellow-500"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
                  <Calendar className="text-yellow-600" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Events & News</h3>
                <p className="text-gray-600">Regular updates on competitions, training camps, and federation news</p>
                <Link to="/news" className="inline-block mt-4 font-medium text-yellow-600 hover:text-yellow-700">
                  View News →
                </Link>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
                  <Phone className="text-yellow-600" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Get in Touch</h3>
                <p className="text-gray-600">Contact us for inquiries about training, membership, or partnerships</p>
                <Link to="/contact" className="inline-block mt-4 font-medium text-yellow-600 hover:text-yellow-700">
                  Contact →
                </Link>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Visit Us</h3>
                <p className="text-gray-600">Main federation office and training facilities in Addis Ababa</p>
                <a href="#" className="inline-block mt-4 font-medium text-yellow-600 hover:text-yellow-700">
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className='flex justify-center mx-auto my-52'>
        <h1 className='font-extrabold text-yellow-600 text-8xl '>
Comming Soon!
        </h1>
      </div>
      
    </div>
  );
};

export default About;