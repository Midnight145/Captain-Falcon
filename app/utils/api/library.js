export const getAllSets = () => {
    return fetch('/api/library').then(res => {
        return res.json();
    }).catch(err => {
        return new Promise((resolve, reject) => {
            reject(err);
        });
    });
};