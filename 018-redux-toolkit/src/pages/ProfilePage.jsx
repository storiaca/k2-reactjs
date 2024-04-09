import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
function ProfilePage() {
  const { myUser } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  function handleLogout() {
    //let jelSiSiguranTebra = prompt('')

    // 1. obrisi user-a
    dispatch(logoutUserAction());
    // 2. prebaci me na register
    navigation('/register');
    // setTimeout(() => {
    // toastify
    // }, 1000);
  }

  return (
    <div className="container px-4 flex-col justify-center items-center md:flex-row mx-auto flex mt-[50px] gap-9">
      <img
        className="w-[200px] h-[200px] rounded-full object-cover"
        src={myUser.image}
        alt="User"
      />

      <div className="bg-slate-300 w-full p-5 rounded-3xl flex flex-col gap-5 items-start">
        <h3>First Name: {myUser.firstName}</h3>
        <h3>Last Name: {myUser.lastName}</h3>
        <h4>Email: {myUser.email}</h4>
        <h4>Birth Date: {myUser.birthDate}</h4>
        <h4>Gender: {myUser.gender}</h4>
        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg"
        >
          Logout User
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
