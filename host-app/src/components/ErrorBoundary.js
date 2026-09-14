import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Remote component failed to load:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 20, background: "#fdd", color: "#900", borderRadius: 6 }}>
          Yeh feature abhi available nahi hai (remote app down ho sakta hai).
        </div>
      );
    }
    return this.props.children;
  }
}
