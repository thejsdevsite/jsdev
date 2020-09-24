import React from "react";

const RenderSidebarAuthorBioParts = ({ author }) => {
  const listItems = [];
  if (author.employment?.position && author.employment?.company) {
    listItems.push({
      id: "work",
      title: "Work",
      value: (
        <>
          {author.employment?.position}
          <span>at</span>
          { author.employment?.url ? (<a className="jsd-link" href={author.employment?.url} target="_blank" title={author.employment?.company} rel="noreferrer">{author.employment?.company}</a>) : author.employment?.company}
        </>
      )
    })
  }

  if (author.location) {
    listItems.push({
      id: "location",
      title: "Location",
      value: author.location
    });
  }

  return (
    <div className="jsd-author-details">
      <ul className="jsd-author-details-inner">
        {listItems.map(item => (
          <li key={item.id}>
            <div className="key">{item.title}</div>
            <div className="value">{item.value}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenderSidebarAuthorBioParts;