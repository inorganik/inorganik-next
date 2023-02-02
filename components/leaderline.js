import { useEffect, useState } from "react";

export default function Leaderline({ className }) {
  const [color, setColor] = useState('#4d63bc');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setColor('#6e90da');
    }
  }, []);
  return (
    <div className={ className + ' w-full h-[15px] rounded-br-xl overflow-hidden'} aria-hidden="true">
      <svg width="100%" height="100%">
        <pattern id="slash" x="0" y="0" width="7" height="15" patternUnits="userSpaceOnUse">
          <path d="M1 14L6 1" stroke={color} strokeLinecap="round"/>
        </pattern>
        <rect x="0" y="0" width="100%" height="15px" fill="url(#slash)" />
      </svg>
    </div>
  )
}