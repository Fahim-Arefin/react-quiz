function Header() {
  return (
    <div
      className=" container mx-auto 
          grid grid-cols-8 h-[100px] lg:h-[150px] mt-12 lg:mt-24"
    >
      <div
        className="flex items-center justify-center 
      col-span-2  "
      >
        <img
          className="w-24 md:w-32"
          src="./image/react.png"
          alt="react-logo"
        />
      </div>
      <div
        className="flex items-center justify-center md:justify-start text-4xl md:text-6xl lg:text-7xl
         xl:text-8xl 2xl:text-9xl text-white header
        col-span-6 "
      >
        <h1>The React Quiz</h1>
      </div>
    </div>
  );
}

export default Header;
