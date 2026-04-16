import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Terms & Conditions
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          App Name: <span className="font-semibold text-slate-900">Juda Voice Chat</span>
        </p>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-700 leading-7">
              By accessing or using <strong>Juda Voice Chat</strong>, you agree to follow and be bound by these Terms & Conditions.
              These terms act as a legal agreement between you and the platform.
              If you do not agree with any part of these terms, you should not use the app.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              2. Description of Services
            </h2>
            <p className="text-slate-700 leading-7">
              Juda Voice Chat offers a variety of features designed for communication and entertainment.
              These include voice chat, video chat, messaging tools, and online gaming experiences.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              We continuously improve our services, so we may update, modify, or discontinue features at any time
              without prior notice.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              3. User Accounts
            </h2>
            <p className="text-slate-700 leading-7">
              When you create an account, you are responsible for keeping your login credentials secure.
              You must provide accurate and complete information while registering.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              Any activity performed using your account is considered your responsibility, so it is important
              to protect your account from unauthorized access.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              4. User Conduct
            </h2>
            <p className="text-slate-700 leading-7">
              To maintain a safe and respectful environment, users must follow certain rules.
              You must not use the app for illegal activities, harmful behavior, or abusive actions.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Sharing offensive or inappropriate content is strictly prohibited</li>
              <li>• Harassing or threatening other users is not allowed</li>
              <li>• Recording or distributing chats without consent is prohibited</li>
              <li>• Attempting to hack or misuse the platform is strictly forbidden</li>
            </ul>

            <p className="mt-3 text-red-600 font-medium">
              Violation of these rules may result in account suspension or permanent ban.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              5. Voice & Video Communication
            </h2>
            <p className="text-slate-700 leading-7">
              Users are responsible for their own interactions during voice and video chats.
              While we aim to provide a secure platform, communication over the internet may not always be fully private.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              In cases of reported misuse or violations, we may review content to ensure compliance with our policies.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              6. Gaming Features
            </h2>
            <p className="text-slate-700 leading-7">
              The gaming features available in the app are designed for entertainment purposes only.
              Scores, rewards, and achievements do not have real-world value unless explicitly stated.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              Any attempt to cheat or misuse gaming features may lead to account restrictions.
              We may also modify or update games at any time.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              7. Content Ownership
            </h2>
            <p className="text-slate-700 leading-7">
              You retain ownership of any content you create or share on the platform.
              However, by using the app, you grant us permission to use, display, and distribute your content
              to improve our services.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              We are not responsible for content created by users and do not guarantee its accuracy or reliability.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              8. Privacy
            </h2>
            <p className="text-slate-700 leading-7">
              Your use of the app is also governed by our Privacy Policy.
              This explains how your personal information is collected, used, and protected.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              9. Third-Party Services
            </h2>
            <p className="text-slate-700 leading-7">
              Juda Voice Chat may integrate third-party services such as Firebase, analytics tools,
              or payment gateways. These services operate independently and have their own policies.
            </p>
            <p className="text-slate-700 mt-2">
              We are not responsible for their actions or privacy practices.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              10. Termination
            </h2>
            <p className="text-slate-700 leading-7">
              We reserve the right to suspend or terminate your account if you violate these Terms.
              This may include removing your content or restricting access to the platform.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              11. Limitation of Liability
            </h2>
            <p className="text-slate-700 leading-7">
              Juda Voice Chat is not responsible for any direct or indirect damages,
              including data loss, financial loss, or issues caused by third-party services.
            </p>
            <p className="text-slate-700 mt-2 font-medium">
              You use the app at your own risk.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              12. Changes to Terms
            </h2>
            <p className="text-slate-700 leading-7">
              We may update these Terms from time to time. Any changes will be communicated within the app
              or website. Continued use of the app means you accept the updated Terms.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              13. Governing Law
            </h2>
            <p className="text-slate-700 leading-7">
              These Terms are governed by the laws of India.
              Any disputes will be handled under applicable Indian legal frameworks.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              14. Contact Us
            </h2>
            <p className="text-slate-700 leading-7">
              If you have any questions, concerns, or feedback regarding these Terms,
              you can contact us at:
            </p>

            <p className="mt-2 font-medium text-red-500">
              work.voicechatapplication@gmail.com
            </p>
          </section>

        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-slate-500">
          By using Juda Voice Chat, you agree to these Terms & Conditions.
        </p>

      </div>
    </div>
  );
};

export default TermsConditions;