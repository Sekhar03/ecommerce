import Lanyard from "../lanyard/lanyard";



const LanyardContainer = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-[12vw] md:text-[8vw] font-bold text-neutral-600 select-none">
          GRAB IT
        </h2>
      </div>

      {/* Lanyard Component */}
      <div className="relative z-10 w-full h-full max-h-[600px]">
        <Lanyard />
      </div>

      {/* Button */}
      <button 
        className="relative z-20 px-8 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Grab a Pass
      </button>
    </div>
  );
};

export default LanyardContainer;