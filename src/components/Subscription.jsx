import React from "react";
import SubscriptionCard from "./SubscriptionCard";

export default function Subscription() {
  return (
    <div className="flex flex-wrap justify-center items-center max-w-[2400px] mx-auto px-20 max-2xl:px-10 max-sm:px-5 py-10 4xl:py-20 relative max-2xl:gap-7 gap-3">
      <SubscriptionCard title="Starter" free={1} color="#0C99FF" price="$9.99" ReferralDis="5%" />
      <SubscriptionCard title="Boomer" free={2} color="#FA4601" price="$19.99" ReferralDis="5%" PartnerDis="5%"/>
      <SubscriptionCard title="Platinum" free={10} color="#01C8D8" price="$49.99" ReferralDis="10%" PartnerDis="10%" popular={true}/>
      <SubscriptionCard title="Gold" free={25} color="#FBBB01" price="$100" ReferralDis="25%" PartnerDis="10%"/>
      <SubscriptionCard title="Black" free={150} color="#23282E" price="$500" ReferralDis="50%" CustomisedDis="20"/>
    </div>
  );
}
