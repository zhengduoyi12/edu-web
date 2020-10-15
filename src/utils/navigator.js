export const navigate = (history, pathname, params) => {
    history.push({
        pathname,
        params,
    });
}

