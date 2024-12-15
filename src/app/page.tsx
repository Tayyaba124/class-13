import Link from 'next/link'
import React from 'react'
import { FaInfoCircle, FaTools } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-black min-h-screen text-stone-50">
      {/* Main header section */}
      <div className="flex justify-between items-center px-10 py-6 font-extrabold text-2xl border-b-2 border-purple-900">
        <img 
          src="/logo.PNG"
          alt="Tayyaba Shoukat's Profile Icon"
          className="object-cover w-28 h-28 rounded-full shadow-md"
        />
        <nav className="space-x-6 text-lg">
          <Link className="hover:text-violet-600" href={''}>About</Link>
          <Link className="hover:text-violet-600" href={''}>Skills</Link>
          <Link className="hover:text-violet-600" href={''}>Projects</Link>
          <Link className="hover:text-violet-600" href={''}>Contact</Link>
        </nav>
      </div>

      {/* Welcome section with a title and description */}
      <div className="text-center mt-24">
        <h1 className="text-4xl font-bold text-violet-500">Welcome to TechSphere Academy!</h1>
        <p className="mt-4 text-xl text-stone-200">
          At <span className="font-bold text-violet-500">TechSphere Academy</span>, we bring you an online platform 
          that empowers students and professionals to master essential tech skills from anywhere, at any time. 
          Whether you're looking to learn web development, enhance your programming expertise, or explore cutting-edge technologies, 
          we're here to guide you every step of the way.
        </p>
      </div>

      {/* Benefits of learning online section */}
      <div className="mt-12 text-center text-xl text-stone-200">
        <h2 className="text-2xl font-bold text-violet-500">Why Learn at TechSphere Academy?</h2>
        <ul className="mt-6 space-y-4">
          <li>💡 **Practical Skills**: Learn hands-on skills that are directly applicable to real-world projects and career paths.</li>
          <li>📚 **Expert Guidance**: Our experienced instructors guide you through complex concepts and ensure you build a solid foundation.</li>
          <li>🚀 **Career Advancement**: Mastering tech skills opens up endless career opportunities and keeps you ahead in the competitive job market.</li>
          <li>🎓 **Personalized Learning**: Our online platform adapts to your pace and learning style, allowing you to study whenever and wherever you want.</li>
          <li>🤝 **Networking Opportunities**: Connect with like-minded learners and industry professionals through our vibrant online community.</li>
        </ul>
      </div>

      {/* Second image section */}
      <div className="flex justify-center mt-12">
        <img 
          src="/picture.PNG"
          alt="Tayyaba Shoukat's Profile Icon"
          className="object-cover w-64 h-64 rounded-full shadow-2xl shadow-white border-4 border-violet-500"
        />
      </div>

      {/* Icon section for additional information */}
      <div className="flex justify-center mt-10 space-x-10">
        <div className="flex flex-col items-center">
          <FaInfoCircle size={50} className="text-violet-500" />
          <h2 className="mt-2 text-xl font-bold">Learn More</h2>
        </div>
        <div className="flex flex-col items-center">
          <FaTools size={50} className="text-violet-500" />
          <h2 className="mt-2 text-xl font-bold">Our Services</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
