import { useState } from 'react';

export default function SkipToContent() {
  const [focused, setFocused] = useState(false);
  
  return (
    <a
      href="#main-content"
      className={`
        fixed left-4 z-50 transform transition-transform duration-200 bg-indigo-600 text-white 
        px-4 py-2 rounded-b-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
        ${focused ? 'top-0' : '-translate-y-full'}
      `}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      Skip to content
    </a>
  );
}
