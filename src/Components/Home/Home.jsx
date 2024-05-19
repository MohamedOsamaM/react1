import image from "../../assets/avatar.svg";
function Home() {
  return (
    <>
      <div className="bg-cyan-500 flex flex-col justify-center items-center py-6">
        <img src={image} alt="" className="w-[400px]" />
        <h1 className="text-5xl font-bold text-center text-white my-3">
          StartFramework
        </h1>
        <div className=" flex flex-row items-center gap-3">
          <div className="bg-white w-[150px] h-[5px]"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className='bg-white w-[150px] h-[5px]'></div>
        </div>
        <p className="text-white mt-2">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  );
}

export default Home;
