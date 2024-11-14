import React, { useState, useEffect } from 'react';

interface PlacesCardProps {
  name: string;
  imgSrc: string;
  location: string;
  description: string;
}

const PlacesCard: React.FC<PlacesCardProps> = ({ name, imgSrc, location, description }) => {
  const [likes, setLikes] = useState(0);

  const storageKey = `likes-${name}`;

  useEffect(() => {
    const storedLikes = localStorage.getItem(storageKey);
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    }
  }, [storageKey]);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(storageKey, newLikes.toString());
  };

  return (
    <div style={styles.card}>
      <img src={imgSrc} alt={name} style={styles.image} />
      <h2>{name}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p>{description}</p>
      <button onClick={handleLike} style={styles.likeButton}>
        Like {likes > 0 && `(${likes})`}
      </button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  card: {
    padding: '20px',
    margin: '20px auto',
    backgroundColor: '#f7f7f7',
    color: '#333',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '15px',
  },
  likeButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default PlacesCard;
