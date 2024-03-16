import { useState, useEffect } from 'react';
import SingleUser from './components/SingleUser';

// import { CardComponent } from './components/CardComponent';
// import LoadingComponent from './components/LoadingComponent';

function App() {
  const [person, setPerson] = useState({
    name: 'Tihomir',
    age: 24,
    address: 'Rasovac',
  });

  // const [active, setActive] = useState(false);

  // useEffect(() => {
  //   console.log('Radii');
  // }, [active]);

  // const [myData, setMyData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMyData(data.products);
  //       setIsLoading(true);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="container mx-auto">
      <SingleUser person={person} setPerson={setPerson} />

      {/* <h2>Hello</h2>
      <button
        className="bg-orange-400 text-white rounded-md border-none px-3 py-3 text-xl"
        onClick={() => setActive(!active)}
      >
        Change state
      </button> */}
      {/* <h1 className="text-4xl">Hello ReactJS</h1>

      {isLoading ? (
        <div className="flex flex-wrap gap-[20px] mt-28">
          {myData.map((el) => {
            return <CardComponent key={el.id} item={el} />;
          })}
        </div>
      ) : (
        <LoadingComponent />
      )} */}
    </div>
  );
}

export default App;
