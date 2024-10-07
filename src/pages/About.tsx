function About() {
  return (
    <div className="mt-28 text-center px-6">
      {/* What is Hack Section */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:w-3/4 text-justify">
          <h1 className="text-4xl font-bold" style={{ color: '#d742f5' }}>What is Hack?</h1>
          <p className="mt-6 text-lg text-gray-700">
            We are a student-run organization whose mission is to empower the community by providing the means to build 
            amazing things and explore what is possible through code. We teach quarterly workshops and host events for 
            students to expand their knowledge and apply their creativity to projects. Our events are for coders of all 
            skill levels, so whether you've been to 10 hackathons or you just learned "Hello World," we're happy to have you.
          </p>
        </div>
        {/* Add icon or image next to text */}
        <div className="lg:w-1/4 mt-8 lg:mt-0 lg:ml-12">
          <img src="/public/images/hacklogo.png" alt="Hack Icon" className="mx-auto" style={{ width: '200px', height: '210px' }} />
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="my-12 text-justify">
        <h2 className="text-4xl font-bold" style={{ color: '#d742f5' }}>Who We Are</h2>
        <p className="mt-6 text-lg text-gray-700">
          We are a group of hackers, designers, and engineers all working to improve UCLA's hacking community. We believe in 
          moving fast, having fun, and being passionate about using technology to solve problems that are relevant to us. 
          We have a high bar for success and are willing to work incredibly hard, balancing school and many other things, 
          to improve the experience of other students around us.
        </p>
      </div>

      {/* Why Join Us Section */}
      <div className="my-12 text-justify">
        <h2 className="text-4xl font-bold" style={{ color: '#d742f5' }}>Why Join Us?</h2>
        <p className="mt-6 text-lg text-gray-700">
          We believe coding should be accessible to all, and our workshops and hackathons are designed to be fun, inclusive, 
          and engaging. No matter where you are on your coding journey, we're here to help you gain the skills you need to 
          create amazing projects and join a supportive community of fellow coders.
        </p>
      </div>
      </div>  
  );
}

export default About;
