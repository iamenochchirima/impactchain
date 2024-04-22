import { useState } from "react";

const LinkDevice = ({ setLinkDevice, setIotDevice }) => {
const [name, setName] = useState("");
  const [platform, setPlatform] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  const handleSave = async () => {
    setIotDevice({
      name: name,
      platform: platform,
      ipAddress: ipAddress,
    });
    setLinkDevice(false);
  };
  return (
    <div className="fixed z-100 inset-0 text-cyan-700 overflow-y-auto bg-black bg-opacity-75">
      <div className=" flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-TelegraphRegular">
        <div
          className={`bg-gray-900 rounded w-full px-6 py-2 min-w-min max-w-[1200px] space-y-8`}
        >
          <div className="flex">
            <div className="flex justify-start w-[100px]">
              <img src="i.c.logo2.png" alt="logo-image" className="h-20 w-20" />
            </div>
            <div className="w-full">
              <h3 className="text-3xl font-bold text-white mt-4 text-center font-TelegraphBold ">
                Upload documentation
              </h3>
              <form                                                                                                                                                                                            
                className="bg-black shadow-md font-PoppinsRegular rounded px-8 pt-6 pb-8 mb-4 mt-10 text-white"
              >
                <div className="mb-4">
                    <input
                      className="shadow placeholder-white min-w-[150px]  placeholder:text-sm placeholder:text-gray-300   rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Name"
                     value = {name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
            
                  </div>
                <div className="mb-4">
                    <input
                      className="shadow placeholder-white min-w-[150px]  placeholder:text-sm placeholder:text-gray-300   rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                      id="platform"
                      type="text"
                      placeholder="Platform e.g Mac"
                      onChange={(e) => setPlatform(e.target.value)}
                      value = {platform}
                      required
                    />
                  </div>
                <div className="mb-4">
                  <input
                    className="shadow placeholder-white min-w-[300px]  placeholder:text-sm placeholder:text-gray-300   rounded-3xl appearance-none border-2 border-green-500 w-full py-2 px-3 text-gray-white bg-black leading-tight focus:outline-none focus:shadow-outline"
                    id="ipAddress"
                    type="text"
                    placeholder="IP Address"
                    onChange={(e) => setIpAddress(e.target.value)}
                    value = {ipAddress}
                    required
                  />
                </div>
              </form>
              <div className="flex justify-between items-center py-4">
                <button
                  onClick={() => setLinkDevice(false)}
                  className={`bg-custom-green px-10 py-1.5  rounded-full text-black font-bold`}
                >
                  Cancel
                </button>
                <button
                    onClick={handleSave}
                  className={`bg-custom-green px-10 py-1.5  rounded-full text-black font-bold`}
                >
                  Save & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkDevice;
