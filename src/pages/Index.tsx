import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Award, Shield, Clock, Calendar, Heart, Stethoscope, Phone, ArrowRight, CheckCircle, Users, Clipboard, PlusCircle, Zap, Brain, Thermometer, Baby, Eye, Bone, UtensilsCrossed,
  Microscope,
  Hospital,
  Syringe,
  MessageCircleHeart,
  Ambulance
} from 'lucide-react';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [appointmentDialogOpen, setAppointmentDialogOpen] = useState(false);

  const handleBookAppointment = () => {
    setAppointmentDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation onAppointmentClick={handleBookAppointment} />

      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      {/* 2. Quick Info Cards */}
      <motion.section
        className="py-12 md:py-16 bg-white relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-0 md:-mt-12 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">

            {/* Working Time */}
            <motion.div
              className="bg-[#169fe6] text-white p-6 md:p-7 lg:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Working Time</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Monday – Sunday</span>
                  <span className="font-bold">Open 24 Hours</span>
                </li>
                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Emergency Services</span>
                  <span className="font-bold">Available 24/7</span>
                </li>

                <li className="flex justify-between border-b border-white/20 pb-2">
                  <span>Inpatient Services</span>
                  <span className="font-bold">Continuous Monitoring</span>
                </li>
                <li className="flex justify-between">
                  <span>Consultations & Appointments</span>
                  <span className="font-bold">Available Anytime</span>
                </li>
              </ul>


            </motion.div>

            {/* Doctors Timetable */}
            <motion.div
              className="bg-[#0c8fd3] text-white p-6 md:p-7 lg:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Doctors Timetable</h3>
              <p className="text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                Check our weekly timetable to see when each doctor is available. Planning ahead helps you avoid long waits and ensures you meet the right specialist at the right time for your medical needs.
              </p>
              <button className="bg-white text-[#0c8fd3] font-medium text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-gray-100 transition">
                View Timetable
              </button>
            </motion.div>

            {/* Appointments */}
            <motion.div
              className="bg-[#0c7cc6] text-white p-6 md:p-7 lg:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Appointments</h3>
              <p className="text-sm md:text-base mb-5 md:mb-6 leading-relaxed">
                Book your appointment online or by phone at your convenience. We offer flexible scheduling options to fit your routine and reduce waiting times. Secure your spot early for faster, more efficient care.
              </p>
              <button className="bg-white text-[#0c7cc6] font-medium text-sm md:text-base px-5 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-gray-100 transition">
                Make an Appointment
              </button>
            </motion.div>

            {/* Emergency Cases */}
            <motion.div
              className="bg-[#0c69b5] text-white p-6 md:p-7 lg:p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-5">Emergency Cases</h3>
              <p className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 flex items-center gap-3">
                <span>051-4611200</span>
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                For urgent medical assistance, contact our 24/7 emergency line. Our experienced team is ready to help at any time.
              </p>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* 3. About Section - Complete Medical Solutions in One Place */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D1BAQHKoycNIXHKYg/company-background_10000/company-background_10000/0/1583639567756/medex_healthcare_co_cover?e=2147483647&v=beta&t=cxhITWOAEuXZ7PO7ZSVwbflxEqE2uBMWpRVzcZI5FpY"
                  alt="Hospital Team"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <Award className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">15+ Years</p>
                    <p className="text-sm text-gray-600">of Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="animate-fade-in"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Complete Medical Solutions in One Place
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">A Recognized Leader in Exceptional Healthcare</h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Sulman International  Hospital, we combine compassionate care with cutting-edge medical technology. Our approach centers on providing personalized healthcare experiences that address the unique needs of each patient.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Experienced Medical Professionals</p>
                    <p className="text-gray-600">Our talented team of doctors and specialists are committed to your health and well-being.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Advanced Medical Technology</p>
                    <p className="text-gray-600">We utilize the latest medical equipment and techniques to deliver exceptional care.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Patient-Centered Approach</p>
                    <p className="text-gray-600">Your comfort, dignity, and health are our top priorities throughout your care journey.</p>
                  </div>
                </li>
              </ul>

              {/* Signature of Head of Hospital */}
              {/* <div className="mb-6">
                <img 
                  src="https://cdn-ildceij.nitrocdn.com/DRnNUxiqxHnxDRbzoFypjebKFRSlJIyA/assets/images/optimized/rev-2118018/www.wisestamp.com/wp-content/uploads/2024/04/Michael-Jordan-personal-autograph.webp" 
                  alt="Director's Signature" 
                  className="h-16 mb-2"
                />
                <p className="font-medium">Dr. Michael Roberts</p>
                <p className="text-gray-600 text-sm">Chief Medical Director</p>
              </div> */}

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                  Learn More About Us
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg">
                  Our Doctors
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 4. Department Cards - Choose Department */}
      <motion.section
        className="py-16 bg-gray-50"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Our Departments
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Department</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized departments to address all your healthcare needs with expert care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Medicine", icon: Stethoscope, desc: "General care" },
              { name: "Cardiology", icon: Heart, desc: "Heart care" },
              { name: "Neurology", icon: Brain, desc: "Brain & nerve care" },
              { name: "Gastroenterology", icon: Microscope, desc: "Digestive care" },
              { name: "Pediatrics", icon: Baby, desc: "Child healthcare" },
              { name: "Orthopedics", icon: Bone, desc: "Bone & joint care" },
            ].map((dept, idx) => (
              <motion.div
                key={idx}
                className="bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-all p-6 text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <dept.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-1">{dept.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{dept.desc}</p>
                <Button variant="link" className="text-blue-500 p-0 hover:text-blue-700">
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              See All Departments
            </Button>
          </div>
        </div>
      </motion.section>


      {/* 5. Highest Quality Care Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Highest Quality Care
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Solutions to Complex Medical Problems</h2>
              <p className="text-gray-600 mb-8">
                Our specialists tackle even the most challenging medical conditions with advanced technology and evidence-based approaches, offering hope and healing to patients with complex needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Multidisciplinary approach to complex cases</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Advanced diagnostic capabilities</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="font-medium">Innovative treatment protocols</p>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-xl overflow-hidden">
                <img
                  src="https://immigrantinvest.com/_next/image/?url=https%3A%2F%2F9zkkfwp3kz3ung7j.public.blob.vercel-storage.com%2FCI5-S2K-8ZX-FLN%2Fstoryblok.jpeg&w=3840&q=75"
                  alt="Clinic Overview"
                  className="w-full h-96 object-cover"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-10 md:py-20 bg-blue-600 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="md:order-2 " /* Reversed order for mobile */
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl  shadow-2xl mb-6 md:mb-0 hidden lg:block ">
                <img
                  src="https://media.assettype.com/newindianexpress%2F2024-07%2F6cf84595-4d0d-42c3-b6ef-23d97ac0c3b1%2FHealthcare.jpg"
                  alt="Innovative Medical Technology"
                  className="w-full h-auto"
                />
                {/* Floating card over the image */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl w-64 z-10  ">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="font-bold text-gray-800">8,500+</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-snug">Patients helped annually with innovative treatments</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="md:order-1" /* Reversed order for mobile */
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1 bg-white text-blue-600 rounded-full text-sm font-medium mb-4">
                Best Practices
              </div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Clinic with Innovative Approach to Treatment</h2>
              <p className="text-white/90 text-lg md:text-xl mb-8">
                We combine traditional medical excellence with cutting-edge innovations to provide treatments that are both effective and forward-thinking, delivering exceptional outcomes for our patients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Evidence-Based Care</h3>
                  <p className="text-white/80">All our treatments are backed by rigorous research and clinical evidence</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
                  <p className="text-white/80">State-of-the-art equipment for accurate diagnosis and treatment</p>
                </div>
              </div>

              <Button variant="outline" size="lg" className="border-white text-blue-800 hover:bg-white/80 hover:text-blue-800">
                Discover Our Approach
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>




      {/* 7. Total Health Care Solutions Section */}
      <section className="hidden md:block py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center mb-12 px-2"
          >
            <h2 className="text-4xl font-bold text-gray-800">Total Health Care Solutions</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Offering personalized and reliable care to support your health and wellness every day.
            </p>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-3 gap-2">
            {/* Left: Feature Cards */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-0 ">
              {[
                {
                  icon: <Stethoscope className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Top Level Doctors",
                  desc: "Expert physicians offering specialized and primary care."
                },
                {
                  icon: <Microscope className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Modern Equipment",
                  desc: "Advanced diagnostic tools for accurate treatment."
                },
                {
                  icon: <Hospital className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Qualified Facilities",
                  desc: "State-of-the-art infrastructure and hygiene."
                },
                {
                  icon: <Syringe className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Professional Services",
                  desc: "Routine and specialized treatments delivered with care."
                },
                {
                  icon: <MessageCircleHeart className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Medical Counseling",
                  desc: "Personalized mental and physical wellness support."
                },
                {
                  icon: <Ambulance className="text-blue-600 w-10 h-10 mb-3" />,
                  title: "Emergency Help",
                  desc: "24/7 medical emergency and ambulance assistance."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  className="bg-white border border-gray-300 px-4 py-5 rounded-lg min-h-[120px] flex flex-col items-center text-center hover:bg-blue-100 transition"
                >
                  {item.icon}
                  <h4 className="text-md-15 font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Right: Opening Hours Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
              className="bg-blue-600 text-white p-8 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold mb-3">Opening Hours:</h3>
                <p className="text-sm mb-6 leading-relaxed">
                  We Are Committed to Serving You with the Utmost Care and Dedication—Your Health Is Our Priority.
                </p>
                <ul className="text-sm border-t border-white/30 pt-4 space-y-3">
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex justify-between border-b border-white/20 pb-2">
                      <span>Monday – Sunday</span>
                      <span className="font-bold">Open 24 Hours</span>
                    </li>
                    <li className="flex justify-between border-b border-white/20 pb-2">
                      <span>Emergency Services</span>
                      <span className="font-bold">Available 24/7</span>
                    </li>
                    <li className="flex justify-between border-b border-white/20 pb-2">
                      <span>Outpatient Care</span>
                      <span className="font-bold">Flexible Scheduling</span>
                    </li>
                    <li className="flex justify-between border-b border-white/20 pb-2">
                      <span>Inpatient Services</span>
                      <span className="font-bold">Continuous Monitoring</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Consultations & Appointments</span>
                      <span className="font-bold">Available Anytime</span>
                    </li>
                  </ul>


                </ul>
              </div>
              <div className="mt-6 border-t border-white/30 pt-4">
                <h4 className="font-semibold mb-2">Need a personal health plan?</h4>
                <p className="text-sm">
                  Get a customized health plan tailored to your needs. Our experts are ready to help you achieve your wellness goals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Medical Specialists Section - Duplicating doctor section with different title to match reference */}
      {/* 10. Qualified Doctors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Qualified Doctors
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Specialists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced healthcare professionals dedicated to your wellbeing
            </p>
          </motion.div>

          {/* Doctor Grid */}
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[
              {
                name: "Dr. Azhar ul Hassan",
                qualification: "MBBS, IMC (Cardiology)",
                specialty: "Cardiologist",
                department: "Cardiology",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-1.jpg"
              },
              {
                name: "Dr. Dilawaiz",
                qualification: "DPT (Doctor of Physical Therapy)",
                specialty: "Physiotherapist",
                department: "Physiotherapy",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-2.jpg"
              },
              {
                name: "Dr. Nazia Waheed",
                qualification: "MBBS, FCPS (Radiology)",
                specialty: "Radiologist",
                department: "Radiology & Imaging",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-3.jpg"
              },
              {
                name: "Dr. Sadia",
                qualification: "MBBS (Emergency Medicine)",
                specialty: "Emergency Response Doctor",
                department: "Emergency",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-4.jpg"
              },
              {
                name: "Dr. Shahzaib Patoli",
                qualification: "BDS, MDS (Dentistry)",
                specialty: "Dentist",
                department: "Dentistry",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-1.jpg"
              },
              {
                name: "Dr. Waqar Cheema",
                qualification: "MBBS, FCPS (Internal Medicine)",
                specialty: "General Physician",
                department: "General Medicine",
                image: "https://jthemes.net/themes/html/medservices/files/images/doctor-2.jpg"
              }

            ].map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <Button variant="outline" size="sm" className="bg-white/20 text-white border-white hover:bg-white/40">
                        View Profile
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium">{doctor.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link to="./doctors">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                View All Doctors
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Modern Medicine Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Modern Medicine
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Better Technologies for Better Healthcare</h2>
              <p className="text-gray-600 mb-8 text-lg">
                We've invested in the latest medical technologies to provide you with more accurate diagnoses, less invasive procedures, and faster recovery times.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Advanced Imaging</h3>
                    <p className="text-gray-600">High-resolution imaging for precise diagnosis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Robotic Surgery</h3>
                    <p className="text-gray-600">Minimally invasive procedures with faster recovery</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-1.5 rounded-full mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Digital Records</h3>
                    <p className="text-gray-600">Secure electronic health records for better coordination</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                Explore Our Technology
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <div className="relative">
                <img
                  src="https://almadinadiagnostic.com/assets/img/department/Pathology-Lab-Management-Software.jpg"
                  alt="Modern Medical Technology"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Shield className="h-10 w-10" />
                    <div>
                      <p className="font-bold text-xl">99.7%</p>
                      <p className="text-sm text-white/80">Diagnostic Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. News & Blog Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
              Latest News
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Stories, Tips & Latest News</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest medical news, health tips, and hospital updates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Understanding Heart Health: Prevention Tips",
                excerpt: "Learn about the latest research on heart disease prevention and heart-healthy lifestyle choices.",
                date: "May 15, 2023",
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Advances in Pediatric Care at Sulman International Hospital",
                excerpt: "Discover our new pediatric wing and specialized treatments available for young patients.",
                date: "June 02, 2023",
                image: "https://healthier.stanfordchildrens.org/wp-content/uploads/2022/06/21_1299711083_iStock-scaled.jpg"
              },
              {
                title: "Mental Health Awareness: Seeking Help Early",
                excerpt: "Understanding the importance of mental health and when to consult with healthcare professionals.",
                date: "June 24, 2023",
                image: "https://media.istockphoto.com/id/1470219517/photo/doctor-surgeon-and-neurologist-use-robotic-and-medical-technology-diagnose-and-examine.jpg?s=612x612&w=0&k=20&c=zPmI9WvScFbiM_jzHq3W3uSQD02dnWf2GDs84u1dl7s="
              }
            ].map((article, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-blue-600 text-sm font-medium mb-2">{article.date}</p>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{article.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                    <Link to="/blog">
                      <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-lg">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 12. CTA Section */}
      <section className="relative py-20 bg-blue-800 text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/593305618/photo/putting-their-skills-to-good-use.jpg?s=612x612&w=0&k=20&c=_5_-dWH79KXUt0GXHgnzswN_rYQoNM425Ru4fPtE5OE=')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h2 className="text-4xl font-bold mb-4">Take the First Step to Help</h2>
            <p className="text-xl text-white/90 mb-6">
              Your health is your most valuable asset—don’t put it on hold. Whether you're dealing with a specific concern or just need a routine check-up, our experienced medical professionals are here to provide expert guidance and compassionate care. Contact us today to schedule your appointment and take the first step toward a healthier, more confident you.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <div className="flex flex-col">
                <p className="text-sm">Call Sulman International Hospital Now</p>
                <p className="text-2xl font-bold">(123) 456-7890</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 13. Footer */}
      <Footer />

      {/* Live Chat Widget */}
      <div className="fixed bottom-12 right-6 z-50">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg animate-pulse-soft"
        >
          <MessageCircle className="h-6 w-6 mr-2" />
          Live Chat
        </Button>
      </div>

      {/* Appointment Dialog */}
      <AppointmentForm
        open={appointmentDialogOpen}
        onOpenChange={setAppointmentDialogOpen}
      />
    </div>
  );
};
export default Index;