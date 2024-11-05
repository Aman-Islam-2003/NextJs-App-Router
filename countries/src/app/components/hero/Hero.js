import Image from "next/image";
import material_symbol from "../../assets/material-symbols_move-location.png";
const Hero = () => {
  return (
    <div className="w-full h-[700px] bg-cover bg-center about-bg flex flex-col justify-center items-center gap-12 font-poppins">
      <div className="text-center p-4 font-semibold mt-60 sm:mt-0">
        <h2 className="text-[#ECFFD9] uppercase text-lg my-2">
          A journey of digitization and preventive conservation
        </h2>
        <h1 className="text-[#FFFFFF] text-4xl">
          Preserving the Late Buddhist Rock <br/> Heritage in Swat
        </h1>
      </div>
      <div className="text-[#FFFFFF] border border-white flex items-center justify-center cursor-pointer w-[206px] h-[54px] p-4 rounded-xl font-medium gap-3 bg-[#03030399] hover:bg-[#413f3f99]">
        <button>Explore Sites</button>
        <Image src={material_symbol} className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
};

export default Hero;
