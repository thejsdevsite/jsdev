import { useEffect, useState } from "react";

export const useFetchImageEffect = (imgSrc) => {
  const [ loaded, setLoaded ] = useState(false);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    (async () => {
      if (!imgSrc) {
        setError("Cannot fetch image with invalid src");
        setLoaded(false);
        return;
      }

      if (error) {
        setError(null);
      }

      try {
        const response = await fetch(imgSrc);
        if (response.status >= 400) {
          throw new Error("Cannot fetch image, non-200 response received");
        }
        
        setLoaded(true);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [ imgSrc ]);

  return { loaded, error };
}