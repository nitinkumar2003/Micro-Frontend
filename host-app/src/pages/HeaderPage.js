import React, { Suspense } from "react";

const RemoteHeader = React.lazy(() => import("remoteApp/Header"));

export default function HeaderPage() {
  return (
    <Suspense fallback={<p>Loading header...</p>}>
      <RemoteHeader />
    </Suspense>
  );
}
