import oval from "../assets/Oval.svg";
import button from "../assets/backbutton.svg";
const MobileCss = () => {
  return (
    <div>
      <div
        className="text-black relative w-[15.4375rem] h-[42rem] ml-[21.5rem] mt-24
        bg-white rounded-[1.875rem] shadow-2xl ">
        <div
          className="w-[8.0625rem] h-[1.8125rem] m-auto rounded-b-[0.875rem]
         bg-white relative"></div>
        <div className="mx-3 pt-9">
          <div
            className=" bg-gradient-to-r  from-purple-600 to-[#E844FF] 
             w-full h-[4.125rem] rounded-t-[1.25rem] rounded-b-[0.375rem] -mt-[52px]">
            <div className=" flex gap-2 px-3 pt-7">
              <img className="" src={button} alt="" />
              <img src={oval} alt="" />
              <div>
                <p>Samuel Green</p>
                <p className="font-rubik font-[700]">Available to Walk</p>
              </div>
            </div>
            <div>{/* <img src={dotes} alt="" /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCss;
