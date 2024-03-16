import { useState, useEffect } from 'react';

import { CardComponent } from './components/CardComponent';

function App() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setMyData(data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">Hello ReactJS</h1>

      <div className="flex flex-wrap gap-[20px] mt-28">
        {myData.map((el) => {
          return <CardComponent key={el.id} item={el} />;
        })}
      </div>
    </div>
  );
}

export default App;
