import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-stretch">
      <Navbar />
      <div className="flex-1 flex flex-col bg-background pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-text-primary prose-a:text-primary max-w-none">
            <h1>Terms of Service</h1>
            <p><strong>Last Updated:</strong> July 30, 2026</p>
            
            <p>
              Welcome to LastGood ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of the LastGood website, software, APIs, and change-correlation services (collectively, the "Service").
            </p>
            <p>
              By accessing or using our Service, creating an account, or connecting your third-party integrations, you agree to be bound by these Terms. If you are entering into these Terms on behalf of an organization, you represent that you have the authority to bind that organization.
            </p>

            <hr className="my-8 border-border" />

            <h2>1. Description of Service</h2>
            <p>
              LastGood provides continuous telemetry alert and change-correlation software designed to assist software engineering teams in identifying root causes during system incidents. The Service ingests metadata, logs, feature flag changes, deployment records, and alert triggers from your configured integrations to produce correlation timelines and automated diagnostic summaries.
            </p>

            <hr className="my-8 border-border" />

            <h2>2. Beta / Early Access Notice</h2>
            <p>If you are participating in a Beta, Waitlist, or Early Access program:</p>
            <ul>
              <li>The Service is provided <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> for testing and evaluation purposes.</li>
              <li>We reserve the right to modify, pause, or discontinue features of the Beta service at any time without notice.</li>
              <li>We do not guarantee uptime SLAs or data persistence during Beta or free preview periods.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>3. Account & Integration Responsibilities</h2>
            <ul>
              <li><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your API keys, account credentials, and connected third-party integration tokens (e.g., GitHub, PagerDuty, AWS, LaunchDarkly).</li>
              <li><strong>Authorized Use:</strong> You agree not to misappropriate access credentials or grant access to unauthorized third parties.</li>
              <li><strong>Service Limits:</strong> You agree to adhere to tier ingestion limits (e.g., daily signal limits, retention windows). We reserve the right to throttle or temporarily suspend accounts that exceed reasonable API or system usage thresholds.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>4. Customer Data & Privacy</h2>
            <ul>
              <li><strong>Ownership:</strong> You retain all ownership rights to the logs, telemetry, metadata, and deployment traces you route to the Service ("Customer Data").</li>
              <li><strong>License to Host:</strong> You grant LastGood a limited, non-exclusive, worldwide license to ingest, store, and process Customer Data solely to provide, maintain, and improve the Service for your account.</li>
              <li><strong>LLM / AI Model Privacy:</strong> LastGood processes incident logs and telemetry in memory to generate diagnostic summaries. <strong>We do not train, fine-tune, or improve public or proprietary third-party AI models using your private Customer Data or code snippets.</strong></li>
              <li><strong>Data Retention:</strong> Customer Data is retained strictly according to your selected plan's retention schedule and is purged automatically thereafter.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>5. Acceptable Use Policy</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Ingest sensitive Personal Identifiable Information (PII), payment card data (PCI-DSS), or protected health information (HIPAA).</li>
              <li>Reverse-engineer, decompile, or attempt to extract source code or underlying algorithms from the Service.</li>
              <li>Impair, disrupt, or overload our infrastructure or interfere with other users' access to the Service.</li>
              <li>Attempt unauthorized access to system logs or data belonging to other accounts.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>6. Subscriptions, Invoicing, and Cancellations</h2>
            <ul>
              <li><strong>Paid Plans:</strong> Paid features (e.g., Pro, Enterprise) are billed on a recurring monthly or annual subscription basis.</li>
              <li><strong>Upgrades & Downgrades:</strong> Any plan upgrades take effect immediately. Downgrades take effect at the end of the current billing cycle.</li>
              <li><strong>Cancellation:</strong> You may cancel your subscription at any time within your account dashboard. Upon cancellation, your access to paid features will terminate at the end of your prepaid billing period.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>7. Intellectual Property</h2>
            <p>
              LastGood and its original content, features, dashboard designs, and core architecture remain the exclusive property of the Company. The service marks, trademarks, and logos displayed on the Service are registered or unregistered trademarks of LastGood.
            </p>

            <hr className="my-8 border-border" />

            <h2>8. Limitation of Liability & Disclaimer</h2>
            <ul>
              <li><strong>No Incident Guarantee:</strong> LastGood provides correlation analysis and automated recommendations to assist engineers. <strong>LastGood is not an automated failover service and does not guarantee that incidents, outages, or bugs will be prevented or correctly diagnosed.</strong></li>
              <li><strong>Disclaimer:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.</li>
              <li><strong>Cap on Liability:</strong> IN NO EVENT SHALL LASTGOOD BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR SPECIAL DAMAGES (INCLUDING LOSS OF PROFITS, DATA LOSS, OR SYSTEM DOWNTIME) ARISING OUT OF YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO LASTGOOD IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</li>
            </ul>

            <hr className="my-8 border-border" />

            <h2>9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the Service immediately, without prior notice, if you breach these Terms or engage in activities that compromise system security or operational integrity.
            </p>

            <hr className="my-8 border-border" />

            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. If a material change is made, we will notify you via email or through a prominent notice on our website prior to the change taking effect. Continued use of the Service after changes take effect constitutes acceptance of the new Terms.
            </p>

            <hr className="my-8 border-border" />

            <h2>11. Contact Us</h2>
            <p>If you have questions regarding these Terms, please contact us at:</p>
            <ul>
              <li><strong>Email:</strong> undefined.kishan@gmail.com</li>
              <li><strong>Website:</strong> <a href="https://lastgood.space">https://lastgood.space</a></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
