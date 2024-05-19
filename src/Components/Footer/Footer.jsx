function Footer() {
  return (
    <>
      <footer className="bg-indigo-700 text-white pt-28">
        <div className="w-[90%] mx-auto flex flex-wrap md:flex-row flex-col md:justify-between items-center text-center">
          <div className="w-1/3">
            <h3 className="text-3xl font-medium">LOCATION</h3>
            <p className="my-3">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="md:my-0 my-16 w-1/3">
            <h3 className="text-3xl font-medium">AROUND THE WEB</h3>
            <div className="flex justify-center gap-5 items-center pt-5">
              <i className="fa-brands fa-facebook-f rounded-[50%] border-2 text-2xl px-4 py-3 cursor-pointer"></i>
              <i className="fa-brands fa-twitter rounded-[50%] border-2 text-2xl px-3 py-3 cursor-pointer"></i>
              <i className="fa-brands fa-linkedin-in rounded-[50%] border-2 text-2xl px-3 py-3 cursor-pointer"></i>
              <i className="fa-solid fa-globe rounded-[50%] border-2 text-2xl px-3 py-3 cursor-pointer"></i>
            </div>
          </div>
          <div className="w-1/3">
            <h3 className="text-3xl font-medium mb-3">
              ABOUT<span className="md:text-3xl text-2xl"> FREELANCER</span>
            </h3>
            <p>
              Freelance is a free to use, licensed Bootstrap <br /> theme
              created by Route
            </p>
          </div>
        </div>
        <div className="text-center mt-16 bg-slate-950 py-6">
          Copyright © Your Website 2021
        </div>
      </footer>
    </>
  );
}

export default Footer;
