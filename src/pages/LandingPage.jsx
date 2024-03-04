import React from "react";
import Home from "../components/Home";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import SignUp from "../components/SignUp";
import Giveaway from "../components/Giveaway";
import Ad from "../components/Ad";
import Comment from "../components/Comment";
import FollowUs from "../components/FollowUs";
import Faq from "../components/Faq";
import Subscription from "../components/Subscription";
import Register from "../components/Register";
import Footer from "../components/Footer";
import SocialButton from "../components/SocialButton";

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden">
      <div className="max-2xl:hidden ">

        <SocialButton/>
      </div>
      <div>
        <Header />
        <section>
          <Home />
        </section>
        <section>
          <ContactUs />
        </section>
        <section>
          <SignUp />
        </section>
        <section>
          <Giveaway />
        </section>
        <section>
          <Ad />
        </section>
        <section>
          <Comment />
        </section>
        <section>
          <FollowUs />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Subscription />
        </section>
        <section>
          <Register />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
