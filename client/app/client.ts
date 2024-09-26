const API_URL = process.env.NEXT_PUBLIC_APIBASE_URL;

const fetchData = async (url: string, method: string, body: any = null, headers: any = {}) => {
    const options: RequestInit = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
    };

    // Add body only if it's not a GET or HEAD request
    if (method !== 'GET' && method !== 'HEAD' && body) {
        options.body = JSON.stringify(body);
    }

    const res = await fetch(`${API_URL}${url}`, options);
    const data = await res.json();
    
    return { status: res.status, data };
};

export { fetchData };