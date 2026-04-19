import ErrorBoundary from "./ErrorBoundary";

const RouteWithError = ({ children }) => {
    return <ErrorBoundary>{children}</ErrorBoundary>;
};

export default RouteWithError;