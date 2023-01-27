export default function Leaderline({ className }) {
  return (
    <div className={ className + ' w-full h-[15px]'} aria-hidden="true">
      <svg width="100%" height="100%">
        <pattern id="slash" x="0" y="0" width="7" height="15" patternUnits="userSpaceOnUse">
          <path d="M1 14L6 1" stroke="#6E90DA" strokeLinecap="round"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="15px" fill="url(#slash)" />
      </svg>
    </div>
  )
}