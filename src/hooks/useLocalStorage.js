import { useEffect, useState } from "react";

function useLocalStorage(key) {
  const [state, setState] = useState(JSON.parse(localStorage.getItem(key)));

  useEffect(
    function () {
      localStorage.setItem(key, state);
    },
    [state, key],
  );

  return { state, setState };
}

export default useLocalStorage;
