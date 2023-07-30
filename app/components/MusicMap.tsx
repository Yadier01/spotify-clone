import { DesktopMusicMapped } from "../ui/DesktopMusicMapped";
import initial_state from "../initialState.json";
export const MusicMap = () => {
  return (
    <>
      {/* mobile version */}
      <div className="flex lg:hidden gap-4 h-1/2  w-screen  overflow-x-auto overscroll-y-contain  ">
        {initial_state.map((m, idx) => (
          <div
            className="flex flex-col  bg-red-300  hover:bg-red-500 lg:overflow-hidden  p-4 ease-in-out transition-all rounded-lg "
            key={idx}
          >
            <div className=" lg:overflow-hidden">
              <img src={m.img} alt="" className="" />
              <div className="">
                <p>{m.musicName}</p>
                <p>{m.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* desktop */}
      <div className="hidden lg:flex  gap-4 h-1/2  w-screen lg:gap-4 lg:w-auto lg:overflow-hidden overflow-x-auto overscroll-y-contain  ">
        <DesktopMusicMapped />
      </div>
    </>
  );
};
