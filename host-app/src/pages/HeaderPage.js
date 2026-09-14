import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const RemoteHeader = React.lazy(() => import("remoteApp/Header"));

export default function HeaderPage() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<p>Loading header...</p>}>
        <RemoteHeader />
      </Suspense>
    </ErrorBoundary>
  );
}
