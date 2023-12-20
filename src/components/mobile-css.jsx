import oval from "../assets/Oval.svg";
import button from "../assets/backbutton.svg";
import dotes from "../assets/dotes.svg";
import dog1 from "../assets/Rectangle Copy.svg";
import dog2 from "../assets/Rectangle Copy 2.svg";
import dog3 from "../assets/Rectangle Copy 4.svg";
import sendmsgbtn from "../assets/Group 8.svg";
const MobileCss = () => {
  return (
    <div>
      <div
        className="text-black relative w-[25.8rem]  
         mt-20 bg-white rounded-[1.875rem] shadow-2xl font-rubik xl:ml-[21.5rem] lg:h-[46rem] md:h-[46.2rem] md:m-auto md:mt-20
        max-sm:ml-[4rem] max-sm:mt-32 max-sm:w-[25rem] max-sm:h-[51rem]">
        <div
          className="w-[12rem] h-[2.8125rem] m-auto rounded-b-[1.3rem]
         bg-white relative"></div>
        <div className="mx-4 pt-[1.5rem] space-y-[12px] bg-[#F5F3F7] pb-5 rounded-b-[1.25rem] max-sm:space-y-4 ">
          <div
            className=" bg-gradient-to-r  from-purple-600 to-[#E844FF] 
             w-full pb-3 rounded-t-[1.25rem] rounded-b-[0.375rem] -mt-[52px]">
            <div className=" flex gap-3 px-5 pt-10 ">
              <img className="h-4 my-auto" src={button} alt="" />
              <img className="h-[2.5rem] my-auto" src={oval} alt="" />
              <div>
                <p
                  className="font-rubik text-white text-[1.2rem] font-[500]
                max-sm:text-[1.09rem]">
                  Samuel Green
                </p>
                <p
                  className="font-rubik text-[#D99EFF] text-[0.8rem] font-[400]
                max-sm:text-[0.75rem]">
                  Available to Walk
                </p>
              </div>
              <img className="h-4 my-auto ml-[7.8rem]" src={dotes} alt="" />
            </div>
          </div>
          <div
            className="w-[13rem] bg-[#EEE5F4] rounded-t-[1.25rem] 
          rounded-br-[1.25rem] rounded-bl-[0.5rem] ml-3 max-sm:w-[13rem]">
            <p className="px-3.5 py-2 text-[0.8rem] text-[#9341C8] max-sm:hidden">
              That sounds great. I’d be happy with that.
            </p>
            <p
              className="px-3.5 py-2 text-[0.9rem] text-[#9341C8]  2xl:hidden xl:hidden md:hidden
              lg:hidden
            ">
              That sounds great. I’d be happy to discuss more.
            </p>
          </div>
          <div
            className="w-[13rem] bg-[#EEE5F4]  rounded-t-[1.25rem] 
          rounded-br-[1.25rem] rounded-bl-[0.5rem] ml-3 max-sm:w-[13rem]">
            <p
              className="px-3.5 py-2 text-[0.8rem] text-[#9341C8]
            max-sm:text-[0.82rem] ">
              Could you send over some pictures of your dog, please?
            </p>
          </div>
          <div
            className="flex gap-3 h-[5rem] mr-3 justify-end
          max-sm:h-[5rem]">
            <img src={dog1} alt="" />
            <img src={dog2} alt="" />
            <img src={dog3} alt="" />
          </div>

          <div
            className="w-[13rem]  ml-[10.25rem] bg-white rounded-t-[1.25rem] 
          rounded-bl-[1.25rem] rounded-br-[0.5rem] max-sm:ml-[8.2rem] max-sm:w-[14rem]">
            <p className="px-3.5 py-2 text-[0.8rem] -mt-5  max-sm:text-[0.895rem]">
              Here are a few pictures. She’s a happy girl!
            </p>
          </div>
          <div
            className="w-[9rem] bg-white ml-[14.25rem] rounded-t-[1rem] 
          rounded-bl-[1rem] rounded-br-[0.5rem]  max-sm:ml-[12.5rem] max-sm:w-[9.5rem]">
            <p className="px-3.5 py-2 text-[0.8rem] max-sm:text-[0.91rem]">
              Can you make it?
            </p>
          </div>
          <div
            className="w-[13rem] bg-[#EEE5F4] rounded-t-[1.25rem] rounded-br-[1.25rem] 
          rounded-bl-[0.5rem] ml-3 max-sm:w-[13rem]">
            <p className="px-3.5 py-2 text-[0.8rem] text-[#9341C8] max-sm:text-[0.83rem]">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </p>
          </div>

          <div
            className="w-[15rem]  rounded-t-[1rem] rounded-br-[1rem] rounded-bl-[0.5rem]
           bg-gradient-to-r from-[#E844FF] to-[#8739FF] ml-3 text-white max-sm:w-[17.65rem]">
            <div className="flex px-3 py-2.5 gap-3 font-rubik ">
              <div className="h-6 w-6  border-2 rounded-full max-sm:my-auto"></div>
              <p className="my-auto text-[0.8rem] max-sm:text-[1rem]">
                30 minute walk
              </p>
              <p className="my-auto ml-9 text-[18px] font-[700] max-sm:text-[23px] max-sm:ml-[50px]">
                $29
              </p>
            </div>
          </div>

          <div
            className="w-[15rem] rounded-t-[1rem] rounded-br-[1rem] rounded-bl-[0.5rem]
           bg-gradient-to-r from-[#E844FF] to-[#8739FF] ml-3 text-white max-sm:w-[17.65rem]">
            <div className="flex px-3 py-2.5 gap-3 font-rubik ">
              <div className="h-6 w-6  border-2 rounded-full max-sm:my-auto"></div>
              <p className="my-auto text-[0.8rem] max-sm:text-[1rem]">
                1 hour walk
              </p>
              <p className="my-auto ml-14 text-[18px] font-[700] max-sm:ml-20 max-sm:text-[23px]">
                $49
              </p>
            </div>
          </div>

          <div className=" bg-white rounded-full m-3 max-sm:h-16">
            <div className=" m-1 flex justify-between ">
              <p className="ml-6 text-[#C5C9CC] py-3 max-sm:py-5 max-sm:ml-7">
                Type a message…
              </p>
              <img
                className="h-10 my-auto max-sm:h-14"
                src={sendmsgbtn}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCss;
