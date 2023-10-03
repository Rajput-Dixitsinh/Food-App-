
const Shimmer = () => {
    return (
      <div className="flex flex-wrap items-center justify-center mt-4">
        {Array(15).fill("").map((e, index) => (
          <div
            key={index}
            className="shimmer-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  