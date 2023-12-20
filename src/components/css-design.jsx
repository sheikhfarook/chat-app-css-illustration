const CssDesign = () => {
  return (
    <div>
      <div className="flex w-full">
        <div
          className="w-[31rem] h-[50rem] fixed -left-[5rem]  
     rounded-b-full bg-gradient-to-r from-[#8739FF] to-[#E844FF]
     max-sm:-left-[14rem] max-sm:h-[55rem] max-sm:rounded-bl-[20rem]"></div>
        <div
          className="w-[31rem] h-[50rem] fixed -right-36
          bg-gradient-to-r  from-[#E844FF] to-[#8739FF]
           opacity-[0.03] rounded-t-full mt-[165px] 
           max-sm:mt-[45rem] max-sm:-right-[8rem] max-sm:h-[55rem] 
           max-sm:rounded-tr-[20rem]"></div>
      </div>
    </div>
  );
};

export default CssDesign;
