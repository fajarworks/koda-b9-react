/**
 *  Wrapper for Fetchiing URL
 * @param {string} url
 * @param {RequestInit} options
 * @returns {Promise<*>}
 */


const fetchData = async (url, options = {}) => {
    const res = await fetch(url, options)
    if (!res.ok) throw new Error(res.status)
    const data = res.json()

    return data

}

export default fetchData
