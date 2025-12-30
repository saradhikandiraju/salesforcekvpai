import type { Metadata } from 'next'
import { COMPANY_CONFIG } from '@/constants'

export const metadata: Metadata = {
  title: `Privacy Policy | ${COMPANY_CONFIG.name}`,
  description: `${COMPANY_CONFIG.name} Privacy Policy - Learn how we protect your business data and privacy.`,
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
          <h1 className="text-4xl font-black text-navy mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-lg prose-navy max-w-none text-gray-600 space-y-8">
            <p><strong>Last Updated: January 01, 2025</strong></p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">1. Introduction</h2>
              <p>
                Welcome to SalesforceTroopAi. We are committed to protecting your business data and privacy. 
                This document outlines our commitment to your security and the rules governing the use of our consulting services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">2. Data Collection</h2>
              <p>
                We collect only the information necessary to provide top-tier Salesforce consulting. This includes your contact details, company CRM structure, and business goals. We do not sell your data to third parties.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">3. Confidentiality</h2>
              <p>
                Confidentiality is the cornerstone of our business. All our consultants operate under strict Non-Disclosure Agreements (NDAs). Your Salesforce data architecture and business processes remain strictly proprietary to your organization.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">4. Compliance</h2>
              <p>
                We follow industry-standard security protocols and ensure that all implementations are compliant with relevant data protection regulations (GDPR, CCPA, etc.) as requested by our clients.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-navy">5. Contact</h2>
              <p>
                For questions regarding these terms, please contact our legal team at <strong><a href={`mailto:${COMPANY_CONFIG.contact.legalEmail}`} className="text-salesforce hover:underline">{COMPANY_CONFIG.contact.legalEmail}</a></strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

