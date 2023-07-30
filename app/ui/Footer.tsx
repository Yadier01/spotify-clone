export const Footer = () => {
  return (
    <div className="flex  justify-around pt-32">
      <div className=" flex flex-col gap-2">
        <h3 className="font-bold">Company</h3>
        <p className="text-gray-400">About</p>
        <p className="text-gray-400">jobs</p>
        <p className="text-gray-400">For the Record</p>
      </div>
      <div className=" flex flex-col gap-2">
        <h3 className="font-bold">Communities</h3>
        <p className="text-gray-400">For Artists</p>
        <p className="text-gray-400">Developers</p>
        <p className="text-gray-400">Advertising</p>
        <p className="text-gray-400">Vendors</p>
        <p className="text-gray-400">Investors</p>
      </div>

      <div className=" flex flex-col gap-2">
        <h3 className="font-bold">Useful links</h3>
        <p className="text-gray-400">Free Mobile App</p>
        <p className="text-gray-400">Support</p>
      </div>
    </div>
  );
};
