import React from 'react';
import blog1 from '../assets/images/optimized/treatment_xerf_1785944840015.webp';
import blog2 from '../assets/images/optimized/treatment_endolift_1785944912634.webp';
import blog3 from '../assets/images/optimized/xerf_ba_case1_1785956479519.webp';

interface BlogPost {
  img: string;
  alt: string;
  title: string;
  date: string;
}

const POSTS: BlogPost[] = [
  { img: blog1, alt: 'XERF radiofrequency treatment in progress', title: 'What to Expect from a XERF Facial', date: 'Aug 2026' },
  { img: blog2, alt: 'Endolift laser treatment close-up', title: 'Endolift: The Lunchtime Lift', date: 'Jul 2026' },
  { img: blog3, alt: 'Before and after facial result', title: 'Real Results: A Skin Journey', date: 'Jun 2026' },
];

export const BlogSection: React.FC = () => {
  return (
    <section className="w-full bg-[#DCD9C6] py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        {/* Header row: heading left, VIEW ALL right */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-avenir text-[28px] font-extralight leading-[1.1] text-[#24241f] sm:text-[32px]">
            Blog
          </h2>
          <a
            href="#"
            className="font-avenir text-[11px] font-light uppercase tracking-[0.22em] text-[#24241f] transition-opacity duration-300 hover:opacity-60"
          >
            View All
          </a>
        </div>

        {/* 3-column grid (2 on tablet, 1 on mobile), 24px gutters */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <a
              key={post.alt}
              href="#"
              className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[10px]"
              aria-label={post.title}
            >
              <img
                src={post.img}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Bottom-up dark gradient overlay (transparent top → dark navy bottom) */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a2620]/85 via-[#1a2620]/25 to-transparent" />
              {/* Overlaid text, bottom-left, kept readable by the gradient */}
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-avenir text-[10px] font-light uppercase tracking-[0.18em] text-white/75">
                  {post.date}
                </p>
                <p className="font-avenir mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/90">
                  Blog
                </p>
                <h3 className="font-avenir mt-1 text-[18px] font-medium leading-[1.15] text-white sm:text-[20px]">
                  {post.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
