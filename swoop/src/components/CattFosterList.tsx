// components/CatFosterList.tsx
import React, { useEffect, useState } from 'react';
import client from '../../studio-swoop/sanity_utils/sanityClient';

// Define your types for the data
type Cat = {
  _id: string;
  name: string;
  breed: string;
  age: number;
  image: {
    asset: {
      url: string;
    };
  };
  description: string;
};

type Foster = {
  _id: string;
  fosterName: string;
  contactInfo: string;
};

const CatFosterList = () => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [fosters, setFosters] = useState<Foster[]>([]);

  useEffect(() => {
    // Fetch cats from Sanity
    const fetchCats = async () => {
      const catData = await client.fetch('*[_type == "cat"]');
      setCats(catData);
    };

    // Fetch fosters from Sanity
    const fetchFosters = async () => {
      const fosterData = await client.fetch('*[_type == "foster"]');
      setFosters(fosterData);
    };

    fetchCats();
    fetchFosters();
  }, []);

  return (
    <div>
      <h1>Cat and Foster List</h1>
      <section>
        <h2>Cats</h2>
        <div>
          {cats.map((cat) => (
            <div key={cat._id} style={{ marginBottom: '20px' }}>
              <img src={cat.image.asset.url} alt={cat.name} style={{ width: '150px' }} />
              <h3>{cat.name}</h3>
              <p>Breed: {cat.breed}</p>
              <p>Age: {cat.age}</p>
              <p>{cat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Fosters</h2>
        <div>
          {fosters.map((foster) => (
            <div key={foster._id} style={{ marginBottom: '20px' }}>
              <h3>{foster.fosterName}</h3>
              <p>Contact: {foster.contactInfo}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatFosterList;
