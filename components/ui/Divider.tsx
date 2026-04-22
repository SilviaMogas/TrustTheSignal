interface DividerProps {
  className?: string;
}

export function DoubleDivider({ className = "" }: DividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`divider-double ${className}`}
    />
  );
}

export function SingleDivider({ className = "" }: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={`border-0 border-t border-ink ${className}`}
    />
  );
}
