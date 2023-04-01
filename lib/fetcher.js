export async function fetcher(...args) {
    const res = await fetch(...args);
    return await res.json();
}

export function api_art_title(body){
    fetch('/api/art/title', { 
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }) 
}

export function api_art_statement(body){
    fetch('/api/art/statement', { 
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }) 
}