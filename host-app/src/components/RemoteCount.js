import React, { useEffect, useState } from "react";

export default function RemoteCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    import("remoteApp/store").then((mod) => {
      const useCounterStore = mod.default;
      const unsub = useCounterStore.subscribe((state) => setCount(state.count));
      setCount(useCounterStore.getState().count);
      return unsub;
    });
  }, []);

  return <p style={{ color: "green" }}>Host se dikha rha remote count: {count}</p>;
}
