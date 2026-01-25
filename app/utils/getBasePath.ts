const getBasePath = (path: string) => {
    // Check if we are in production mode
    if (process.env.NODE_ENV === 'production') {
        // Return the path prefixed with the repo name (basePath)
        return `/PortFolio${path}`;
    }
    // In development, return the path as is
    return path;
};

export default getBasePath;
