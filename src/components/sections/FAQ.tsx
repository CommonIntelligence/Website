import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How does Common.ai work with multiple devices?',
    answer: 'Common.ai uses advanced AI algorithms to create a seamless connection between your devices. It learns your usage patterns and automatically syncs data and settings across all connected devices.',
  },
  {
    question: 'Is my data secure with Common.ai?',
    answer: 'Yes, we take security seriously. All data is encrypted end-to-end, and we use industry-standard security protocols to protect your information. Your data remains private and secure at all times.',
  },
  {
    question: 'What devices are compatible with Common.ai?',
    answer: 'Common.ai works with most modern devices including iOS and Android smartphones, Windows and Mac computers, and major smart home devices. Check our compatibility list for specific device requirements.',
  },
  {
    question: 'How accurate is the voice recognition?',
    answer: 'Our voice recognition system is highly accurate, with a success rate of over 95%. It continuously learns from user interactions to improve accuracy and can understand multiple languages and accents.',
  },
];

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about Common.ai
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}