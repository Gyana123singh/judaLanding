import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-12">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          Refund Policy
        </h1>

        <p className="text-sm text-slate-500 mb-8">
          App Name: <span className="font-semibold text-slate-900">Juda Voice Chat</span>
        </p>

        <div className="space-y-10">

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              1. Introduction
            </h2>
            <p className="text-slate-700 leading-7">
              This Refund Policy explains how refunds are handled for purchases made within
              <strong> Juda Voice Chat</strong>. These purchases may include subscriptions,
              virtual items, or premium features related to voice chat, video chat, and gaming services.
            </p>
            <p className="text-slate-700 mt-2 leading-7">
              By making a purchase in the app, you agree to the terms of this Refund Policy.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              2. No Refund Policy (Digital Services)
            </h2>
            <p className="text-slate-700 leading-7">
              All purchases made within the app are considered final and non-refundable.
              This applies to all types of digital services and products offered within the platform.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Subscription plans</li>
              <li>• Virtual items such as coins, tokens, or credits</li>
              <li>• Premium features and upgrades</li>
            </ul>

            <p className="mt-3 text-red-600 font-medium">
              Once a purchase is completed, it cannot be canceled or refunded under normal circumstances.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              3. Exceptions
            </h2>
            <p className="text-slate-700 leading-7">
              In certain limited situations, refunds may be considered. These cases are reviewed carefully
              and individually.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Duplicate or accidental transactions</li>
              <li>• Unauthorized purchases (after verification)</li>
              <li>• Technical issues that prevent access to purchased services</li>
            </ul>

            <p className="mt-3 text-slate-700">
              All refund requests are reviewed on a case-by-case basis, and approval is not guaranteed.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              4. Subscription Cancellation
            </h2>
            <p className="text-slate-700 leading-7">
              Users are free to cancel their subscriptions at any time through their account or platform settings.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Cancellation will stop future billing</li>
              <li>• You will continue to have access until the current billing period ends</li>
              <li>• No refunds will be issued for the current billing cycle</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              5. Third-Party Payments
            </h2>
            <p className="text-slate-700 leading-7">
              If your purchase was made through external platforms such as:
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Google Play Store</li>
              <li>• Apple App Store</li>
            </ul>

            <p className="mt-3 text-slate-700 leading-7">
              Then refund requests must be submitted directly through those platforms.
              We do not have control over their payment systems or refund decisions.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              6. Processing Time
            </h2>
            <p className="text-slate-700 leading-7">
              If a refund is approved, it will be processed within a reasonable time frame.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Typically takes 5–10 business days</li>
              <li>• Amount will be returned to the original payment method</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              7. Abuse of Refund Policy
            </h2>
            <p className="text-slate-700 leading-7">
              To prevent misuse, we monitor refund requests. If a user attempts to abuse the refund system,
              we reserve the right to take action.
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Deny refund requests</li>
              <li>• Suspend or restrict user accounts</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-3 border-l-4 border-red-500 pl-3">
              8. Contact Us
            </h2>
            <p className="text-slate-700 leading-7">
              If you wish to request a refund or report an issue, please contact us with the required details:
            </p>

            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Transaction ID</li>
              <li>• Date of purchase</li>
              <li>• Description of the issue</li>
            </ul>

            <p className="mt-3 font-medium text-red-500">
              Email: work.voicechatapplication@gmail.com
            </p>
          </section>

        </div>

        {/* Footer */}
        <p className="mt-12 text-center text-sm text-slate-500">
          By making a purchase in Juda Voice Chat, you agree to this Refund Policy.
        </p>

      </div>
    </div>
  );
};

export default RefundPolicy;