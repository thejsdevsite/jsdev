import React from "react";

const Avatar = ({ name, src, className = "" }) => {
  const strClass = className ? `jsd-avatar ${className}` : "jsd-avatar";
  if (!src) {
    return (
      <span className={strClass}>
        <span className="jsd-avatar-image" alt={name} title={name} />
      </span>
    )
  }
  return (
    <span className={strClass}>
      <img className="jsd-avatar-image jsd-article-cover-image" src={src} alt={name} title={name} loading="lazy" />
    </span>
  )
}

export default Avatar;
