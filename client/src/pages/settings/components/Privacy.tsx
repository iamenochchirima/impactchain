import React, { FC } from 'react'
type Props = {
  setPage: (page: string) => void;
};
const Privacy: FC<Props> = ({ setPage }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-10 ml-5 font-TelegraphRegular">
        <span className=" font-NeueMachinaUltrabold text-3xl font-bold">
          Privacy Policy for Impact.Chain
        </span>
      </div>

      <div className="flex flex-col gap-2 ml-5 mt-10">
        <h3 className="text-custom-green font-TelegraphBold text-2xl">Introduction</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">This Privacy Policy outlines how Impact.Chain collects, uses, and protects your personal information when you use our services. We are committed to safeguarding your privacy and ensuring compliance with applicable data protection laws.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Information Collection</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">Impact.Chain collects personal information such as your name, email address, phone number, organization details, and billing information. This information is gathered when you register for an account, use our services, or interact with us.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Use of Information</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">Your information is used to provide and improve our services, process payments, and respond to inquiries. We may also use it for marketing purposes, subject to your consent where required.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Disclosure of Information</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">We may share your information with third-party service providers for service delivery, professional advisors for legal and financial advice, and as required by law.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Data Protection</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">We implement robust security measures to protect your information from unauthorized access and ensure its confidentiality</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">User Rights</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">You have the right to access, correct, delete, or limit the use of your personal data. Please contact us for any requests or concerns regarding your data.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Changes to Policy</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">We reserve the right to modify this policy. Any changes will be communicated on our website.</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Contact Us</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">For any privacy-related inquiries, please contact us at info@w3olabs.xyz</p>

        <h3 className="text-custom-green font-TelegraphBold text-2xl">Compliance</h3>
        <p className="text-white font-TelegraphRegular text-xl mb-4">Impact.Chain adheres to the POPI Act in South Africa and the GDPR for European users.</p>


      </div>
    </div>
  )
}

export default Privacy