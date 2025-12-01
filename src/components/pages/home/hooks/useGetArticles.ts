'use client';

const articles = [
  {
    title: 'New Guidelines for Cognitive Behavioral Therapy',
    source: 'APA Journal',
    url: 'https://example.com/cbt-guidelines',
  },
  {
    title: 'Digital Tools in Modern Clinical Practice',
    source: 'Health Tech Weekly',
    url: 'https://example.com/digital-tools',
  },
  {
    title: 'Patient Engagement Strategies for 2024',
    source: 'Clinical Today',
    url: 'https://example.com/engagement',
  },
  {
    title: 'Managing Burnout in Healthcare Professionals',
    source: 'Wellness Magazine',
    url: 'https://example.com/burnout',
  },
  {
    title: 'Telehealth Best Practices Update',
    source: 'MedTech News',
    url: 'https://example.com/telehealth',
  },
];

export function useGetArticles() {
  return { articles };
}
