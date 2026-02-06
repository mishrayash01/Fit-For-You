import { Check, Star, TrendingUp, Phone } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Pricing & Packages</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Affordable excellence. Quality fitness that fits your budget.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Monthly Plan */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Monthly Access</h2>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                ₹1,500
              </div>
              <p className="text-gray-400">per month</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Full access to all equipment</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Group classes included</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Access during all operating hours</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Basic trainer support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Locker facility</span>
              </li>
            </ul>
            <a href="tel:08354855567">
              <Button className="w-full glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30">
                Choose Monthly
              </Button>
            </a>
          </div>

          {/* Quarterly Plan - Featured */}
          <div className="glass-card p-8 hover:scale-105 transition-all border-2 border-cyan-500/50 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-1 rounded-full text-sm font-bold shadow-lg">
              BEST VALUE - SAVE 10%
            </div>
            <div className="text-center mb-6 mt-2">
              <h2 className="text-2xl font-bold text-white mb-2">Quarterly Saver</h2>
              <p className="text-gray-400">Most popular choice</p>
            </div>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                ₹3,500
              </div>
              <p className="text-gray-400">for 3 months</p>
              <p className="text-green-400 text-sm mt-2">Save ₹1,000!</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Everything in Monthly plan</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">10% discount (₹1,000 savings)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Priority trainer support</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Free personal trainer consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Progress tracking included</span>
              </li>
            </ul>
            <a href="tel:08354855567">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg">
                Choose Quarterly
              </Button>
            </a>
          </div>

          {/* Personal Training */}
          <div className="glass-card p-8 hover:scale-105 transition-all">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Personal Training</h2>
              <p className="text-gray-400">Customized for you</p>
            </div>
            <div className="text-center mb-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                Custom
              </div>
              <p className="text-gray-400">contact for pricing</p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">One-on-one training sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Customized workout programs</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Personalized nutrition plans</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">Weekly progress tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200">24/7 trainer support</span>
              </li>
            </ul>
            <a href="tel:08354855567">
              <Button className="w-full glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30">
                <Phone className="w-5 h-5 mr-2" />
                Contact for Pricing
              </Button>
            </a>
          </div>
        </div>

        {/* Special Offers */}
        <div className="glass-card p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Special Offers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <h3 className="text-xl font-bold text-white">Student Discount</h3>
              </div>
              <p className="text-gray-200 mb-4">
                Special economical packages available for students. Show your valid student ID to avail this offer.
              </p>
              <p className="text-cyan-400 font-semibold">Contact us for details</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Flexible Payment</h3>
              </div>
              <p className="text-gray-200 mb-4">
                We offer flexible payment options to make fitness accessible to everyone. Ask about our payment plans.
              </p>
              <p className="text-cyan-400 font-semibold">Totally worth the money</p>
            </div>
          </div>
        </div>

        {/* Why Our Pricing */}
        <div className="glass-card p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Why Choose Our Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Best Value</h3>
              <p className="text-gray-300">
                Competitive pricing with no compromise on quality. Save more with longer commitments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Star className="w-10 h-10 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">No Hidden Fees</h3>
              <p className="text-gray-300">
                What you see is what you pay. Transparent pricing with no surprise charges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                <Check className="w-10 h-10 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Quality</h3>
              <p className="text-gray-300">
                State-of-art facilities, certified trainers, and excellent equipment at affordable prices.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial About Value */}
        <div className="glass-card p-10 text-center">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-xl text-gray-200 mb-4 italic max-w-3xl mx-auto">
            "Nice neighborhood gym. Good equipment, friendly staff. Relatively cheap: 1.5k per month, 
            3.5k for 3 months if you want to access cardio and weight equipment. Totally worth the money!"
          </p>
          <p className="text-cyan-400 font-semibold text-lg">- Abhinav Tripathi</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/918354855567">
              <Button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-6 text-lg">
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:08354855567">
              <Button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call: 083548 55567
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
