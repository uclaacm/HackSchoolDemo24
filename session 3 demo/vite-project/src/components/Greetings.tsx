
const GreetingCard = ({ message, imgSrc, imgAlt = "Image" }: { message: string; imgSrc: string; imgAlt?: string }) => {
  return (
    <div style={styles.card}>
      <img src={imgSrc} alt={imgAlt} style={styles.logo} />
      <h2>{message}</h2>  
    </div>
  );
};
const styles = {
  card: {
    padding: '20px',
    margin: '20px auto',
    backgroundColor: '#007BFF',
    color: 'white',
  },
  logo: {
    width: '100px',
    height: 'auto',
    marginBottom: '15px',
  }
};

export default GreetingCard;

