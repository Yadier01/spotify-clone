import initial_state from "../initialState.json";
export const DesktopMusicMapped = () => {
  const size = 6;
  const slicedArray = initial_state.slice(0, size).map((m, idx) => {
    return (
      <div
        className="flex flex-col h-30 bg-red-300  hover:bg-red-500 lg:overflow-hidden  p-4 ease-in-out transition-all rounded-lg "
        key={idx}
      >
        <div className=" lg:overflow-hidden">
          <img src={m.img} alt="" className="h-30 w-60" />
          <div className="">
            <p>{m.musicName}</p>
            <p>{m.description}</p>
          </div>
        </div>
      </div>
    );
  });
  return <>{slicedArray}</>;
};
