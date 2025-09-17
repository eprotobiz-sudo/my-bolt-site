import React, { useState } from 'react';
import { 
  Home, 
  Shield, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  Star,
  CheckCircle,
  Hammer,
  Wrench,
  PaintBucket,
  Zap,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-700 text-white relative">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="text-2xl font-bold">
              <span className="text-yellow-500">FOREMOST</span>
              <div className="text-sm font-light tracking-wider">RESTORATION</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="hover:text-yellow-500 transition-colors">Services</a>
            <a href="#about" className="hover:text-yellow-500 transition-colors">About</a>
            <a href="#portfolio" className="hover:text-yellow-500 transition-colors">Portfolio</a>
            <a href="#testimonials" className="hover:text-yellow-500 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <a href="#services" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Services</a>
              <a href="#about" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>About</a>
              <a href="#portfolio" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Portfolio</a>
              <a href="#testimonials" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Reviews</a>
              <a href="#contact" className="hover:text-yellow-500 transition-colors" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-500">RELIABLE</span> RESTORATION
              <br />
              <span className="text-3xl md:text-4xl font-light">FOR EVERY BUDGET</span>
            </h1>
            
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
              Indianapolis homeowners trust Foremost Restoration for high-quality roofing, siding, 
              and remodeling projects that combine professional craftsmanship with affordable pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 text-lg transition-colors duration-300 transform hover:scale-105">
                GET FREE ESTIMATE
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-8 text-lg transition-all duration-300">
                CALL (317) 555-0123
              </button>
            </div>
          </div>
        </div>
        
        {/* Geometric Accent */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-500"></div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully certified and protected for your peace of mind</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Award className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Proven track record of quality workmanship</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Home className="text-yellow-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Local Indianapolis</h3>
              <p className="text-gray-600">Serving our community with reliable restoration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OUR <span className="text-yellow-500">SERVICES</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From storm damage restoration to home improvements, we deliver quality results 
              that fit your budget and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <Home className="text-white group-hover:text-gray-900" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">Roofing</h3>
              <p className="text-gray-400">Complete roof replacements, repairs, and storm damage restoration</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <Hammer className="text-white group-hover:text-gray-900" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">Siding</h3>
              <p className="text-gray-400">Vinyl, fiber cement, and wood siding installation and repair</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <Wrench className="text-white group-hover:text-gray-900" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">Windows & Doors</h3>
              <p className="text-gray-400">Energy-efficient window and door replacement solutions</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                <PaintBucket className="text-white group-hover:text-gray-900" size={36} />
              </div>
              <h3 className="text-xl font-bold mb-4">Interior Remodeling</h3>
              <p className="text-gray-400">Kitchen, bathroom, and whole-home renovation projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                WHY <span className="text-yellow-500">FOREMOST</span>?
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-yellow-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Quality That Lasts</h3>
                    <p className="text-gray-600">We use only premium materials and proven techniques to ensure your investment stands the test of time.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-yellow-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Honest, Transparent Pricing</h3>
                    <p className="text-gray-600">No hidden costs or surprise fees. We provide detailed estimates and work within your budget.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-yellow-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Local Experts</h3>
                    <p className="text-gray-600">Indianapolis-based team who understands local building codes, weather patterns, and community needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle className="text-yellow-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Satisfaction Guarantee</h3>
                    <p className="text-gray-600">Your project isn't complete until you're 100% satisfied with the results.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Quality construction work"
                className="w-full h-96 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-yellow-500 text-gray-900 p-8 font-bold text-2xl shadow-xl">
                15+ YEARS<br />
                <span className="text-lg font-normal">OF EXCELLENCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-300">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              CLIENT <span className="text-yellow-500">REVIEWS</span>
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Foremost Restoration transformed our storm-damaged roof into something beautiful. 
                Professional, punctual, and priced right. Highly recommend!"
              </p>
              <div className="font-bold text-gray-800">— Sarah M., Carmel</div>
            </div>

            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Outstanding quality and customer service. They completed our siding project 
                on time and within budget. Couldn't be happier with the results!"
              </p>
              <div className="font-bold text-gray-800">— Mike T., Fishers</div>
            </div>

            <div className="bg-gray-50 p-8 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "From estimate to completion, Foremost was transparent, reliable, and delivered 
                exceptional work. Our kitchen remodel exceeded expectations!"
              </p>
              <div className="font-bold text-gray-800">— Jennifer L., Indianapolis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="bg-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                READY TO GET <span className="text-yellow-500">STARTED</span>?
              </h2>
              <div className="w-24 h-1 bg-yellow-500 mb-8"></div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Contact Foremost Restoration today for your free, no-obligation estimate. 
                We'll assess your project and provide transparent pricing that fits your budget.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="text-yellow-500" size={24} />
                  <span className="text-lg">(317) 555-0123</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-yellow-500" size={24} />
                  <span className="text-lg">info@foremostrestoration.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-yellow-500" size={24} />
                  <span className="text-lg">Serving Greater Indianapolis Area</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Estimate</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    className="w-full p-4 border border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-4 border border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number"
                    className="w-full p-4 border border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800"
                  />
                </div>
                <div>
                  <select className="w-full p-4 border border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800">
                    <option>Select Service Needed</option>
                    <option>Roofing</option>
                    <option>Siding</option>
                    <option>Windows & Doors</option>
                    <option>Interior Remodeling</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <textarea 
                    rows={4}
                    placeholder="Project Details"
                    className="w-full p-4 border border-gray-300 focus:border-yellow-500 focus:outline-none text-gray-800"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 text-lg transition-colors duration-300"
                >
                  GET FREE ESTIMATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                <span className="text-yellow-500">FOREMOST</span>
                <div className="text-sm font-light tracking-wider">RESTORATION</div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Indianapolis's trusted general contractor for reliable, 
                high-quality restoration and remodeling services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Roofing</li>
                <li>Siding</li>
                <li>Windows & Doors</li>
                <li>Interior Remodeling</li>
                <li>Storm Damage Repair</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>(317) 555-0123</div>
                <div>info@foremostrestoration.com</div>
                <div>Licensed & Insured</div>
                <div>Emergency Service Available</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Foremost Restoration. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;