const STORE_NAME = "token"

/**
 *
 * @param {String} storeName
 * @returns
 */
const getSessionObject = (storeName) => {
    const retrieveObject = localStorage.getItem(storeName)
    if (!retrieveObject) return false
    return JSON.parse(retrieveObject)
}
/**
 *
 * @param {String} storeName
 * @param {Object} objectToStore
 */
const setSessionObject = (storeName, objectToStore) =>
{
    const storageValue = JSON.stringify(objectToStore)
    localStorage.setItem(storeName,storageValue)
}
/**
 *
 * @param {String} storeName
 */
const removeSessionObject = (storeName) => {
    localStorage.removeItem(storeName)
}

export { getSessionObject, setSessionObject, removeSessionObject}
