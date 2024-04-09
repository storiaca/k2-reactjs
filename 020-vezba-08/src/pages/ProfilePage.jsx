import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUserAction } from '../store/userSlice';

function ProfilePage() {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  function handleLogout() {
    dispatch(logoutUserAction());
    navigation('/register');
  }

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-12 px-4 md:flex-row">
      <img
        class="h-[200px] w-[200px] rounded-[50%] object-cover"
        src={user.image}
        alt="User"
      />
      <div className="bg-gray-800 w-full rounded-3xl text-white flex items-start flex-col gap-3 p-3">
        <h2>First Name: {user.firstName}</h2>
        <h2>Last Name: {user.lastName}</h2>
        <h3>Email: {user.email}</h3>
        <h3>Date of Birth: {user.birthDate}</h3>
        <h3>Gender: {user.gender}</h3>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-orange-600 text-white rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
