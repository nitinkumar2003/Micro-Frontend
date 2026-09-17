import React, { Suspense } from "react";
import ErrorBoundary from "../components/ErrorBoundary";

const RemoteButton = React.lazy(() => import("remoteApp/Button"));

export default function ButtonPage() {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading button...</p>}>
          <RemoteButton
            label={`Clicked ${count} times 🚀`}
            onButtonClick={handleClick}
          />
        </Suspense>
      </ErrorBoundary>
      <p style={{ marginTop: 20, color: "green" }}>
        Host ka count: {count}
      </p>
    </div>
  );
}
