
import Layout from '../Components/Layout'
import UserIcon from '../assets/user.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import horizon from '../assets/horizon.jpg'

function Profile() {
  const [user, setUser] = useState(null);
  const [readMode, setReadMode] = useState(true)
  const baseURL = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    axios.get(`${baseURL}/api/user/me`, { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.error('Fetch user error', err));
  }, []);


  const toggleProfile =()=>{

    setReadMode(prev => !prev)
  
  }
  const handleSubmit=async()=>{

      try{
        const res =await axios.patch(`${baseURL}/api/profile`,{
              name: user.name,
              email: user.email
            }, { withCredentials: true }
          );
        

            console.log("Updated user:", res.data);
      }catch(err){
            console.error("Error updating user:", err);
      }
          
        }

  const handleFileUpload = async (e) => {
    e.preventDefault();
  const file = e.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('profilePic', file);

  try {
    const res = await axios.post(`${baseURL}/api/user/upload-profile-pic`, formData, {
      withCredentials: true,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
          console.log(res)
          setUser(prev => ({ ...prev, profilePic: res.data.profilePic }));
          console.log("Updated profilePic path:", res.data.profilePic);
          


    // Optionally update user profile in frontend
    toast.success('Profile picture updated');
      } catch (err) {
    toast.error(err.response?.data?.error || 'Upload failed');
  }
};



 return (
  <div>
    {readMode ? (
      <Layout title="Profile">
        <div className="flex-1 flex flex-col text-black min-h-screen">
          <main className="flex-1 bg-gray-200">
            {/* Banner and profile image */}
            <div className="w-full relative flex flex-col items-center">
              <img src={horizon} alt="banner" className="w-full h-36 object-cover" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[7rem]">
                <img
                  src={user?.profilePic ? `${baseURL}${user.profilePic}` : UserIcon}
                  className="w-32 h-32 rounded-full border-4 border-white"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="w-[90%] sm:w-[60%] lg:w-[20vw] mx-auto mt-20 flex flex-col items-center justify-end rounded-xl shadow bg-white p-4">
              <h1 className="text-lg font-semibold text-center">{user?.name}</h1>
              <p className="text-sm text-center">{user?.email}</p>
              <button
                onClick={toggleProfile}
                className="bg-[#0B2027] text-white rounded-xl py-2 px-6 mt-4"
              >
                edit profile
              </button>
            </div>
          </main>
        </div>
      </Layout>
    ) : (
      <Layout title="Profile">
        <div className="flex-1 flex flex-col text-black min-h-screen">
          <main className="flex-1 bg-gray-200">
            {/* Banner and profile image */}
            <div className="w-full relative flex flex-col items-center">
              <img src={horizon} alt="banner" className="w-full h-36 object-cover" />
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[7rem]">
              <div className="relative w-32 h-32">
                <img
                  src={user?.profilePic ? `${baseURL}${user.profilePic}` : UserIcon}
                  className="w-full h-full rounded-full border-4 border-white shadow object-cover"
                />
                <label
                  htmlFor="profileUpload"
                  className="absolute bottom-0 right-0 bg-[#0B2027] text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:bg-[#305B69]"
                >
                  +
                </label>
              </div>
            </div>
            </div>

            {/* Editable Profile Form */}
            <div className="relative w-[90%] sm:w-[60%] lg:w-[20vw] mx-auto mt-20 flex flex-col items-center rounded-xl shadow bg-white p-4">
              <input
                type="file"
                id="profileUpload"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              

              <input
                type="text"
                value={user?.name}
                onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}
                className="border rounded-xl py-[0.6em] px-[1.2em] my-3 w-full"
              />
              <input
                type="text"
                value={user?.email}
                onChange={(e) => setUser((prev) => ({ ...prev, email: e.target.value }))}
                className="border rounded-xl py-[0.6em] px-[1.2em] my-3 w-full"
              />
              <button
                onClick={() => {
                  toggleProfile();
                  handleSubmit();
                }}
                className="bg-[#0B2027] text-white rounded-xl py-[0.6em] px-[1.2em] w-[10rem] m-3 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69]"
              >
                save
              </button>
            </div>
          </main>
        </div>
      </Layout>
    )}
  </div>
);


}

export default Profile;