function saveToLocalStorage<T>(key: string, value: T) {
    try {
        localStorage.setItem(key + "", JSON.stringify(value));
    } catch (error) {
        console.error("Error saving to localStorage: ", error);
    }
}
function getFromLocalStorage<T>(key: string): T | null {
    try {
        const item = localStorage.getItem(key + "");
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error("Error getting from localStorage: ", error);
        return null;
    }
}
function removeFromLocalStorage(key: string) {
    try {
        localStorage.removeItem(key + "");
    } catch (error) {
        console.error("Error removing from localStorage: ", error);
    }
}

export { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage };
