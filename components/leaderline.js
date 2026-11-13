import { useSyncExternalStore } from 'react';

function subscribeToColorScheme(onChange) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

export default function Leaderline({ className }) {
  const isDark = useSyncExternalStore(
    subscribeToColorScheme,
    () => window.matchMedia('(prefers-color-scheme: dark)').matches,
    () => false
  );
  const color = isDark ? '#6e90da' : '#4d63bc';
  return (
    <div
      className={className + ' w-full h-[15px] rounded-br-xl overflow-hidden'}
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <pattern id="slash" x="0" y="0" width="7" height="15" patternUnits="userSpaceOnUse">
          <path d="M1 14L6 1" stroke={color} strokeLinecap="round" />
        </pattern>
        <rect x="0" y="0" width="100%" height="15px" fill="url(#slash)" />
      </svg>
    </div>
  );
}
