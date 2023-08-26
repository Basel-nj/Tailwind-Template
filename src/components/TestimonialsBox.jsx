function TestimonialsBox({ desc, position, name, image }) {
   return (
      <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[5px_5px_1px_5px_#1c202c]">
         <p className="font-normal text-sm tracking-[0.8px] mb-[30px]  ">
            {desc}
         </p>
         <div className="flex items-center gap-[15px]">
            <img
               src={`/src/assets/images/${image}`}
               className="w-[50px] h-[50px] rounded-full object-contain"
            />
            <div>
               <strong className="block mb-[5px]">{name}</strong>
               <p className="font-normal">{position}</p>
            </div>
         </div>
      </div>
   );
}

export default TestimonialsBox;
