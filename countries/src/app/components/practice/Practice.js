import Image from "next/image";
import aboutImage from "../../assets/about_img.png";

const Practice = () => {
  return (
    <div className="flex sm:flex-row flex-col w-full sm:p-10 p-4 gap-y-8">
      {/* Left Section */}
      <div className="relative border border-black w-full sm:w-1/2 flex justify-center items-center p-4">
        <div className="absolute bg-[#004A7B] w-[131px] h-[131px] rounded-[20px] top-[13%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
        <div className="relative z-10 items-center justify-center">
          <Image
            src={aboutImage}
            alt=""
            className="rounded-[18px]"
          />
        </div>
        <div className="absolute bg-[#11933B] w-[176px] h-[176px] rounded-[20px] bottom-[18%] right-[15%] transform translate-x-1/2 translate-y-1/2 z-0"></div>
      </div>
      {/* Right Section */}
      <div className="border border-black w-full sm:w-1/2 p-4 flex flex-col justify-between">
        <h2 className="text-[#086626] font-semibold text-3xl">
          About the Project
        </h2>
        <p className="text-[#515151] font-medium text-lg">
          The Preservation of the Late Buddhist Rock Heritage in Swat is an
          initiative aimed at digitizing and conserving the ancient rock
          carvings and structures that hold significant historical, cultural,
          and religious value. Through the use of modern technology and
          community engagement, we strive to protect these invaluable artefacts
          for future generations.
          Our mission encompasses preventive conservation, detailed
          documentation, and the promotion of awareness about the rich Buddhist
          heritage in the Swat region. By integrating interactive 3D models and
          comprehensive information, we make this heritage accessible to
          scholars, tourists, and the local community alike.
        </p>
        <div className="relative p-[2px] bg-gradient-to-r from-[#025B96] to-[#086626] rounded-lg w-[183px] h-[52px] flex items-center justify-center">
          <div className="bg-white w-full h-full rounded-lg flex items-center justify-center">
            <button className="bg-gradient-to-r from-[#025B96] to-[#086626] bg-clip-text text-transparent font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex items-center justify-center min-h-screen m-12">
  //     <div className="w-1/2">
  //       <div className="relative mx-7 my-8 h-[470px]">
  //         <div className="flex items-center justify-center w-full h-full mt-1">
  //           <Image className="object-cover" src={aboutImage} alt="bgimage" />
  //         </div>
  //         <div className="bg-[#004A7B] absolute -top-1 -z-10 h-[131px] w-[131px] rounded-3xl"></div>
  //         <div className="bg-[#10933B] absolute bottom-1 -z-10 right-0 h-[176px] w-[176px] rounded-3xl">
  //           green
  //         </div>
  //       </div>
  //     </div>
  //     <div className="w-1/2 min-h-[469px]">
  //       <div>
  //         <h3 className="text-2xl font-semibold text-[#086626]">
  //           About the Project
  //         </h3>
  //         <p className="text-justify text-[17px]">
  //           The Preservation of the Late Buddhist Rock Heritage in Swat is an
  //           initiative aimed at digitizing and conserving the ancient rock
  //           carvings and structures that hold significant historical, cultural,
  //           and religious value. Through the use of modern technology and
  //           community engagement, we strive to protect these invaluable
  //           artefacts for future generations. <br /> Our mission encompasses
  //           preventive conservation, detailed documentation, and the promotion
  //           of awareness about the rich Buddhist heritage in the Swat region. By
  //           integrating interactive 3D models and comprehensive information, we
  //           make this heritage accessible to scholars, tourists, and the local
  //           community alike.
  //           <br />
  //           Our mission encompasses preventive conservation, detailed
  //           documentation, and the promotion of awareness about the rich
  //           Buddhist heritage in the Swat region. By integrating interactive 3D
  //           models and comprehensive information, we make this heritage
  //           accessible to scholars, tourists, and the local community alike
  //         </p>
  //         <button className="px-4 py-2 mt-4 border-2 border-[#025B96] border-r-[#086626] rounded-5xl">
  //           Learn More
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Practice;
