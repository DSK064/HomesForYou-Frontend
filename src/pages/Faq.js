import React from "react";
import { Link } from "react-router-dom";
const Faq = () => {
  return (
    <div className="text-justify flex flex-col justify-center items-center p-8">
      <div className="mt-5">Frequently Asked Questions</div>
      <div className="mt-5">
        <p>
          Why do I need a verified account to use NoBroker.in services? At
          NoBroker.in our main aim is to eliminate brokers from whole rental
          scene. In order to achieve that we verify each owner/tenant's account
          and activate it after verifying that the user is genuine. How long
          does it take for email verification? Email verification is very
          simple. As soon as you register you will receive a mail with link to
          verify your email. It hardly takes a couple of minutes. How long does
          it take for mobile number verification? Our CSR's work tirelessly to
          verify your account asap. Generally a mobile number verification
          happens in less than 4 hours. How will I know if my account is
          verified? You will be notified about the account verification via
          email and sms. Is it safe to use login via facebook & Google (social
          network)? At NoBroker customer satisfaction is our main aim and we
          don't post anything on your social network for cheap publicity We
          don't ask for any extra information when you login with your social
          account If you use your social account, you will not have to remember
          one more cryptic password :) And Your email will be automatically
          verified If you are registering with social account, please make sure
          that your provide your mobile number at profile page after login
        </p>
      </div>
      <div className="mt-5">
        <button onClick={()=>window.history.back()} className="px-4 py-2  outline outline-2 outline-orange-500">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Faq;
