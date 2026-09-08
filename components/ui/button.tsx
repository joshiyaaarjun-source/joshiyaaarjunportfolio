'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = '', ...props }, ref) => (
    <button ref={ref} className={`magnetic inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-cream px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white ${className}`} {...props} />
  )
);
Button.displayName = 'Button';
