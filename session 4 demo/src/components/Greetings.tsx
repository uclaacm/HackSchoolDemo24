// GreetingCard component
import { useState } from 'react';

const GreetingCard = ({ message, imgSrc, imgAlt = "Image" }) => {
  const [likes, setLikes] = useState(0); // Add a state variable for likes

  const handleLike = () => {
    setLikes(likes + 1); // Update state on button click
  };

  return (
    <div style={styles.card} className="card">
      <img src={imgSrc} alt={imgAlt} style={styles.logo} />
      <h2>{message}</h2>  
      <button onClick={handleLike} style={styles.likeButton}>Like</button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p> {/* Display the likes count */}
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    margin: '20px auto',
    backgroundColor: '#007BFF',
    color: 'white',
    textAlign: 'center',
    borderRadius: '10px',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginBottom: '15px',
  },
  likeButton: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default GreetingCard;


