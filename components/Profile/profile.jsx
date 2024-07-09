import { MdOutlineEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoArrowDownCircleSharp } from "react-icons/io5";
import img from "../../public/profilepic.jpg"


function Profile() {
  return (
    <div className="h-auto  w-[90%] md:w-[25%] border-[1px] border-[#7c7777] rounded-lg flex justify-center items-center sticky bottom-0  right-0  z-20">
      <div className="h-full w-[80%] flex flex-col space-y-4  ">
        <div className=" h-[50%] w-full flex items-center justify-center ">
          <div className="w-full  h-full  flex flex-col items-center justify-center space-y-4">
            <div className="py-4 px-4 mt-4 flex justify-center items-center border-[1px] border-[#626060] rounded-lg">
              <img
                className="h-24 w-30"
                src="/profilephoto.jpg"
              />
            </div>
            <div className=" w-full flex flex-col justify-center items-center space-y-1 ">
              <h1 className=" text-2xl font-semibold text-white">
                Abhinav Chauhan
              </h1>
              <p className="text-white  px-2 py-2">MERN Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-[#898787] h-[50%] w-full space-y-2 pt-2">
          <div className="flex w-full space-x-2">

            <div className="border-[1px] border-[#858282] rounded-xl p-2 flex justify-center items-center">
              <MdOutlineEmail className="text-[#ead487] text-lg" />
            </div>

            <div className="flex flex-col text-white">
              <h1 className="text-sm font-medium">EMAIL</h1>
              <p className="text-sm">{"chauhanabhinav2400@gmail.com".slice(0, 19)}...</p>
            </div>

          </div>
          <div className="flex w-full space-x-2">

            <div className="border-[1px] border-[#858282] rounded-xl p-2 flex justify-center items-center">
              
              <IoPhonePortraitOutline  className="text-[#ead487] text-xl"/>
            </div>

            <div className="flex flex-col text-white">
              <h1 className="text-sm font-medium">PHONE</h1>
              <p className="text-sm">9568385635 </p>
            </div>
            
          </div>
          <div className="flex w-full space-x-2">

            <div className="border-[1px] border-[#858282] rounded-xl p-2 flex justify-center items-center">
              
             
             <a href="https://www.linkedin.com/in/abhinav-chauhan-b52328255/" target="_main"><CiLinkedin  className="text-[#ead487] text-xl" /></a>  
            </div>

            <div className="flex flex-col text-white">
              <h1 className="text-sm font-medium">LINKDIN</h1>
              <p className="text-sm"><a href="https://www.linkedin.com/in/dishant1212/" target="_main">100+ connections</a></p>
            </div>
            
          </div>
          <div className="flex w-full space-x-2">

            <div className="border-[1px] border-[#858282] rounded-xl p-2 flex justify-center items-center">
              
             
              <IoLocationOutline   className="text-[#ead487] text-xl"/>
            </div>

            <div className="flex flex-col text-white">
              <h1 className="text-sm font-medium">LOCATION</h1>
              <p className="text-sm">Noida , Uttar Pradesh</p>
            </div>
            
          </div>
          <div className="flex justify-end gap-4 mb-5">
            <div className="">
             {/* <a href="" download="AbhinavResume.pdf" className="flex p-2 mb-3 gap-2 w-32 justify-center items-center rounded-sm hover:rounded-lg bg-blue-700 text-[#ead487]" >Resume <IoArrowDownCircleSharp  className="text-[#ead487] text-xl" /></a> */}
             </div>
             <div className=" h-10 flex justify-end items-center ">
              <a href="https://github.com/ChauhanAbhinav2400" target="_main"><FaGithub  className="text-[#ead487] text-xl" /></a>
             </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Profile;
