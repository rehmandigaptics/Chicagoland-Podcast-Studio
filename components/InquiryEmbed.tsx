"use client";

import Script from "next/script";

export default function InquiryEmbed() {
  return (
    <aside className="inquiry-panel" aria-label="Session enquiry form">
      <div className="inquiry-panel-head">
        <span className="inquiry-panel-kicker">[ PREPARE YOUR ENQUIRY ]</span>
        <p className="inquiry-panel-note">
          Share your format and timing — we’ll follow up with package details.
        </p>
      </div>
      <div className="inquiry-embed">
        <iframe
          src="https://links.360growthlab.com/widget/form/LJW1MLJXQy7IaEMEIeY1"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 0,
          }}
          id="inline-LJW1MLJXQy7IaEMEIeY1"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Prepare my Inquiry Form Rehman Ali"
          data-height="679"
          data-layout-iframe-id="inline-LJW1MLJXQy7IaEMEIeY1"
          data-form-id="LJW1MLJXQy7IaEMEIeY1"
          data-cookie-consent="true"
          data-cookie-consent-provider="auto"
          title="Prepare my Inquiry Form Rehman Ali"
          loading="lazy"
        />
        <Script
          src="https://links.360growthlab.com/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>
    </aside>
  );
}
