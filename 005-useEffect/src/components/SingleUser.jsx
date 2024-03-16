// Icons
import { useState } from 'react';
import { MdChangeCircle } from 'react-icons/md';

function SingleUser({ person, setPerson }) {
  const [activeIcon, setActiveIcon] = useState(false);

  function handleUserChange() {
    setPerson(
      (prevState) =>
        (prevState = {
          ...prevState,
          age: 36,
        }),
      // { name: 'Janko', age: 26, address: 'Jagodina' },
    );

    setActiveIcon(true);
  }
  return (
    <div className="w-[300px] h-[300px] border-2 border-red-400 bg-blue-700 rounded-2xl flex flex-col items-center justify-evenly mx-auto mt-14">
      <h2 className="text-center mb-2 text-white uppercase">{person.name}</h2>
      <h3 className="text-center mb-2 text-white uppercase">{person.age}</h3>
      <h3 className="text-center mb-2 text-white uppercase">
        {person.address}
      </h3>
      <button
        onClick={handleUserChange}
        className="flex gap-2 items-center p-2 border-2 border-solid border-white rounded-lg text-white uppercase"
      >
        Change Person
      </button>
      {activeIcon ? (
        <MdChangeCircle size={32} color={'red'} />
      ) : (
        <MdChangeCircle size={32} color={'white'} />
      )}
    </div>
  );
}

export default SingleUser;
