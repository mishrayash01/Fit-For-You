import { Dumbbell, Heart, Users, Award, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function Services() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need for your fitness journey under one roof
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Strength Training */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <Dumbbell className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Strength Training</h2>
            <p className="text-gray-200 mb-6">
              Build muscle and increase strength with our comprehensive free weights and machine selection. 
              From barbells and dumbbells to cable machines and smith machines, we have everything for serious lifters.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Olympic barbells and plates
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Complete dumbbell sets
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Modern weight machines
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Power racks and benches
              </li>
            </ul>
          </div>

          {/* Cardio Zone */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Heart className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Cardio Zone</h2>
            <p className="text-gray-200 mb-6">
              Boost your cardiovascular health and burn calories with our premium cardio equipment. 
              Each machine features modern displays and comfort features for the best workout experience.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Treadmills with advanced features
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Stationary bikes
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Cross trainers
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Rowing machines
              </li>
            </ul>
          </div>

          {/* Group Classes */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
              <Users className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Group Classes</h2>
            <p className="text-gray-200 mb-6">
              Join our energetic group fitness classes for a fun and motivating workout experience. 
              All classes are led by certified instructors who make fitness enjoyable.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Zumba dance fitness
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Yoga sessions
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Aerobics classes
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                Group strength training
              </li>
            </ul>
          </div>

          {/* Personal Training */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
              <Award className="w-10 h-10 text-purple-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Personal Training</h2>
            <p className="text-gray-200 mb-6">
              Get personalized attention and customized programs designed specifically for your goals. 
              Our certified trainers provide expert guidance every step of the way.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                One-on-one training sessions
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Custom workout plans
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Personalized nutrition guidance
              </li>
              <li className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-400" />
                Progress tracking and adjustments
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 text-center hover:scale-105 transition-all">
            <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">CrossFit Training</h3>
            <p className="text-gray-300">High-intensity functional training for maximum results</p>
          </div>

          <div className="glass-card p-6 text-center hover:scale-105 transition-all">
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Online Classes</h3>
            <p className="text-gray-300">Train from anywhere with our virtual workout sessions</p>
          </div>

          <div className="glass-card p-6 text-center hover:scale-105 transition-all">
            <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Nutrition Guidance</h3>
            <p className="text-gray-300">Expert diet plans to complement your fitness goals</p>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-10 mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Join Fit For You today and experience the difference that quality equipment, 
            expert trainers, and a motivating environment can make.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/918354855567">
              <Button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-6 text-lg">
                Join Now
              </Button>
            </a>
            <a href="tel:08354855567">
              <Button variant="outline" className="glass-button text-white border-white/30 px-8 py-6 text-lg">
                Call Us
              </Button>
            </a>
          </div>
        </div>

        {/* Gym Images */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="glass-card p-2 overflow-hidden">
            <img 
              src="https://019c3234-3d27-7226-9633-fdfad39109cb.mochausercontent.com/unnamed.jpg"
              alt="Gym equipment view"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="glass-card p-2 overflow-hidden">
            <img 
              src="https://019c3234-3d27-7226-9633-fdfad39109cb.mochausercontent.com/unnamed-(1).jpg"
              alt="Gym exterior"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
