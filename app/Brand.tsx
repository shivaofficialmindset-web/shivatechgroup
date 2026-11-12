/** A lightweight, CSS-interactive brand mark. No client-side JavaScript is needed. */
export default function Brand({ className = "" }: { className?: string }) {
  return (
    <a
      className={`group inline-flex shrink-0 items-center gap-2.5 rounded-md text-[#17142f] no-underline ${className}`}
      href="#top"
      aria-label="Shiva Tech Group home"
    >
      <svg
        aria-hidden="true"
        className="h-10 w-10 shrink-0 transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105 group-focus-visible:-rotate-6 motion-reduce:transition-none motion-reduce:group-hover:transform-none motion-reduce:group-focus-visible:transform-none sm:h-11 sm:w-11"
        viewBox="0 0 56 56"
        fill="none"
      >
        <rect x="3" y="3" width="50" height="50" rx="16" fill="#211A4A" />
        <path d="M38.3 16.7C35.7 14.1 32.3 13 28.1 13c-6.6 0-11.1 3.7-11.1 9 0 4.2 2.9 6.5 9.3 8l3.1.7c3.4.8 4.8 1.8 4.8 3.7 0 2.4-2.3 3.9-5.9 3.9-4 0-7.4-1.4-10.5-4.3" stroke="#fff" strokeWidth="4.4" strokeLinecap="round" />
        <circle cx="39" cy="17" r="3.4" fill="#B8ACFF" />
        <circle cx="17" cy="34.5" r="3.4" fill="#B8ACFF" />
        <path d="M40.8 10.5v4M38.8 12.5h4" stroke="#E2DBFF" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap text-[19px] font-bold tracking-[-0.065em] sm:text-[21px]">shiva<span className="font-normal text-[#6D5CE7]">tech</span></span>
        <span className="mt-[5px] text-[8px] font-bold tracking-[0.28em] text-[#777187]">G R O U P</span>
      </span>
    </a>
  );
}
