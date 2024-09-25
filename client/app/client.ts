const API_URL = process.env.NEXT_PUBLIC_APIBASE_URL;

const fetchData = async(url: string, method: string, body: any, headers: any)=>{
    const res = await fetch(`${API_URL}${url}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body)
    });
    return {status: res.status, data: await res.json()};
}

export {fetchData};