import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const withLoadingAndError = (WrappedComponent) => {
    return({loading, error, ...props}) => {
        if (loading) return <Spinner />;
        if (error) return <ErrorMessage />;
        return <WrappedComponent {...props} />;
    }
}

export default withLoadingAndError;