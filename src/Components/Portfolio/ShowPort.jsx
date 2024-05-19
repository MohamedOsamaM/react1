import PropTypes from 'prop-types';

function ShowPort({setOpenview,setSource,pic}) {
  return (
    <>
      <div className="md:w-1/3 rounded-lg p-5 group">
        <div
          className="relative  cursor-pointer"
          onClick={() => {
            setOpenview(true);
            setSource(pic);
          }}
        >
          <img src={pic} alt="" className="w-full rounded-lg" />
          <div className="layer hidden absolute top-0 left-0 right-0 bottom-0 bg-purple-500/[50%] group-hover:block rounded-lg">
            <div className="m-0 p-0  text-9xl font-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              +
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ShowPort.propTypes = {
    setOpenview: PropTypes.func.isRequired,
    setSource: PropTypes.func.isRequired,
    pic: PropTypes.string.isRequired,
  };

export default ShowPort;
