import React, { useEffect } from "react";

const useAddUtteranceComments = (ref) => {
  useEffect(() => {
    const scriptEl = document.createElement('script')
    scriptEl.async = true
    scriptEl.src = 'https://utteranc.es/client.js'
    scriptEl.setAttribute('repo', 'thejsdevsite/jsdev-discussion')
    scriptEl.setAttribute('issue-term', 'title')
    scriptEl.setAttribute('id', 'utterances')
    scriptEl.setAttribute('theme', 'github-light')
    scriptEl.setAttribute('crossorigin', 'anonymous')
    scriptEl.setAttribute('label', 'discussion')
    if (ref && ref.current) {
      ref.current.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${ref}`)
    }
  }, [])
}

export default useAddUtteranceComments;
