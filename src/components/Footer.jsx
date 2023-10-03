// const Footer = () =>{
//     return (
//       <div className='flex flex-col items-center py-4'>
//         <h4 className="px-2 font-semibold">Created By <a href="https://www.linkedin.com/in/dixitsinh-rajput-317874217/" target="_blank"  className="text-orange-600">Dixitsinh</a></h4>

//         <div className="flex items-center">
//         <p className="px-2">Email : rajputdixit333@gmail.com </p>
        
//         </div>
        
//       </div>
//     )
//   }
// export default Footer;



const Footer = () => {
  return (
    <div className="flex flex-col items-center py-4">
      <h4 className="text-black	px-2 font-semibold text-center mb-2 sm:text-lg md:text-xl lg:text-2xl">
        Created By{" "}
        <a
          href="https://www.linkedin.com/in/dixitsinh-rajput-317874217/"
          target="_blank"
          className="text-orange-600"
        >
          Dixitsinh
        </a>
      </h4>

      <div className="flex flex-col items-center">
        <p className=" px-2 text-center mb-2 sm:text-sm md:text-base lg:text-lg">
          Email : rajputdixit333@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Footer;
