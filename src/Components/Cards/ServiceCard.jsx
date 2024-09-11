import { IoIosArrowForward } from "react-icons/io";

const ServiceCard = ({service,i}) => {
  return (
    <div
      className="w-full sm:max-w-[277px] min-h-[480px] shadow-[0px_0px_12px_8px_rgba(0,0,0,0.02)] rounded-full py-6 px-3 flex flex-col justify-between items-center border border-neutral-grey-100 "
      key={i}
    >
      
      <div className="min-h-[150px] min-w-[150px] sm:min-h-[200px] sm:min-w-[200px] rounded-full">
      <img
          src={service.Image}
          alt="services"
          className="h-full w-full object-cover rounded-full"
        />
        
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg md:text-xl font-semibold font-inter">
          {service.title}
        </h3>
        <p className="text-sm text-neutral-grey-300 mt-2">{service.content}</p>
      </div>
      <button className="font-extrabold rounded-full p-3 text-white bg-primary mt-4 hover:bg-primary-dark opacity-0">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default ServiceCard;
