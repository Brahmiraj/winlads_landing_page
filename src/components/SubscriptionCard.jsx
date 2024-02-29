import { FaCheck } from "react-icons/fa6";

export default function SubscriptionCard({
  title,
  free,
  color,
  price,
  ReferralDis,
  PartnerDis,
  CustomisedDis,
}) {
  const gradientStyle = {
    background: `linear-gradient(to bottom, ${color}, white)`,
  };

  return (
    <div
      style={gradientStyle}
      className="border-[1px] border-gray-500 flex flex-col justify-center items-center p-5 text-white shadow-2xl w-full gap-5"
    >
      <h1 className="text-lg font-bold 4xl:text-4xl">{title} Tier</h1>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold  4xl:text-9xl">{free}</h1>
        <h1 className="text-sm font-semibold 4xl:text-3xl">Free</h1>
      </div>
      <h1 className="text-xs font-semibold  4xl:text-2xl">Accumulating Entries</h1>
      <div className="w-full rounded-sm bg-white border-[1px] border-gray-500 flex flex-col justify-center items-center text-black p-2 h-40 4xl:h-80">
        <h1 className="font-bold text-2xl 4xl:text-7xl">{price}</h1>
        <h1 className="font-semibold text-xs 4xl:text-2xl">per month</h1>
        <button style={{ background: color }} className="w-full rounded-sm text-white 4xl:text-2xl 4xl:p-3">
          ONE OFF PACKAGES
        </button>
        <div className="w-full h-32 flex flex-col gap-2">
  {ReferralDis && (
    <div className="flex justify-start items-start w-full gap-1">
      <div className="w-4">
        <FaCheck className="text-green-600 w-full" />
      </div>
      <h1 className="text-xs 4xl:text-2xl">Referral Store Discounts: {ReferralDis}</h1>
    </div>
  )}
  {PartnerDis && (
    <div className="flex justify-start items-start w-full gap-1">
      <div className="w-4">
        <FaCheck className="text-green-600 w-full" />
      </div>
      <h1 className="text-xs 4xl:text-2xl">Partner Store Discounts: {PartnerDis}</h1>
    </div>
  )}
  {CustomisedDis && (
    <div className="flex justify-start items-start w-full gap-1">
      <div className="w-6">
        <FaCheck className="text-green-600 w-full" />
      </div>
      <h1 className="text-xs 4xl:text-2xl">
        Customised Partner Store discount rates ranging up to{" "}
        {CustomisedDis}
      </h1>
    </div>
  )}
</div>
        <h1 className="self-end text-[10px] place-content-end" style={{ color: color }}>
          View More
        </h1>
      </div>
      <button style={{ background: color }} className="w-full rounded-sm">
        SIGN UP
      </button>
    </div>
  );
}
