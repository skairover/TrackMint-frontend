
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
          {readMode ?
              (
                <div>
                  <div className="flex h-screen w-screen overflow-hidden">
                    <Layout title="Profile" >
                    <div className="flex-1 flex flex-col text-black h-screen">
                      
                      <main className="flex-1 bg-gray-200">
                        <div className="w-full relative flex flex-col items-center">
                          <img src={horizon} alt="banner" className="w-full h-36 object-cover" />
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-[7rem]">
                            <img
                              src={user?.profilePic ? `${baseURL}${user.profilePic}` : UserIcon}
                              className="w-32 h-32 rounded-full border-4 border-white"
                            />
                          </div>
                      </div>
                      <div className="h-60 w-[20vw] flex flex-col items-center justify-end rounded-xl shadow bg-white p-3 m-10">
                     
                            <h1 className="mr-10 ml-10 ">{user?.name}</h1>
                            <p className="mr-10 ml-10">{user?.email}</p>
                            <button onClick={toggleProfile}
                                  className="bg-[#0B2027] text-white rounded-xl py-2 px-6 mt-4" >
                              edit profile
                            </button>

                        </div>
                        
                        
                        
                      </main>
                    </div>
                    </Layout>
                  </div>
                  
                </div>
              )
              :
              (
              
                <div className="flex h-screen w-screen overflow-hidden">
                  <Sidebar />
                  <div className="flex-1 flex flex-col text-black h-screen">
                    <Header title="Profile" />
                    <main className="flex-1 bg-gray-200">
                      
                          <div className="w-full relative flex flex-col items-center">
                          <img src={horizon} alt="banner" className="w-full h-36 object-cover" />
                          <div className="absolute left-1/2 transform -translate-x-1/2 top-[7rem]">
                            <img
                              src={user?.profilePic ? `http://localhost:5000${user.profilePic}` : UserIcon}
                              className="w-32 h-32 rounded-full border-4 border-white shadow"
                            />
                          </div>
                      </div>
                      <div className='h-62 w-[20vw] flex flex-col items-center rounded-xl shadow bg-white p-3 m-10'>
                        <input
                            type="file"
                            id="profileUpload"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />

                          <label
                            htmlFor="profileUpload"
                            className=" flex justify-center items-center  absolute right-115 bg-[#0B2027] text-white w-8 h-8 rounded-full text-black hover:bg-[#305B69] m-3 cursor-pointer"
                          >
                            +
                          </label>
                        <input type="text" value={user?.name} onChange={(e)=>setUser((prev => ({...prev, name: e.target.value})))} className='border rounded-xl py-[0.6em] px-[1.2em] my-3' />
                        <input type="text" value={user?.email} onChange={(e)=>setUser((prev)=>({...prev, email: e.target.value}))} className='border rounded-xl py-[0.6em] px-[1.2em] my-3' />
                        <button onClick={()=>{toggleProfile();
                                              handleSubmit();}
                                        } 
                                className="bg-[#0B2027] text-white rounded-xl cursor-pointer py-[0.6em] px-[1.2em] w-[10rem] m-3 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#305B69] ">
                                save
                        </button>
                      </div>
                    </main>
                  </div>
                </div>
              )
            }
          </div>

  );


}

export default Profile;