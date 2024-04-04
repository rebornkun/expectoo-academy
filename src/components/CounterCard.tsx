const CounterCard = ({ text, count }: { text: string; count: string }) => {
  return (
    <div className="h-[160px] flex-1 min-w-[250px] max-w-[250px] bg-white shadow rounded-[16px] flex flex-col  items-center justify-center ">
      <h1 className="text-[36px] leading-[60px] 2xl:text-[48px] 2xl:leading-[72px] font-[600] text-pink text-center">
        {count}
      </h1>

      <p className="text-[14px] leading-[16px] 2xl:text-[16px] 2xl:leading-[19px] font-[400] text-[#00000080] text-center">
        {text}
      </p>
    </div>
  );
};

export default CounterCard;
