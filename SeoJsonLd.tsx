import { faqs } from '@/data/content';

export default function SeoJsonLd() {
  const faqEntities = faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'ReviewPay',
        url: 'https://reviewpay.com',
        sameAs: ['https://www.linkedin.com']
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqEntities
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
