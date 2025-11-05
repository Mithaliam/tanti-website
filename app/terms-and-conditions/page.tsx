export default function TermsAndConditionsPage() {
  return (
    <section className="bg-white">
      {/* Hero banner */}
      <div className="w-full bg-gradient-to-r from-[#2b6de0] to-[#3ea2ff] relative overflow-hidden">
        {/* subtle particles-like dots using radial gradients */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center">Terms And Conditions</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-10">
          <h1 className="sr-only">Terms And Conditions</h1>
        </header>

        <div className="prose prose-gray max-w-none">
          <p>
            This page states the "Terms and Conditions" under which you, the Website visitor ("You") may use www.tanti.co (the "Site"), which is owned by Tanti Automatics Pvt Ltd. Please read this page carefully. By using this Site, You agree to be bound by all of the Terms and Conditions set forth below. If You do not accept these Terms and Conditions, please do not use this Site. These Terms and Conditions supersede any other agreement you may have with Tanti Automatics Pvt Ltd regarding this subject matter. Tanti Automatics Pvt Ltd may, in its sole discretion, revise these Terms and Conditions at any time; therefore, You should visit this page periodically to review the Terms and Conditions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Use of Site Material</h2>
          <p>
            The contents of this Site, such as text, graphics, images, and other content (the "Site Material") are protected by copyright under United States law. These Terms and Conditions do not grant You any license whatsoever to the Site Material. Tanti Automatics Pvt Ltd authorizes You to view and download a single copy of the Site Material for your non-commercial personal use. Unauthorized use of the Site Material violates copyright and other laws. You agree to retain all copyright and other proprietary notices contained in the original Site Material on any copy of such material.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Acceptable Use</h2>
          <p>
            You may not use the Site in any way that:
          </p>
          <ul className="list-disc pl-6">
            <li>violates any applicable law or regulation;</li>
            <li>infringes on the rights of others, including intellectual property rights;</li>
            <li>transmits any harmful, offensive, or inappropriate content;</li>
            <li>attempts to gain unauthorized access to the Site or its systems;</li>
            <li>interferes with or disrupts the Site or servers connected to the Site;</li>
            <li>collects or stores personal data about other users without their consent.</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Disclaimer of Warranties</h2>
          <p>
            This web site and its material are provided on an "as is" and "at Your own risk" basis without any warranties of any kind. Tanti Automatics Pvt Ltd, to the fullest extent permitted by law, disclaims all warranties, including the warranty of merchantability, non-infringement of third parties rights, and the warranty of fitness for particular purpose. Although Tanti Automatics Pvt Ltd strives to provide thorough and accurate materials on its site, we make no warranties about the accuracy, reliability, completeness, or timeliness of the material, services, software, text, graphics, and links.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Limitation of Liability</h2>
          <p>
            Tanti Automatics Pvt Ltd does not warrant that the web site will operate error-free or that the site and its server are free of computer viruses or other harmful material. If your use of the site or the site Material results in any costs or expenses, including, without limitation, the need for servicing or replacing equipment or data, Tanti Automatics Pvt Ltd shall not be responsible for those costs or expenses.
          </p>
          <p>
            In no event shall Tanti Automatics Pvt Ltd, its affiliates, or any third parties mentioned on the site be liable for any damages whatsoever (including, without limitation, incidental, indirect, consequential or punitive damages, lost profits, or damages resulting from lost data or business interruption) resulting from the use or inability to use material, advice, guidance, or services on this site or sites linked to this site, whether based on warranty, contract, tort, or any other legal theory, and whether or not Tanti Automatics Pvt Ltd is advised of the possibility of such damages.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Tanti Automatics Pvt Ltd, its officers, directors, employees, and agents, from and against any claims, actions, or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from your use of the Site Material or your breach of the terms of these Terms and Conditions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Modifications to Terms</h2>
          <p>
            Tanti Automatics Pvt Ltd may, in its sole discretion, revise these Terms and Conditions at any time. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions. You should visit this page periodically to review the Terms and Conditions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India, without regard to its conflict of law provisions. You agree to submit to the personal and exclusive jurisdiction of the courts located in India for the resolution of any disputes arising out of or relating to these Terms and Conditions or your use of the Site.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12">Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p>
            <strong>Tanti Automatics Pvt Ltd</strong><br />
            Email: mail@tanti.co | projects@tanti.co<br />
            Tel: +91 962 022 0491 | +91 960 645 7175
          </p>

          <div className="mt-16" />
        </div>
      </div>
    </section>
  )
}

