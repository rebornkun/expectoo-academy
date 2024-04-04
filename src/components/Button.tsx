const Button = ({
  type,
  text,
  link,
}: {
  type: string;
  text: string;
  link: string;
}) => {
  return (
    <button
      className={`px-[2.5rem] w-fit py-[1rem] rounded-[10px] text-[12px] leading-[16px] 2xl:text-[14px] 2xl:leading-[21px] font-[600] bg-pink text-white poppins transition-all duration-[250ms] ease-in-out active:scale-[0.9] ${
        type === "outline" && "border-white border-[2px] bg-transparent "
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
