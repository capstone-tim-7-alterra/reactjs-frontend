import Gambar from "../../assets/handphone.png";

export default function HeroSection () {
    return (
        <div className="flex flex-col justify-center items-center">
          <div className="text-center mt-10 mb-10 flex flex-col-2">
            <h1 className="text-4xl font-bold text-gray-800">Embrace Local Creativity with Kreasi Nusantara</h1>
          </div>
          <div className="text-xl text-gray-600 px-8 mb-10">
            <p>Embrace Local Creativity with Kreasi Nusantara</p>
          </div>
          <img src={Gambar} className="flex justify-items-start w-1/4 ml-80" />
          <div className="flex justify-center pt-16">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download Now →
            </button>
          </div>
          <div className="flex justify-center pt-16">
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-800 font-semibold">Jones Adam</p>
              <p className="text-sm text-gray-500">
                The perfect opp for discovering and supporting local ortan
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 px-16">
              <p className="text-gray-800 font-semibold">Jenny Wilson</p>
              <p className="text-sm text-gray-500">
                This app is a must have! It's my go-to for local art events.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-gray-800 font-semibold">Ronald Richards</p>
              <p className="text-sm text-gray-500">
                One of the best local culture apps I have ever come across.
              </p>
            </div>
          </div>
        </div>
      );
}




  

