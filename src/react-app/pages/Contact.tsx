import { useState } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/react-app/components/ui/button";
import { Input } from "@/react-app/components/ui/input";
import { Textarea } from "@/react-app/components/ui/textarea";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. ${formData.message}. My phone: ${formData.phone}, Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/918354855567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 px-4 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your fitness journey? Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name *</label>
                <Input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="glass-button text-white border-white/30"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="glass-button text-white border-white/30"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="glass-button text-white border-white/30"
                  placeholder="Enter your email (optional)"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message / Fitness Goals *</label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="glass-button text-white border-white/30 min-h-32"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-6 text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Map */}
            <div className="glass-card p-2 h-80">
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

            {/* Contact Details */}
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                    <p className="text-gray-200 leading-relaxed">
                      C-1/342, Sector G, Jankipuram<br />
                      Lucknow, Uttar Pradesh 226021
                    </p>
                    <a 
                      href="https://maps.google.com/?q=FIT+FOR+YOU+Gym+Jankipuram+Lucknow"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-sm mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <a href="tel:08354855567" className="text-gray-200 hover:text-cyan-400 transition-colors block">
                      +91 83548 55567
                    </a>
                    <a href="https://wa.me/918354855567" className="text-green-400 hover:text-green-300 text-sm mt-1 inline-block">
                      Chat on WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Operating Hours</h3>
                    <p className="text-gray-200">
                      Monday - Saturday<br />
                      5:00 PM - 10:00 PM
                    </p>
                    <p className="text-gray-400 text-sm mt-1">Closed Sundays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <a href="tel:08354855567">
                <Button className="w-full glass-button bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 text-white border border-white/30 py-6">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/918354855567">
                <Button className="w-full glass-button bg-gradient-to-r from-green-500/20 to-green-600/20 hover:from-green-500/40 hover:to-green-600/40 text-white border border-white/30 py-6">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Areas Served */}
        <div className="glass-card p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Areas We Serve</h2>
          <p className="text-gray-200 mb-6">
            Proudly serving the fitness community in Jankipuram and surrounding areas of Lucknow
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Jankipuram', 'Sector G', 'Lucknow', 'Gomti Nagar Extension', 'Aliganj', 'Shaheed Path'].map((area) => (
              <span key={area} className="glass-card px-4 py-2 text-gray-200">
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
