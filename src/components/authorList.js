import React from "react"
import { Link } from "gatsby"

const AuthorList = ({ authorList }) => {
  return (
    <div style={{
      margin: "0 auto",
      width: "100%",
      marginBottom: "1rem"
    }}>
      {
        authorList.map((author, index) => (
          <Link
            style={{
              fontSize: "0.8rem",
              borderRadius: 5,
              padding: "0.25rem",
              display: "inline-block",
              color: "#64707d",
              textDecoration: "none",
              boxShadow: "none"
            }}
            to={author.slug}
            key={index}
          >
            {author.name}
          </Link>
        ))
      }
    </div>
  )
}

export default AuthorList;
