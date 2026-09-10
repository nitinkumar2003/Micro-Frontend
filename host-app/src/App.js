import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Yeh Host (Shell) App hai</h1>
      <p>Neeche wala button ek alag app (remote-app, port 3001) se aa raha hai:</p>

      <Suspense fallback={<p>Remote button load ho raha hai...</p>}>
        <RemoteButton />
      </Suspense>
    </div>
  );
}
