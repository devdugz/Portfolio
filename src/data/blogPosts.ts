// test
import WJ1 from '@/components/content/blog/WJ1.md';
import WJ2 from '@/components/content/blog/WJ2.md';
import WJ3 from '@/components/content/blog/WJ3.md';
import WJ4 from '@/components/content/blog/WJ4.md';
import WJ5 from '@/components/content/blog/WJ5.md';
import WJ6 from '@/components/content/blog/WJ6.md';
import WJ7 from '@/components/content/blog/WJ7.md';
import WJ8 from '@/components/content/blog/WJ8.md';
import WJ9 from '@/components/content/blog/WJ9.md';
import WJ10 from '@/components/content/blog/WJ10.md';
import WJ11 from '@/components/content/blog/WJ11.md';

export interface BlogPost {
  title: string;
  date: string;
  preview: string;
  description: string; // Add this field
  content: string;
  image: string;
  tag: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Work Journal - Week 1',
    date: 'November 2, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ1,
    image: '/images/workjournal/WJ1.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 2',
    date: 'November 9, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ2,
    image: '/images/workjournal/WJ2.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 3',
    date: 'November 16, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ3,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 4',
    date: 'November 23, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ4,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 5',
    date: 'November 30, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ5,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 6',
    date: 'December 7, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ6,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 7',
    date: 'December 14, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ7,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 8',
    date: 'December 21, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ8,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 9',
    date: 'December 28, 2024',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ9,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 10',
    date: 'January 4, 2025',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ10,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 11',
    date: 'January 11, 2025',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ11,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 12',
    date: 'January 18, 2025',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ8,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
  {
    title: 'Work Journal - Week 13',
    date: 'January 25, 2025',
    preview: 'This week I...',
    description: 'This week I...', // Add description field
    content: WJ8,
    image: '/images/workjournal/WJ3.jpg',
    tag: 'Development',
  },
];
