import React from "react";

export const Link = ({ href, className, id, title, target = "_self" }) => {
  const props = {
    href,
    className,
    id,
    title,
    target,
    "aria-label": title || "Link"
  };

  return (
    <a {...props}>{children}</a>
  )
}

export default Link;