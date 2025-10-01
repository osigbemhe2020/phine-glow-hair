import { ContactForm } from "@/components/contact/contact-form"
import {FAQItem} from '@/components/faq'

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unused items in their original packaging. Simply contact our customer service team to initiate a return, and we'll provide you with a prepaid shipping label.",
  },
  {
    question: "How long does it take after booking an appiontment",
    answer:
      "It Takes 2 days after you book an appointment before you get your hair done",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our customer support team is available Monday through Friday, 9 AM to 6 PM EST. You can reach us via email, phone, or live chat on our website. We strive to respond to all inquiries within 24 hours.",
  },]

function FAQSection() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-balance mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Find answers to common questions about our products and services. Can't find what you're looking for? Contact
          our support team.
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={index === 0} // First question opens by default
          />
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <div className="bg-gray-200 min-h-screen">
      <main>
        <ContactForm />
         <FAQSection/>
      </main>
    </div>
  );
}
