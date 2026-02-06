import { Users, Heart, Award, Target } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Fit For You</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your journey to a healthier, stronger you starts here
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
            Our mission is to provide a total fitness experience. Led by Deepak Sir and our team of knowledgeable trainers, 
            we don't just instruct—we work out alongside you. We offer a hygienic, spacious environment with proper ventilation, 
            state-of-the-art equipment, and a motivating atmosphere that makes every workout enjoyable and effective.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card p-8 text-center hover:scale-105 transition-all">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <Users className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300">Building a supportive fitness family</p>
          </div>

          <div className="glass-card p-8 text-center hover:scale-105 transition-all">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Heart className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Passion</h3>
            <p className="text-gray-300">We love what we do and it shows</p>
          </div>

          <div className="glass-card p-8 text-center hover:scale-105 transition-all">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Award className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
            <p className="text-gray-300">Quality equipment and training</p>
          </div>

          <div className="glass-card p-8 text-center hover:scale-105 transition-all">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Target className="w-10 h-10 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Results</h3>
            <p className="text-gray-300">Your goals are our priority</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="glass-card p-10">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Fit For You?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Expert Leadership</h3>
              <p className="text-gray-200 mb-6">
                Owner Deepak Sir isn't just a manager—he's an active member who trains alongside you, creating an 
                incredibly motivating and authentic atmosphere.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">State-of-Art Facilities</h3>
              <p className="text-gray-200 mb-6">
                Our spacious gym features modern equipment in excellent condition, proper ventilation, and a 
                hygienic environment that's maintained to the highest standards.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">Affordable Excellence</h3>
              <p className="text-gray-200">
                Quality fitness shouldn't break the bank. We offer competitive pricing with student discounts 
                and economical packages starting at just ₹1,500/month.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Certified Trainers</h3>
              <p className="text-gray-200 mb-6">
                Our team of knowledgeable, experienced trainers provide proper guidance and support. They're not 
                just instructors—they're motivators and mentors.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">Variety of Programs</h3>
              <p className="text-gray-200 mb-6">
                From strength training and cardio to group classes like Yoga and Zumba, we offer diverse options 
                to keep your fitness journey engaging and effective.
              </p>

              <h3 className="text-xl font-bold text-cyan-400 mb-3">Proven Results</h3>
              <p className="text-gray-200">
                With a 4.7/5 rating from 98+ satisfied members, our track record speaks for itself. Join the 
                Fit For You family and transform your life.
              </p>
            </div>
          </div>
        </div>

        {/* Gym Images */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="glass-card p-2 overflow-hidden">
            <img 
              src="https://019c3234-3d27-7226-9633-fdfad39109cb.mochausercontent.com/IMG-20210710-WA0014.webp"
              alt="Gym interior"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="glass-card p-2 overflow-hidden">
            <img 
              src="https://019c3234-3d27-7226-9633-fdfad39109cb.mochausercontent.com/IMG-20210722-WA0017.jpg"
              alt="Gym equipment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
