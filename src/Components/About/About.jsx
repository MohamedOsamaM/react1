function About() {
  return (
    <>
      <div className=" bg-cyan-500 flex flex-col justify-center items-center py-20 px-28">
        <h1 className="text-white text-center text-4xl">ABOUT COMPONENT</h1>
        <div className=" flex flex-row items-center gap-3 my-5">
          <div className="bg-white w-[150px] h-[5px]"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="bg-white w-[150px] h-[5px]"></div>
        </div>
        <div className="flex md:flex-row flex-col gap-20 text-white justify-center items-center">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
