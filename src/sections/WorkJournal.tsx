'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/Card';
import Modal from '@/components/ui/Modal';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/data/blogPosts';

const WorkJournal = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [slideDirection, setSlideDirection] = useState(0);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const handleNext = () => {
    setSlideDirection(1);
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePrevious = () => {
    setSlideDirection(-1);
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  return (
    <section id='workjournal' className='scroll-mt-20'>
      <div className='w-full max-w-7xl mx-auto px-4 py-16'>
        <div className='container mb-12'>
          <div className='flex justify-center'>
            <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center'>
              Latest Updates
            </p>
          </div>
          <h1 className='font-cursive text-3xl md:text-5xl text-center mt-6 mb-12'>
            Work Journal
          </h1>
        </div>

        <AnimatePresence mode='wait' custom={slideDirection}>
          <motion.div
            key={currentPage}
            custom={slideDirection}
            initial={{
              x: slideDirection * 1000,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: slideDirection * -1000,
              opacity: 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
          >
            {currentPosts.map((post, index) => (
              <Card
                key={index}
                className='overflow-hidden group cursor-pointer transform transition-all duration-300 hover:-translate-y-2'
              >
                <div className='relative h-48 w-full'>
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full'>
                    <span className='text-sm text-white'>{post.tag}</span>
                  </div>
                </div>

                <div className='p-6 space-y-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-xl'>
                  <p className='text-sm text-indigo-400 font-medium'>
                    {post.date}
                  </p>
                  <h3 className='text-xl font-bold text-white group-hover:text-indigo-400 transition-all duration-300 ease-out'>
                    {post.title}
                  </h3>
                  <p className='text-white dark:text-gray-300 line-clamp-4'>
                    {post.content}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      setIsModalOpen(true);
                    }}
                    className='mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'
                  >
                    Read More
                  </button>
                </div>
              </Card>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className='flex justify-center items-center mt-8 space-x-4'>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className='px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 
          text-white font-medium hover:from-indigo-700 hover:to-indigo-800 
          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40
          flex items-center gap-2'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
            Previous
          </button>

          <div className='flex items-center gap-2'>
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx + 1)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-300
              ${
                currentPage === idx + 1
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className='px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 
          text-white font-medium hover:from-indigo-700 hover:to-indigo-800 
          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
          shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40
          flex items-center gap-2'
          >
            Next
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedPost && (
          <div className='max-w-none p-6 space-y-8'>
            {/* Image Container */}
            <div className='relative w-full aspect-[16/9] rounded-xl overflow-hidden'>
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className='object-cover'
                priority
              />
            </div>

            {/* Content Container */}
            <div className='space-y-6'>
              {/* Title and Meta */}
              <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-white'>
                  {selectedPost.title}
                </h2>
                <div className='flex items-center justify-between'>
                  <span className='px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800'>
                    {selectedPost.tag}
                  </span>
                  <span className='text-gray-400'>{selectedPost.date}</span>
                </div>
              </div>

              {/* Markdown Content */}
              <div
                className='prose prose-invert max-w-none
                  !leading-tight
                  prose-p:my-0.5
                  prose-headings:my-1
                  prose-li:my-0
                  prose-ul:my-1
                  prose-ol:my-1
                  prose-pre:my-1
                  prose-blockquote:my-1
                  [&>*]:!leading-tight'
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ node, ...props }) => (
                      <p className='!my-0.5 !leading-tight' {...props} />
                    ),
                    h4: ({ node, ...props }) => (
                      <h4 className='!mt-2 !mb-1 !leading-tight' {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className='!my-1 !space-y-0' {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li className='!my-0 !leading-tight' {...props} />
                    ),
                  }}
                >
                  {selectedPost.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default WorkJournal;
