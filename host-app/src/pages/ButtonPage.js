import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));
const useCounterStore = React.lazy(() => import("remoteApp/store"));
import RemoteCount from "../components/RemoteCount";
export default function ButtonPage() {
  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading button...</p>}>
          <RemoteButton />
          <RemoteCount />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}
