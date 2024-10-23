import { Link } from "react-router-dom";
import LayOut from "./LayOut";

const Terms = () => {
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
          <p className="text-[12px]">Terms of service</p>
        </div>
        <div className="text-center pt-2">
          <h1 className="text-[24px] font-semibold text-[#041822]">
            Terms of Service
          </h1>
          <p className="text-[14px] text-[#59676e]">
            Your Agreement with Us: Understanding the Terms for Using Our
            Platform
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
                  <li className="py-1">Use of the platform</li>
                  <li className="py-1">Subscription and payment terms</li>
                  <li className="py-1">User responsibilities</li>
                  <li className="py-1">Termination</li>
                  <li className="py-1">Limitation of liabilities</li>
                  <li className="py-1">Data and privacy</li>
                  <li className="py-1">Modification to the terms</li>
                  <li className="py-1">Contact information</li>
                </div>
              </nav>
            </div>
          </div>
          <div className="px-3 mt-5 md:mt-0">
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                Introduction
              </h2>
              <p className="text-[14px] text-[#59676e] py-5">
                Welcome to Edudesks. These Terms of Service ("Terms") govern
                your use of our platform and services. By accessing or using
                Edudesks, you agree to comply with and be bound by these Terms.
                If you do not agree to these Terms, please do not use our
                platform.
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                2. Use of the Platform
              </h2>
              <nav>
                <div className="text-[14px] text-[#59676e] list-none">
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Eligibility:
                    </h2>
                    <p>
                      You must be at least 18 years old or the legal age of
                      majority in your jurisdiction to use the platform. By
                      using [Platform Name], you represent and warrant that you
                      meet these requirements.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Account Registration:
                    </h2>
                    <p>
                      To use certain features, you must create an account. You
                      agree to provide accurate, complete information and to
                      keep your account information up to date. You are
                      responsible for maintaining the confidentiality of your
                      account and password, and for all activities that occur
                      under your account.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      C. Prohibited Activities:
                    </h2>
                    <p>
                      You agree not to engage in any of the following while
                      using the platform:
                    </p>
                  </li>
                </div>
              </nav>
              <nav className="">
                <div className="text-[14px] text-[#59676e]">
                  <li>
                    Using the platform for any unlawful or unauthorized purpose.
                  </li>
                  <li>
                    {" "}
                    Distributing viruses, malware, or other harmful software.
                  </li>
                  <li>
                    Interfering with or disrupting the platform’s operation or
                    security features.
                  </li>
                  <li>
                    Attempting to access or use another user’s account without
                    permission.
                  </li>
                </div>
              </nav>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                3. Subscription and Payment Terms
              </h2>
              <nav>
                <div className="text-[14px] text-[#59676e] list-none">
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Subscription Plans:
                    </h2>
                    <p>
                      Edudesks offers various subscription plans for accessing
                      premium features. Each plan has its own fees, which are
                      disclosed during registration or upon upgrading.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Payment Methods:
                    </h2>
                    <p>
                      Payments are processed securely using third-party payment
                      providers. By providing payment information, you authorize
                      us to charge the applicable fees to your chosen method of
                      payment.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      C. Automatic Renewal:
                    </h2>
                    <p>
                      Unless otherwise stated, all subscription plans
                      automatically renew at the end of their billing cycle
                      (monthly, termly, or yearly). You may cancel your
                      subscription at any time, but no refunds will be provided
                      for partial billing periods
                    </p>
                  </li>
                </div>
              </nav>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                4. User Responsibilities
              </h2>
              <nav>
                <div className="text-[14px] text-[#59676e] list-none">
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Data Accuracy:
                    </h2>
                    <p>
                      As a financial management platform, it is essential that
                      all data entered, including income and expense records, is
                      accurate. You are responsible for ensuring the accuracy of
                      all financial data input.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Compliance with Laws:
                    </h2>
                    <p>
                      You agree to comply with all applicable local, state, and
                      federal laws while using the platform. This includes
                      ensuring that your use of the platform complies with data
                      protection, privacy, and tax laws in your region.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      C. Account Security:
                    </h2>
                    <p>
                      You are responsible for safeguarding your account
                      credentials. If you suspect unauthorized access to your
                      account, you must notify us immediately.
                    </p>
                  </li>
                </div>
              </nav>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                5. Termination
              </h2>
              <div className="text-[14px] text-[#59676e] list-none">
                <nav>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Account Termination:
                    </h2>
                    <p>
                      We reserve the right to suspend or terminate your account
                      if you violate these Terms, misuse the platform, or engage
                      in illegal activities. Upon termination, you will lose
                      access to your account, and any data stored on the
                      platform may be deleted.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Cancellation of Service:
                    </h2>
                    <p>
                      You may cancel your subscription at any time via your
                      account settings. After cancellation, you will continue to
                      have access to paid features until the end of your current
                      billing cycle.
                    </p>
                  </li>
                </nav>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                6. Limitation of Liability
              </h2>
              <div className="text-[14px] text-[#59676e] list-none">
                <nav>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Disclaimer of Warranties:
                    </h2>
                    <p>
                      {" "}
                      The platform is provided on an "as-is" and "as-available"
                      basis. We make no warranties or representations about the
                      accuracy, reliability, or availability of the platform.
                      Your use of the platform is at your own risk.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Limitation of Liability:
                    </h2>
                    <p>
                      In no event shall [Platform Name], its officers,
                      directors, employees, or affiliates be liable for any
                      direct, indirect, incidental, special, or consequential
                      damages arising out of or related to your use of the
                      platform, even if advised of the possibility of such
                      damages.
                    </p>
                  </li>
                </nav>
              </div>
            </div>
            <div className="mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                7. Data and Privacy
              </h2>
              <div className="text-[14px] text-[#59676e] list-none">
                <nav>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      A. Privacy Policy:
                    </h2>
                    <p>
                      Your use of the platform is also governed by our [Privacy
                      Policy], which outlines how we collect, use, and protect
                      your personal information.
                    </p>
                  </li>
                  <li className="py-2">
                    <h2 className="font-medium text-[14px] text-[#59676e] capitalize">
                      B. Data Security:
                    </h2>
                    <p>
                      We implement various security measures to protect your
                      personal and financial data. However, we do not guarantee
                      that unauthorized third parties will never be able to
                      defeat these measures.
                    </p>
                  </li>
                </nav>
              </div>
            </div>
            <div className="text-[14px] text-[#59676e] mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                8. Modifications to the Terms
              </h2>
              <p className="py-2">
                We reserve the right to modify these Terms at any time. When we
                do, we will notify you via email or through the platform. Your
                continued use of the platform after the changes become effective
                constitutes acceptance of the revised Terms.
              </p>
            </div>
            <div className=" text-[14px] text-[#59676e] mt-5">
              <h2 className="font-semibold text-[18px] text-[#041822]">
                9. Contact Information
              </h2>
              <p className="py-2">
                If you have any questions about these Terms or need assistance,
                please contact us at:
              </p>
              <p className="py-2">Email: ann187@ensign.edu</p>
              <div className="inline-flex gap-1">
                <input type="checkbox" name="" id="" />
                <p>I agree to the terms of service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayOut>
  );
};

export default Terms;
