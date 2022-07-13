
export function writeToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function readFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}



