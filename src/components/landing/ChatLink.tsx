import type { ReactNode } from "react";

type CrispWindow = Window & { $crisp?: unknown[] };

/** Opens the Crisp chat widget already loaded in index.html. Falls back to email if it is not available. */
export const openChat = (): boolean => {
  const crisp = (window as CrispWindow).$crisp;
  if (!crisp) return false;
  crisp.push(["do", "chat:show"]);
  crisp.push(["do", "chat:open"]);
  return true;
};

const ChatLink = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <a
    className={className}
    href="mailto:hello@lastgood.space"
    onClick={(event) => {
      if (openChat()) event.preventDefault();
    }}
  >
    {children}
  </a>
);
export default ChatLink;
