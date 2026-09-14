import React, { Suspense } from "react";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

export default function ButtonPage() {
  const [message, setMessage] = React.useState(null);

  React.useEffect(() => {
    const handler = (e) => setMessage(e.detail);
    window.addEventListener("remote-button-clicked", handler);
    return () => window.removeEventListener("remote-button-clicked", handler);
  }, []);

  return (
    <div>
      <Suspense fallback={<p>Loading button...</p>}>
        <RemoteButton />
      </Suspense>
      {message && (
        <p style={{ marginTop: 20, color: "green" }}>
          Host ko mila: "{message.message}"
        </p>
      )}
    </div>
  );
}
