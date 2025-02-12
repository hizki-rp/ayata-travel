// components/Privacy.tsx
import React from 'react';

const Privacy = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>

            <div className="prose max-w-3xl mx-auto">
                <p>At <strong>Ayata Travel</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website <a href="https://ayata-travel.vercel.app/" className="text-blue-500 hover:underline">https://ayata-travel.vercel.app/</a>.</p>

                <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or using our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website, such as your IP address, browser type, pages visited, and time spent on the site.</li>
                    <li><strong>Cookies:</strong> We use cookies to enhance your experience on our website. You can disable cookies in your browser settings, but this may affect your ability to use certain features.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul>
                    <li>To provide and improve our services.</li>
                    <li>To respond to your inquiries and provide customer support.</li>
                    <li>To send you updates, promotions, and marketing materials (if you have opted in).</li>
                    <li>To analyze website usage and improve our content and functionality.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">3. Sharing Your Information</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
                <ul>
                    <li>With service providers who assist us in operating our website and providing our services.</li>
                    <li>When required by law or to protect our rights, property, or safety.</li>
                    <li>With your consent or at your direction.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">4. Data Security</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

                <h2 className="text-2xl font-semibold mt-6">5. Your Rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                    <li><strong>Access:</strong> You can request a copy of the personal information we hold about you.</li>
                    <li><strong>Correction:</strong> You can request that we correct any inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> You can request that we delete your personal information, subject to certain legal obligations.</li>
                    <li><strong>Opt-Out:</strong> You can opt out of receiving marketing communications from us at any time.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-6">6. Third-Party Links</h2>
                <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. Please review their privacy policies before providing any personal information.</p>

                <h2 className="text-2xl font-semibold mt-6">7. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.</p>

                <h2 className="text-2xl font-semibold mt-6">8. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <ul>
                    <li><strong>Email:</strong>ayatainternational@gmail.com</li>
                    <li><strong>Address:</strong> Addis Ababa</li>
                </ul>

                <p className="mt-6">Thank you for trusting Ayata Travel with your personal information. We are committed to protecting your privacy and providing a safe online experience.</p>
            </div>
        </div>
    );
};

export default Privacy;