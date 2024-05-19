import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="h-[50vh] flex justify-center items-center bg-slate-950 flex-col gap-5">
        <h1 className="font-black text-4xl text-white">404 NOT FOUND</h1>
        <Link to="/react1/" className="text-green-500 text-2xl font-black">
          HOME
        </Link>
      </div>
    </>
  );
}

export default NotFound;
