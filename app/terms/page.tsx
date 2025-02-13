// components/Terms.jsx

import Link from "next/link";

const Terms = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Terms and Conditions</h1>

            <div className="prose max-w-3xl mx-auto">
                <p>Welcome to <strong>Ayata Travel</strong>! These Terms and Conditions govern your use of our website and services. By accessing or using <span className="text-green-300"> Terms & Conditions </span> you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our website.</p>

                <h2 className="text-2xl font-semibold mt-6">1. Use of the Website</h2>
                <p>1.1. The content on this website is for general information and personal use only. It is subject to change without notice.</p>
                <p>1.2. Your use of any information or materials on this website is entirely at your own risk. It is your responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
                <p>1.3. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.</p>

                <h2 className="text-2xl font-semibold mt-6">2. Intellectual Property</h2>
                <p>2.1. This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, graphics, and content. Reproduction is prohibited without prior written consent.</p>
                <p>2.2. All trademarks reproduced on this website that are not the property of, or licensed to, the operator are acknowledged on the website.</p>

                <h2 className="text-2xl font-semibold mt-6">3. User Responsibilities</h2>
                <p>3.1. You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the website or interfere with any other party's use of the website.</p>
                <p>3.2. You are responsible for ensuring that all information you provide on this website is accurate, current, and complete.</p>

                <h2 className="text-2xl font-semibold mt-6">4. Third-Party Links</h2>
                <p>4.1. This website may include links to third-party websites. These links are provided for your convenience and do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</p>
                <p>4.2. Your use of third-party websites is subject to their respective terms and conditions and privacy policies.</p>

                <h2 className="text-2xl font-semibold mt-6">5. Limitation of Liability</h2>
                <p>5.1. Ayata Travel and its affiliates will not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of this website or any third-party links.</p>
                <p>5.2. We do not guarantee that the website will be error-free, secure, or available at all times.</p>

                <h2 className="text-2xl font-semibold mt-6">6. Privacy</h2>
                <p>6.1. Your use of this website is also governed by our 
                    
       
                    <Link href="/privacy" className=" inline text-blue-600 hover:text-green-600"> 
                        Privacy Policy
                    </Link>
           
                    , which explains how we collect, use, and protect your personal information. By using this website, you consent to the practices described in the Privacy Policy.</p>

                <h2 className="text-2xl font-semibold mt-6">7. Changes to Terms and Conditions</h2>
                <p>7.1. Ayata Travel reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after any changes constitutes your acceptance of the revised terms.</p>

                <h2 className="text-2xl font-semibold mt-6">8. Governing Law</h2>
                <p>8.1. These Terms and Conditions are governed by and construed in accordance with the laws of Ethiopia. Any disputes relating to these terms will be subject to the exclusive jurisdiction of the courts of Addis Ababa.</p>

                <h2 className="text-2xl font-semibold mt-6">9. Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
                <ul>
                    <li><strong>Email:</strong>ayatainternational@gmail.com</li>
                    <li><strong>Address:</strong>Addis Ababa, Ethiopia</li>
                </ul>

                <p className="mt-6">Thank you for visiting Ayata Travel! We hope you enjoy your experience on our website.</p>
            </div>
        </div>
    );
};

export default Terms;