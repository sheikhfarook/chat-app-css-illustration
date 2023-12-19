import dotes from "../assets/dotes.svg";

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
            className=" bg-gradient-to-r  from-[#E844FF] to-[#8739FF]
             w-full h-[4.125rem] rounded-t-[1.25rem] rounded-b-[0.375rem] -mt-[52px]">
            <div></div>
            <div>{/* <img src={dotes} alt="" /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCss;
