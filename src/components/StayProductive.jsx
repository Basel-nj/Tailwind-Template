function StayProductive() {
   return (
      <section className="pb-[150px]">
         <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
            <div>
               <img
                  src="/src/assets/images/illustration-stay-productive.png"
                  alt="Stay Productive"
               />
            </div>
            <div className="text-white ">
               <h3 className="font-meduim text-[35px] leading-[50px]">
                  Stay Productive
                  <br />
                  wherever you are
               </h3>
               <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                  <p className="mb-[15px]">
                     {" "}
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut lab Lorem ipsum dolor
                     sit amet, consectetur adipiscing elit
                  </p>
                  <p>
                     {" "}
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut lab Lorem ipsum dolor
                     sit amet, consectetur adipiscing elit
                  </p>
               </div>
               <a
                  href="/"
                  className="text-primary hover:text-[#42b0d1] flex items-center gap-[15px] w-fit border-b-2 border-primary border-solid transition-colors duration-200 pb-[5px]"
               >
                  See how Fylo works
                  <img
                     src="/src/assets/images/icon-arrow.svg"
                     alt="arrow"
                     className="w-[20px] h-[20px] object-contain ml-4 animate-[moveRight_1s_ease-in-out_infinite]"
                  />
               </a>
            </div>
         </div>
      </section>
   );
}

export default StayProductive;
