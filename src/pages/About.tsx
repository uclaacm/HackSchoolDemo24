
function About() {
  return (
    <div className="mt-28 text-center px-6">
      <h1 className="text-4xl font-bold" style={{ color: '#d742f5' }}>About ACM Hack</h1>
      <p className="mt-6 text-lg text-gray-700">
        ACM Hack is a student-run organization dedicated to empowering students through code. Our mission is to provide opportunities for students to build, learn, and explore what’s possible with technology. Through quarterly workshops and events, we help students of all skill levels—from absolute beginners to experienced coders—expand their knowledge and creativity in tech.
      </p>
      
      <div className="my-12">
        <h2 className="text-3xl font-semibold" style={{ color: '#d742f5' }}>Hack School</h2>
        <p className="mt-4 text-lg text-gray-700">
          Hack School is our flagship, beginner-friendly web development workshop series. Throughout the quarter, students dive into essential web technologies like 
          <span style={{ color: '#d742f5', fontWeight: '600' }}> HTML</span>, 
          <span style={{ color: '#d742f5', fontWeight: '600' }}> CSS</span>, and 
          <span style={{ color: '#d742f5', fontWeight: '600' }}> React.js</span>, learning the skills they need to build their very own website. Whether you’re just starting out or looking to level up, Hack School offers a welcoming environment for everyone to learn, build, and create.
        </p>
      </div>

      <div className="my-12">
        <h2 className="text-3xl font-semibold" style={{ color: '#d742f5' }}>Why Join Us?</h2>
        <p className="mt-4 text-lg text-gray-700">
          We believe coding should be accessible to all, and our workshops and hackathons are designed to be fun, inclusive, and engaging. No matter where you are on your coding journey, we’re here to help you gain the skills you need to create amazing projects and join a supportive community of fellow coders.
        </p>
      </div>
      
      <div className="my-12">
        <h2 className="text-3xl font-semibold" style={{ color: '#d742f5' }}>Stay Connected</h2>
        <p className="mt-4 text-lg text-gray-700">
          Join our <a href="#" style={{ color: '#d742f5', fontWeight: '600', textDecoration: 'underline' }}>ACM Hack Discord</a> to get live announcements about upcoming events, workshops, and hackathons. We can't wait to see what you'll build with us!
        </p>
      </div>
    </div>
  );
}

export default About;

  