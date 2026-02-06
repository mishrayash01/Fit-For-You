import { Star, Dumbbell, Heart, Users, Award, TrendingUp, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="glass-card p-12 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Commit to Be Fit.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                The Ultimate Fitness Experience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              State-of-the-art equipment, professional trainers, and a motivating atmosphere at Fit For You
            </p>
            <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
              <div className="flex items-center gap-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <span className="text-3xl font-bold text-white">4.7</span>
                <span className="text-gray-300 text-lg">/ 5</span>
              </div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-200 text-lg">98+ Google Reviews</div>
              <div className="text-gray-400">•</div>
              <div className="text-gray-200 text-lg">100% Certified Trainers</div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="https://wa.me/918354855567">
                <Button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-6 text-lg">
                  Start Your Journey
                </Button>
              </a>
              <a href="tel:08354855567">
                <Button variant="outline" className="glass-button text-white border-white/30 px-8 py-6 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card p-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Vibe</h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-12">
              Our mission is to provide a total fitness experience. Led by Deepak Sir and our team of knowledgeable trainers, 
              we don't just instruct—we work out alongside you. We offer a hygienic, spacious environment with proper ventilation.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  4.7/5
                </div>
                <div className="text-gray-300">Star Rating</div>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  98+
                </div>
                <div className="text-gray-300">Google Reviews</div>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                  100%
                </div>
                <div className="text-gray-300">Certified Trainers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 text-center hover:scale-105 transition-all hover:shadow-cyan-500/20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Dumbbell className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Strength Training</h3>
              <p className="text-gray-300">Advanced machinery and free weights for maximum gains</p>
            </div>
            
            <div className="glass-card p-8 text-center hover:scale-105 transition-all hover:shadow-purple-500/20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Cardio Zone</h3>
              <p className="text-gray-300">Treadmills and endurance equipment for optimal health</p>
            </div>
            
            <div className="glass-card p-8 text-center hover:scale-105 transition-all hover:shadow-cyan-500/20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Users className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Group Classes</h3>
              <p className="text-gray-300">Yoga, Zumba, and Aerobics with expert instructors</p>
            </div>
            
            <div className="glass-card p-8 text-center hover:scale-105 transition-all hover:shadow-purple-500/20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Award className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Personal Training</h3>
              <p className="text-gray-300">Customized diet and workout plans for your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Pricing & Packages</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Monthly */}
            <div className="glass-card p-8 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Access</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                ₹1,500
                <span className="text-xl text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  All equipment access
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Group classes included
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Basic support
                </li>
              </ul>
              <Button className="w-full glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30">
                Choose Monthly
              </Button>
            </div>

            {/* Quarterly - Featured */}
            <div className="glass-card p-8 hover:scale-105 transition-all border-2 border-cyan-500/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quarterly Saver</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                ₹3,500
                <span className="text-xl text-gray-400">/3mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Everything in Monthly
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  10% savings
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Priority support
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  PT consultation
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                Choose Quarterly
              </Button>
            </div>

            {/* Personal Training */}
            <div className="glass-card p-8 hover:scale-105 transition-all">
              <h3 className="text-2xl font-bold text-white mb-4">Personal Training</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
                Custom
              </div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  One-on-one sessions
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Personalized diet plans
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Progress tracking
                </li>
                <li className="text-gray-200 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  Student discounts
                </li>
              </ul>
              <a href="tel:08354855567">
                <Button className="w-full glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30">
                  Contact for Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="glass-card p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Best gym in Jankipuram. The owner is a knowledgeable trainer & humblest person."
              </p>
              <p className="text-cyan-400 font-semibold">- Deepak Maurya</p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Therapy 🩷♾️. Best environment. Owner works out alongside members creating motivating atmosphere."
              </p>
              <p className="text-cyan-400 font-semibold">- Ishika Jaiswal</p>
            </div>

            <div className="glass-card p-6 hover:scale-105 transition-all">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">
                "Good equipment, friendly staff. Totally worth the money."
              </p>
              <p className="text-cyan-400 font-semibold">- Abhinav Tripathi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Visit Us</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map */}
            <div className="glass-card p-2 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0906778982043!2d80.89828831504216!3d26.841982283150534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93cc840ba5b2af8d!2sFIT%20FOR%20YOU(Gym%20and%20Fitness%20Center)!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="glass-card p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-200">
                      C-1/342, Sector G, Jankipuram<br />
                      Lucknow, Uttar Pradesh 226021
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Operating Hours</h3>
                    <p className="text-gray-200">
                      Monday - Saturday<br />
                      5:00 PM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
                    <a href="tel:08354855567" className="text-gray-200 hover:text-cyan-400 transition-colors">
                      +91 83548 55567
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <a href="https://wa.me/918354855567">
                    <Button className="w-full glass-button bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/40 hover:to-green-600/40 text-white border border-white/30">
                      Chat on WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="container mx-auto">
          <div className="glass-card p-8 text-center">
            <p className="text-gray-300 mb-4">
              © 2026 FIT FOR YOU Gym & Fitness Center. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Jankipuram, Lucknow | Making Fitness Accessible to Everyone
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
