import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 function
import image1 from "../../assets/port1.png";
import image2 from "../../assets/port2.png";
import image3 from "../../assets/port3.png";
import ShowPort from "./ShowPort";

function Portfolio() {
  
  const [collection] = useState([
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
  ]);
  const [openview, setOpenview] = useState(false);
  const [source, setSource] = useState("");

  return (
    <>
      <div className="bg-cyan-500 flex md:flex-row flex-col flex-wrap justify-center items-center py-20 md:px-28 ">
        <h1 className="text-center w-full text-4xl font-black text-white">
          PORTFOLIO COMPONENT
        </h1>
        <div className="w-full flex flex-row justify-center items-center gap-3 my-5">
          <div className="bg-white w-[150px] h-[5px]"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="bg-white w-[150px] h-[5px]"></div>
        </div>
        {collection.map((pic) => (
          <ShowPort
            key={uuidv4()} // Generate unique key using UUID
            pic={pic}
            setOpenview={setOpenview}
            setSource={setSource}
          />
        ))}
      </div>
      {openview === true ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-indigo-950/[50%] flex justify-center items-center"
          id="view"
          onClick={() => {
            setOpenview(false);
          }}
        >
          <img
            src={source}
            alt=""
            className="w-[650px] rounded-lg"
            onClick={(e)=>{e.stopPropagation()}}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Portfolio;
