import localStorage from 'local-storage'

export default {
    get(key, defaultVal = null) {
        return localStorage.get(key) || defaultVal
    },
    set(key, value) {
        return localStorage.set(key, value)
    }, 
    remove(key) {
        return localStorage.remove(key)
    }
}