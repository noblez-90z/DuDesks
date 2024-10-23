import { Link } from "react-router-dom";
import LayOut from "./LayOut";

const PrivacyPolicy = () => {
  return (
    <LayOut>
      <div className="px-[28px] mt-[56px] md:mt-[95px] bg-[#e2e9f6]">
        <div className="flex gap-1 justify-center items-center capitalize pt-5">
          <p>
            <Link to="/" className="capitalize font-semibold">
              home
            </Link>
          </p>
          <span>/</span>
          <p className="text-[12px]">Privacy Policy</p>
        </div>
        <div className="text-center pt-2">
          <h1 className="text-[24px] font-semibold text-[#041822]">
            Privacy Policy
          </h1>
          <p className="text-[14px] text-[#59676e]">
            Your Data, Your Privacy: Safeguarding Your Information with Care and
            Transparency
          </p>
        </div>
        <div className="block md:flex gap-2 mt-8 pt-4">
          <div className="  w-full">
            <h1 className="text-[18px] text-[#101828] font-semibold">
              Table of contents
            </h1>
            <div className="list-decimal pt-5 text-[#475467]">
              <nav>
                <div className="list-decimal">
                  <li className="py-1">Introduction</li>
                  <li className="py-1">Information we collect</li>
                  <li className="py-1">How to use your information</li>
                  <li className="py-1">Data security</li>
                  <li className="py-1">Data Retention</li>
                  <li className="py-1">Your Data Rights</li>
                  <li className="py-1">Cookies and tracking technologies</li>
                  <li className="py-1">Changes to this privacy policy</li>
                </div>
              </nav>
            </div>
          </div>
          <div className="px-3 mt-5 md:mt-0">
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                1. Introduction
              </h2>
              <p className="text-[14px] text-[#59676e] py-5">
                Welcome to Edudesks. We value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                outlines how we collect, use, and safeguard your data when you
                use our platform.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                2. Information we collect
              </h2>

              <div className="list-none">
                <nav>
                  <div className="">
                    <li className="py-2">
                      <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                        {" "}
                        Personal Information:
                      </h2>
                      <p className="text-[14px] text-[#59676e] ">
                        We collect personal details such as your name, email
                        address, phone number, school name, and other contact
                        details when you register or interact with our platform.
                      </p>
                    </li>
                    <li className="py-2">
                      <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                        Financial Information:
                      </h2>
                      <p className="text-[14px] text-[#59676e] ">
                        For schools using our platform to manage salaries,
                        expenses, and other financial activities, we collect and
                        securely store payment information, such as bank details
                        and transaction history.
                      </p>
                    </li>
                    <li className="py-2">
                      <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                        Usage Data:
                      </h2>
                      <p className="text-[14px] text-[#59676e] ">
                        We gather information about how you use the platform,
                        including login times, the frequency of your
                        interactions, features you access, and the types of
                        actions you perform. This data helps us optimize the
                        user experience and improve functionality.
                      </p>
                    </li>
                    <li className="py-2">
                      <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                        Device and Log Data:
                      </h2>
                      <p className="text-[14px] text-[#59676e] ">
                        We may also collect information about the devices you
                        use to access our platform, including IP addresses,
                        browser type, and operating systems. This helps us
                        maintain the security and integrity of our platform.
                      </p>
                    </li>
                  </div>
                </nav>
              </div>
            </div>

            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                3. How We Use Your Information
              </h2>
              <p className="text-[14px] text-[#59676e] py-5">
                Your information is essential for the functionality of our
                platform. We use it to:
              </p>
              <div className="text-[14px] text-[#59676e]">
                <nav>
                  <li>
                    Provide Services: Manage your account, process payments, and
                    enable key features like salary payments, expense tracking,
                    and school financial management.
                  </li>
                  <li>
                    Personalization: Customize your experience on the platform,
                    making recommendations or providing relevant updates based
                    on your usage.
                  </li>
                  <li>
                    Communication: Send you important notifications, updates, or
                    information about new features, as well as respond to any
                    inquiries or support requests.
                  </li>
                  <li>
                    Analytics and Improvement: Analyze user behavior to enhance
                    the platform's performance and introduce new features that
                    improve your experience.
                  </li>
                  <li>
                    Legal Compliance: Comply with any applicable laws,
                    regulations, or legal requests that may require us to share
                    your data.
                  </li>
                </nav>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                4. Data Security
              </h2>
              <p className="text-[14px] text-[#59676e] py-5">
                We take the security of your data seriously. To protect your
                personal and financial information, we use a range of
                industry-standard measures, including encryption, secure
                servers, and regular security audits. We also limit access to
                sensitive information to authorized personnel only. However,
                please note that no security system is completely foolproof, and
                we cannot guarantee the absolute security of your data.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                5. Data Retention
              </h2>
              <p className="text-[14px] text-[#59676e] py-5">
                We retain your personal and financial data for as long as
                necessary to provide you with our services and comply with legal
                requirements. When data is no longer needed, it is securely
                deleted or anonymized. You have the right to request the
                deletion of your data, as outlined below
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                6. Your Data Rights
              </h2>
              <p className="text-[14px] text-[#59676e] py-2">
                Under applicable privacy laws, you have several rights
                concerning your personal data, including:
              </p>
              <div className="text-[14px] text-[#59676e] py-2">
                <nav>
                  <li>
                    Access and Rectification: You can request access to the
                    personal data we hold about you and request that we correct
                    any inaccuracies.
                  </li>
                  <li>
                    Deletion: You have the right to request that we delete your
                    personal data, subject to any legal obligations that require
                    us to retain it.
                  </li>
                  <li>
                    Data Portability: In some cases, you may request a copy of
                    your data in a machine-readable format.
                  </li>
                  <li>
                    Objection and Restriction: You may object to certain data
                    processing activities, or request that we restrict
                    processing in specific circumstances.
                  </li>
                </nav>
              </div>
              <p className="text-[14px] text-[#59676e] py-5">
                To exercise any of these rights, please contact us using the
                information provided at the end of this policy.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-[14px] text-[#59676e] py-2">
                We use cookies and similar tracking technologies to collect
                information about your interaction with the platform. Cookies
                allow us to improve your experience by:
              </p>
              <div className="text-[14px] text-[#59676e] py-2 ">
                <nav>
                  <li className="">
                    Remembering your login details and other preferences so that
                    you don't have to re-enter them each time you visit.
                  </li>
                  <li>
                    Analyzing usage data to understand how users interact with
                    the platform, which helps us optimize performance.
                  </li>
                  <li>
                    Personalizing content and ads based on your past behavior.
                  </li>
                </nav>
              </div>
              <p className="text-[14px] text-[#59676e] py-2">
                You can manage or disable cookies through your browser settings,
                though this may limit your ability to use certain features on
                the platform.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                8. Changes to This Privacy Policy
              </h2>
              <p className="text-[14px] text-[#59676e] py-2">
                We may update this Privacy Policy periodically to reflect
                changes in our practices, legal requirements, or technological
                advances. Any significant updates will be communicated via email
                or an in-app notification. Please review this policy regularly
                to stay informed about how we protect your privacy.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                9. Contact Us
              </h2>
              <p className="text-[14px] text-[#59676e] py-2">
                If you have any questions, concerns, or requests related to this
                Privacy Policy or your personal data, please contact us at:
              </p>
              <p className="text-[14px] text-[#59676e] py-2">
                Email: ann187@ensign.edu
              </p>
              <p className="text-[14px] text-[#59676e] py-2">
                We are committed to responding to your inquiries and resolving
                any concerns in a timely manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default PrivacyPolicy;
