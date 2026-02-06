import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "jyotirendra",
    rating: 5,
    text: "I've been going to 'Fit For You' in Jankipuram since 2023 and it has been an incredible experience. One of the things that makes this gym stand out is that the owner actually works out alongside members, creating a motivating and friendly atmosphere.",
    highlight: "Owner works out with members"
  },
  {
    name: "Deepak Maurya",
    rating: 5,
    text: "The owner is knowledgeable trainer & humblest person I ever met. The gym is spacious hygienic & equipments are of state of art facilities. Very good ambience to work out. Totally worth the money recommend 5 stars...",
    highlight: "State-of-art facilities"
  },
  {
    name: "Abhinav Tripathi",
    rating: 5,
    text: "Nice neighborhood gym. Good equipment, friendly staff. Relatively cheap: 1.5k per month, 3.5k for 3 months if you want to access cardio and weight equipment.",
    highlight: "Good equipment, friendly staff"
  },
  {
    name: "Raunak Tiwari",
    rating: 5,
    text: "Best gym with best working environment. The atmosphere is incredibly motivating and the trainers are very supportive.",
    highlight: "Best working environment"
  },
  {
    name: "Manish Singh",
    rating: 5,
    text: "Good place to workout with all machines in good condition. Knowledgeable trainer and gives correct guidance. Very helpful staff. Most important very hygienic.",
    highlight: "Very hygienic"
  },
  {
    name: "Sonam Sharma",
    rating: 5,
    text: "A great place to get in shape with ample equipment and fantastic trainers to keep you motivated, challenged & engaged. The location is extremely convenient and prices are reasonable. Highly recommended!",
    highlight: "Fantastic trainers"
  },
  {
    name: "Suraj Saroj",
    rating: 5,
    text: "Great place to keep your body fit. Trainers are well educated and guiding you in great manner. Most important you will find all packages in very economical budget.",
    highlight: "Economical packages"
  },
  {
    name: "Swapnil Johri",
    rating: 5,
    text: "The gym is really nice and all the coaches are well trained and knowledgeable. The overall staff is also really supportive.",
    highlight: "Well trained coaches"
  },
  {
    name: "Ishika Jaiswal",
    rating: 5,
    text: "Therapy 🩷♾️. Best environment. The motivating atmosphere created by the owner and trainers is unmatched.",
    highlight: "Best environment"
  },
  {
    name: "Aatman Mishra",
    rating: 5,
    text: "Spacious Gym with Proper Ventilation. Owner is very friendly and Trainers are also good.",
    highlight: "Proper ventilation"
  },
  {
    name: "DeepabaleeSaha1994",
    rating: 5,
    text: "This place is the ultimate experience for the ones who wanna really lose weight and experience the thrill beyond the fat life. This is gonna bring you so much positivity and the nature of the owner Deepak Sir and the trainers are also so good. You can also opt for PT here.",
    highlight: "Ultimate experience"
  },
  {
    name: "Rahul Srivastava",
    rating: 5,
    text: "Good trainers, advance equipment and good gentry makes it perfect. Nice gym.",
    highlight: "Advance equipment"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Customer Reviews</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            See what our members have to say about their fitness journey
          </p>
          
          {/* Rating Summary */}
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                4.7
              </div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-8 h-8 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-yellow-400 opacity-70'}`} />
                  ))}
                </div>
                <p className="text-gray-300">Based on 98+ Google Reviews</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap text-sm text-gray-400">
              <span>★★★★★ Rated</span>
              <span>•</span>
              <span>100% Certified Trainers</span>
              <span>•</span>
              <span>5+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div key={index} className="glass-card p-6 hover:scale-105 transition-all relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-400/20" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-200 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-cyan-400 font-semibold mb-1">- {review.name}</p>
                <p className="text-xs text-gray-400 italic">{review.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights from Reviews */}
        <div className="glass-card p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Most Mentioned Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                #1
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Knowledgeable Trainers</h3>
              <p className="text-sm text-gray-300">Expert guidance & support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                #2
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Owner Involvement</h3>
              <p className="text-sm text-gray-300">Works out with members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                #3
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Equipment Quality</h3>
              <p className="text-sm text-gray-300">State-of-art facilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
                #4
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Value for Money</h3>
              <p className="text-sm text-gray-300">Affordable & worth it</p>
            </div>
          </div>
        </div>

        {/* Featured Review */}
        <div className="glass-card p-10 text-center border-2 border-cyan-500/50">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <Quote className="w-16 h-16 text-cyan-400/30 mx-auto mb-6" />
          <p className="text-2xl text-gray-200 mb-6 italic max-w-4xl mx-auto leading-relaxed">
            "I've been going to 'Fit For You' in Jankipuram since 2023 and it has been an incredible experience. 
            One of the things that makes this gym stand out is that the owner actually works out alongside members, 
            creating a motivating and friendly atmosphere."
          </p>
          <p className="text-cyan-400 font-bold text-xl">- jyotirendra</p>
          <p className="text-gray-400 mt-2">Long-term member since 2023</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center glass-card p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Become part of the Fit For You family and experience the difference that a supportive, 
            motivating environment can make in your fitness journey.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/918354855567">
              <button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-3 rounded-lg transition-all">
                Start Your Journey
              </button>
            </a>
            <a href="tel:08354855567">
              <button className="glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 px-8 py-3 rounded-lg transition-all">
                Call: 083548 55567
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
