import { useState, useEffect } from 'react';

import { CardComponent } from './components/CardComponent';
import LoadingComponent from './components/LoadingComponent';

function App() {
  const [myData, setMyData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setMyData(data.products);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl">Hello ReactJS</h1>

      {isLoading ? (
        <div className="flex flex-wrap gap-[20px] mt-28">
          {myData.map((el) => {
            return <CardComponent key={el.id} item={el} />;
          })}
        </div>
      ) : (
        <LoadingComponent />
      )}
    </div>
  );
}

export default App;
