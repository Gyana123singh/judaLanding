import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Privacy Policy
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          App Name: <span className="font-semibold text-slate-900">Juda Voice Chat</span>
        </p>

        {/* Section */}
        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              1. Introduction
            </h2>
            <p className="text-slate-700 leading-7">
              Welcome to <strong>Juda Voice Chat</strong>, a platform designed to provide seamless
              voice chat, video chat, and gaming experiences. Your privacy is extremely important to us.
              This Privacy Policy explains in detail how we collect, use, and protect your personal information
              when you use our application. By using our services, you agree to the practices described in this policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              2. Information We Collect
            </h2>

            <p className="text-slate-700 mb-4">
              We collect different types of information to provide and improve our services.
            </p>

            <h3 className="font-semibold mt-4 mb-2">a. Personal Information</h3>
            <p className="text-slate-700 leading-7">
              When you register or use our app, we may collect basic personal details such as your
              name or username, email address, and phone number (if used for login). Additionally,
              you may choose to provide profile details like your photo, bio, or preferences to enhance
              your experience within the app.
            </p>

            <h3 className="font-semibold mt-4 mb-2">b. Communication Data</h3>
            <p className="text-slate-700 leading-7">
              While using our platform, you may participate in voice chats, video chats, and messaging.
              These interactions are essential for the core functionality of the app.
            </p>
            <p className="mt-2 text-red-600 text-sm">
              ⚠️ We do not permanently store or record voice or video calls unless required for safety,
              moderation, or legal compliance.
            </p>

            <h3 className="font-semibold mt-4 mb-2">c. Device & Usage Data</h3>
            <p className="text-slate-700 leading-7">
              We automatically collect technical data such as your device type, operating system,
              IP address, and how you interact with the app. This includes usage patterns, performance
              logs, and crash reports to improve reliability and user experience.
            </p>

            <h3 className="font-semibold mt-4 mb-2">d. Gaming Data</h3>
            <p className="text-slate-700 leading-7">
              For gaming features within the app, we collect information such as game activity,
              scores, achievements, and user participation to enhance gameplay and maintain fairness.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-700 leading-7">
              The information we collect is used to operate and improve our services. This includes enabling
              real-time communication between users, enhancing gaming experiences, ensuring user safety,
              preventing misuse, and analyzing performance to continuously improve the app.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              4. Permissions We Use
            </h2>
            <p className="text-slate-700 leading-7">
              To provide core features, our app may request access to your device’s camera for video calls,
              microphone for voice chat, storage for profile images or media sharing, and internet access
              for communication and gaming functionalities. These permissions are used strictly for app features.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              5. Data Sharing
            </h2>
            <p className="text-slate-700 leading-7">
              We respect your privacy and do not sell your personal data. However, we may share information
              with trusted service providers such as hosting platforms, analytics tools, or Firebase services.
              Data may also be shared with legal authorities if required by law or with moderation systems
              to maintain a safe environment.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              6. Data Security
            </h2>
            <p className="text-slate-700 leading-7">
              We use industry-standard security measures to protect your information. While we take strong
              precautions, it is important to understand that no method of data transmission over the internet
              is completely secure.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              7. User Safety & Moderation
            </h2>
            <p className="text-slate-700 leading-7">
              To ensure a safe and respectful environment, we may monitor or review content when abuse is reported.
              Users who violate rules or engage in harmful behavior may face restrictions, suspension, or permanent bans.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              8. Children’s Privacy
            </h2>
            <p className="text-slate-700 leading-7">
              Juda Voice Chat is not intended for users under the age of 13. We do not knowingly collect
              personal data from children. If such data is found, we will take immediate steps to remove it.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              9. Your Rights
            </h2>
            <p className="text-slate-700 leading-7">
              You have full control over your data. You can request access to your information, correct
              inaccuracies, delete your data, or withdraw consent at any time.
            </p>

            <p className="mt-2 text-slate-700">
              Contact us at:{" "}
              <a
                href="mailto:work.voicechatapplication@gmail.com"
                className="text-red-500 font-medium hover:underline"
              >
                work.voicechatapplication@gmail.com
              </a>
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              10. Third-Party Services
            </h2>
            <p className="text-slate-700 leading-7">
              Our app may integrate third-party services such as Firebase, analytics tools, and payment gateways.
              These services operate independently and have their own privacy policies.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              11. Changes to This Policy
            </h2>
            <p className="text-slate-700 leading-7">
              We may update this Privacy Policy from time to time. Any changes will be posted within the app
              or on our website. Continued use of the app means you accept the updated policy.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              12. Contact Us
            </h2>
            <p className="text-slate-700 leading-7">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>

            <p className="mt-2 font-medium text-red-500">
              work.voicechatapplication@gmail.com
            </p>
          </section>

        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-slate-500">
          By using our app, you agree to this Privacy Policy.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;