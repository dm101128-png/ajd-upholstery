export default function PhotoPlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={`photoPlaceholder${className ? ` ${className}` : ""}`} role="img" aria-label={label}>
      <span className="photoPlaceholderLabel">{label}</span>
    </div>
  );
}
