import React from 'react';
import PlacesCard from '../components/PlacesCard';
import cafe1 from '../assets/ministryOfCoffee.jpg';
import cafe2 from '../assets/lePanQuotidien.png';

interface Cafe {
  name: string;
  imgSrc: string;
  location: string;
  description: string;
}

const Cafes: React.FC = () => {
  const cafeList: Cafe[] = [
    {
      name: 'Ministry of Coffee',
      imgSrc: cafe1,
      location: '1010 Glendon Ave, Los Angeles',
      description: 'Espresso bar from Sydney with Turksih inspiration serving coffee & food all day.',
    },
    {
      name: 'Le Pain Quotidien',
      imgSrc: cafe2,
      location: '1122 Gayley Ave, Los Angeles',
      description: 'Known for its freshly brewed coffee and pastries, rustic-chic bakery/cafe chain.',
    },
  ];

  return (
    <div>
      <h1>Cafes</h1>
      {cafeList.map((cafe, index) => (
        <PlacesCard
          key={index}
          name={cafe.name}
          imgSrc={cafe.imgSrc}
          location={cafe.location}
          description={cafe.description}
        />
      ))}
    </div>
  );
};

export default Cafes;
