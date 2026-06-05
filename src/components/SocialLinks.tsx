import { site } from "@/lib/site";

type IconProps = { className?: string };

function LinkedIn({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
    </svg>
  );
}
function Facebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6c-.8-.1-1.6-.15-2.4-.15-2.4 0-4.05 1.46-4.05 4.15v2.3H7.5V13h2.75v8z" />
    </svg>
  );
}
function Instagram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const networks = [
  { name: "LinkedIn", href: site.social.linkedin, Icon: LinkedIn },
  { name: "Facebook", href: site.social.facebook, Icon: Facebook },
  { name: "Instagram", href: site.social.instagram, Icon: Instagram },
];

export function SocialLinks({
  className = "",
  itemClassName = "",
}: {
  className?: string;
  itemClassName?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {networks.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href || "#"}
          target={href ? "_blank" : undefined}
          rel={href ? "noopener noreferrer" : undefined}
          aria-label={name}
          className={`grid h-10 w-10 place-items-center rounded-full transition-colors ${itemClassName}`}
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
