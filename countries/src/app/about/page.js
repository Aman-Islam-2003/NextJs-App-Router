const About = () => {
  return (
    // <div className="flex flex-col md:flex-row w-full gap-[49px] px-8 py-2 border border-black md:h-[496px] justify-center">
    //   {/* left section */}
    //   <div className="relative md:w-[613px] md:h-[468px] flex justify-center items-center w-1/2">
    //     <div className="absolute bg-[#004A7B] w-[131px] h-[131px] rounded-[20px] top-0 left-0"></div>
    //     <div className="relative z-10 w-[575px] h-[429px]">
    //       <img
    //         src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg"
    //         alt=""
    //         className="h-full
    //       object-cover rounded-[18px]"
    //       />
    //     </div>
    //     <div className="absolute bg-[#11933B] w-[176px] h-[176px] rounded-[20px] right-0 bottom-0"></div>
    //   </div>
    //   {/* right section */}
    //   <div className="flex flex-col justify-between md:w-[523px] md:h-[468px] w-1/2">
    //     <h2 className="text-[#086626] font-semibold text-2xl">
    //       About the Project
    //     </h2>
    //     <p className="text-[#515151] font-medium">
    //       The Preservation of the Late Buddhist Rock Heritage in Swat is an
    //       initiative aimed at digitizing and conserving the ancient rock
    //       carvings and structures that hold significant historical, cultural,
    //       and religious value. Through the use of modern technology and
    //       community engagement, we strive to protect these invaluable artefacts
    //       for future generations.
    //     </p>
    //     <p className="text-[#515151] font-medium">
    //       Our mission encompasses preventive conservation, detailed
    //       documentation, and the promotion of awareness about the rich Buddhist
    //       heritage in the Swat region. By integrating interactive 3D models and
    //       comprehensive information, we make this heritage accessible to
    //       scholars, tourists, and the local community alike.
    //     </p>
    //     <div className="relative p-[2px] bg-gradient-to-r from-[#025B96] to-[#086626] rounded-lg w-[183px] h-[52px] flex items-center justify-center">
    //       <div className="bg-white w-full h-full rounded-lg flex items-center justify-center">
    //         <button className="bg-gradient-to-r from-[#025B96] to-[#086626] bg-clip-text text-transparent font-semibold">
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex flex-col md:flex-row w-full gap-[49px] px-8 py-2 border border-black md:h-[496px] justify-center">
    {/* left section */}
    <div className="relative md:w-[613px] md:h-[468px] flex justify-center items-center w-1/2">
      <div className="absolute bg-[#004A7B] w-[131px] h-[131px] rounded-[20px] top-0 left-0"></div>
      <div className="relative z-10 w-[575px] h-[429px]">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/04/20/01/website-3374825_640.jpg"
          alt=""
          className="h-full
        object-cover rounded-[18px]"
        />
      </div>
      <div className="absolute bg-[#11933B] w-[176px] h-[176px] rounded-[20px] right-0 bottom-0"></div>
    </div>
    {/* right section */}
    <div className="flex flex-col justify-between md:w-[523px] md:h-[468px] w-1/2">
      <h2 className="text-[#086626] font-semibold text-2xl">
        About the Project
      </h2>
      <p className="text-[#515151] font-medium">
        The Preservation of the Late Buddhist Rock Heritage in Swat is an
        initiative aimed at digitizing and conserving the ancient rock
        carvings and structures that hold significant historical, cultural,
        and religious value. Through the use of modern technology and
        community engagement, we strive to protect these invaluable artefacts
        for future generations.
      </p>
      <p className="text-[#515151] font-medium">
        Our mission encompasses preventive conservation, detailed
        documentation, and the promotion of awareness about the rich Buddhist
        heritage in the Swat region. By integrating interactive 3D models and
        comprehensive information, we make this heritage accessible to
        scholars, tourists, and the local community alike.
      </p>
      <div className="relative p-[2px] bg-gradient-to-r from-[#025B96] to-[#086626] rounded-lg w-[183px] h-[52px] flex items-center justify-center">
        <div className="bg-white w-full h-full rounded-lg flex items-center justify-center">
          <button className="bg-gradient-to-r from-[#025B96] to-[#086626] bg-clip-text text-transparent font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
