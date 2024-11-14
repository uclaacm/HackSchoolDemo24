import React from 'react';
import homeImage from '../assets/cafe.webp'; // Replace with the path to your image

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1>Westwood Cafes & Food!</h1>
      <p >Explore the best cafes and restaurants in town with detailed information on location, ambiance, and specialties.</p>
      <img src={homeImage} alt="Cafe and Restaurant" style={styles.image} /> {/* Image below the welcome statement */}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center' as const,
    backgroundColor: '#adc2ab', // Match the background color for consistency
  },
  image: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '800px', // Limit image width for better display
    height: 'auto',
    borderRadius: '10px',
  },
};

export default Home;
