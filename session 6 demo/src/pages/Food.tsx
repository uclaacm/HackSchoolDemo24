import React from 'react';
import PlacesCard from '../components/PlacesCard';
import restaurant1 from '../assets/cava.jpg';
import restaurant2 from '../assets/emporium.jpg';

interface Restaurant {
  name: string;
  imgSrc: string;
  location: string;
  description: string;
}

const Food: React.FC = () => {
  const restaurantList: Restaurant[] = [
    {
      name: 'Cava',
      imgSrc: restaurant1,
      location: '1073 Broxton Ave, Los Angeles',
      description: 'Yummy mediterranean cuisine.',
    },
    {
      name: 'Emporium Thai',
      imgSrc: restaurant2,
      location: '1275 Westwood Blvd, Los Angeles',
      description: 'Amazing thai food, ambience and service!',
    },
  ];

  return (
    <div>
      <h1>Food</h1>
      {restaurantList.map((restaurant, index) => (
        <PlacesCard
          key={index}
          name={restaurant.name}
          imgSrc={restaurant.imgSrc}
          location={restaurant.location}
          description={restaurant.description}
        />
      ))}
    </div>
  );
};

export default Food;
