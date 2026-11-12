export default function Brand({ className }: { className?: string }) {
  return (
    <a className={className ? `brand ${className}` : "brand"} href="#top">
      <svg aria-hidden="true" className="brand-mark" viewBox="0 0 56 56" fill="none">
        <rect x="2" y="2" width="52" height="52" rx="13" fill="#092869" stroke="#FFD43B" strokeWidth="3" />
        <path
          d="M24 19C22.5 17.5 20.5 17 18 17C14.2 17 12 19.1 12 22C12 25.4 15 26.7 18 28C21 29.3 24 30.6 24 34C24 37 21.6 39 18 39C15.2 39 12.8 38 11 36"
          stroke="#FFFFFF"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path
          d="M44 19.5C42.3 17.8 40.4 17 38 17C32.6 17 29 21.5 29 28C29 34.5 32.6 39 38 39C41.1 39 43.6 37.6 45 35.5V29H39.5"
          stroke="#FFD43B"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>
        <span className="brand-wordmark" lang="en">ShivaTech Group</span>
        <span className="brand-subtitle" lang="hi">आधार और ऑनलाइन सेवाएँ</span>
      </span>
    </a>
  );
}
