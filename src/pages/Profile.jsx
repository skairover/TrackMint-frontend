import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Layout';
import UserIcon from '../assets/user.png';
import horizon from '../assets/horizon.jpg';
import toast from 'react-hot-toast';

import { getProfile, updateProfile, uploadProfilePic } from '../services/profileServices';

function Profile() {
  const [user, setUser] = useState(null);
  const [readMode, setReadMode] = useState(true);
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('Please log in first');
      navigate('/login');
      return;
    }

    getProfile()
      .then(res => setUser(res.data))
      .catch(err => {
        console.error('Failed to fetch user', err);
        toast.error('Error loading profile');
      });
  }, []);

  const toggleProfile = () => {
    setReadMode(prev => !prev);
  };

  const handleSubmit = async () => {
    try {
      const res = await updateProfile({
        name: user.name,
        email: user.email,
      });
      setUser(res.data);
      toast.success('Profile updated');
    } catch (err) {
      console.error('Update error:', err);
      toast.error('Update failed');
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profilePic', file);

    try {
      const res = await uploadProfilePic(formData);
      setUser(prev => ({ ...prev, profilePic: res.data.profilePic }));
      toast.success('Profile picture updated');
    } catch (err) {
      console.error('Upload failed:', err);
      toast.error(err.response?.data?.error || 'Upload failed');
    }
  };

  const renderProfileImage = () => (
    <img
      src={user?.profilePic ? `${baseURL}${user.profilePic}` : UserIcon}
      className="w-32 h-32 rounded-full border-4 border-white shadow object-cover"
      alt="profile"
    />
  );

  return (
    <Layout title="Profile">
      <main className="flex-1 bg-gray-200 min-h-screen text-black">
        {/* Banner & Profile Picture */}
        <div className="w-full relative flex flex-col items-center">
          <img src={horizon} alt="banner" className="w-full h-36 object-cover" />
          <div className="absolute left-1/2 transform -translate-x-1/2 top-[7rem]">
            {readMode ? (
              renderProfileImage()
            ) : (
              <div className="relative w-32 h-32">
                {renderProfileImage()}
                <label
                  htmlFor="profileUpload"
                  className="absolute -bottom-3 right-3 bg-[#0B2027] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#305B69] cursor-pointer"
                >
                  +
                </label>
                <input
                  type="file"
                  id="profileUpload"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            )}
          </div>
        </div>

        {/* Profile Form */}
        <div className="mt-28 w-[90%] sm:w-[70%] md:w-[30%] mx-auto bg-white rounded-xl shadow p-4 flex flex-col items-center">
          {readMode ? (
            <>
              <h1 className="text-lg font-semibold text-center">{user?.name}</h1>
              <p className="text-sm text-center">{user?.email}</p>
              <button
                onClick={toggleProfile}
                className="bg-[#0B2027] text-white rounded-xl py-2 px-6 mt-4"
              >
                Edit Profile
              </button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={user?.name || ''}
                onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
                className="border rounded-xl py-[0.6em] px-[1.2em] my-3 w-full"
              />
              <input
                type="email"
                value={user?.email || ''}
                onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                className="border rounded-xl py-[0.6em] px-[1.2em] my-3 w-full"
              />
              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => {
                    handleSubmit();
                    toggleProfile();
                  }}
                  className="bg-[#0B2027] text-white rounded-xl py-[0.6em] px-[1.2em] transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69]"
                >
                  Save
                </button>
                <button
                  onClick={toggleProfile}
                  className="bg-gray-300 text-black rounded-xl py-[0.6em] px-[1.2em]"
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Profile;
