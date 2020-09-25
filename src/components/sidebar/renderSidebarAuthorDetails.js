import { Link } from "gatsby";
import React from "react";
import Avatar from "../avatar";
import RenderSidebarAuthorBioParts from "./renderSidebarAuthorBioParts";

const RenderSidebarAuthorDetails = ({ author }) => {
  return (
    <section className="jsd-card jsd-card-secondary branded p-4 pt-0 hidden l:grid gap-4">
      <div className="-mt-4">
        <Link to={author.slug} className="flex jsd-link" title={author.name} aria-label={author.name}>
          <Avatar name={author.name} src={author.profilePicture.src} className="jsd-avatar-xl mr-2 shrink-0"/>
          <span className="fs-m fw-med mt-5">{author.name}</span>
        </Link>
      </div>
      <div className="jsd-author-bio">{author.bio}</div>
      <RenderSidebarAuthorBioParts author={author} />
    </section>
  )
}

export default RenderSidebarAuthorDetails;
