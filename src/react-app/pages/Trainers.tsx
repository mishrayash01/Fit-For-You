import { Award, Heart, TrendingUp, Users } from "lucide-react";

export default function Trainers() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Trainers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Knowledgeable, experienced, and dedicated to your success
          </p>
        </div>

        {/* Owner/Head Trainer Spotlight */}
        <div className="glass-card p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="glass-card p-2 overflow-hidden">
              <img 
                src="https://019c3234-3d27-7226-9633-fdfad39109cb.mochausercontent.com/unnamed-(1).jpg"
                alt="Deepak Sir - Owner and Head Trainer"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Deepak Sir</h2>
              <p className="text-cyan-400 text-xl mb-6">Owner & Head Trainer</p>
              <p className="text-gray-200 leading-relaxed mb-6">
                What sets Fit For You apart is our owner's hands-on approach. Deepak Sir doesn't just manage the gym—he 
                actively works out alongside members, creating an incredibly motivating and authentic atmosphere. His knowledge, 
                humility, and dedication inspire everyone who walks through our doors.
              </p>
              <p className="text-gray-200 leading-relaxed mb-6">
                With years of experience in fitness training and a genuine passion for helping others achieve their goals, 
                Deepak Sir leads by example. He believes that a trainer should practice what they preach, which is why you'll 
                often find him training right next to you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 text-center">
                  <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <p className="text-white font-bold">Certified Trainer</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-white font-bold">100+ Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What Makes Our Trainers Different */}
        <div className="glass-card p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Makes Our Trainers Special</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Knowledgeable & Experienced</h3>
                  <p className="text-gray-200">
                    Our trainers possess deep knowledge of exercise science, nutrition, and proper form. 
                    They provide correct guidance to help you achieve results safely and effectively.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Humble & Supportive</h3>
                  <p className="text-gray-200">
                    Our team is known for being humble, friendly, and genuinely supportive. They create a 
                    welcoming atmosphere where everyone feels comfortable, regardless of fitness level.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Work Out With You</h3>
                  <p className="text-gray-200">
                    Unlike many gyms where trainers just observe, our trainers actively work out alongside members. 
                    This creates a motivating environment and shows they practice what they preach.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Results-Focused</h3>
                  <p className="text-gray-200">
                    Our trainers are committed to helping you achieve your goals. They track progress, adjust programs, 
                    and provide the motivation you need to succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials About Trainers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What Members Say About Our Trainers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <p className="text-gray-200 mb-4 italic">
                "The owner is a knowledgeable trainer & humblest person I ever met. Very good ambience to work out."
              </p>
              <p className="text-cyan-400 font-semibold">- Deepak Maurya</p>
            </div>

            <div className="glass-card p-6">
              <p className="text-gray-200 mb-4 italic">
                "Good equipment, friendly staff. The trainers are well educated and guide you in a great manner."
              </p>
              <p className="text-cyan-400 font-semibold">- Suraj Saroj</p>
            </div>

            <div className="glass-card p-6">
              <p className="text-gray-200 mb-4 italic">
                "Trainers are very helpful and supportive. They give correct guidance and are very knowledgeable."
              </p>
              <p className="text-cyan-400 font-semibold">- Manish Singh</p>
            </div>

            <div className="glass-card p-6">
              <p className="text-gray-200 mb-4 italic">
                "The gym is really nice and all the coaches are well trained and knowledgeable. Very supportive staff."
              </p>
              <p className="text-cyan-400 font-semibold">- Swapnil Johri</p>
            </div>
          </div>
        </div>

        {/* Training Approach */}
        <div className="glass-card p-10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Training Approach</h2>
          <p className="text-gray-200 leading-relaxed text-center max-w-4xl mx-auto mb-8">
            At Fit For You, our trainers focus on creating personalized programs that match your fitness level, 
            goals, and preferences. Whether you're a beginner taking your first steps into fitness or an experienced 
            athlete looking to push your limits, our trainers will guide, motivate, and support you every step of the way.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assess</h3>
              <p className="text-gray-300">Understand your goals and current fitness level</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Plan</h3>
              <p className="text-gray-300">Create a customized workout and nutrition strategy</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Execute</h3>
              <p className="text-gray-300">Train together and adjust based on progress</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
