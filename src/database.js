import axios from 'axios';

class Database {
    static async getCollectionList() {
        const accessPoint = "https://api.unsplash.com/collections/featured";
        const accessKey = "qeQaN2KGdxje3FEzIbsH11uJ70cJNybNgbjiwCH6YnY";

        let promise = axios.get(`${accessPoint}?client_id=${accessKey}&per_page=4`);
        let result = await promise;
        return result.data;
    }

    static getImage(query, collectionId, pageNum) {
        const accessKey = "qeQaN2KGdxje3FEzIbsH11uJ70cJNybNgbjiwCH6YnY";
        const accessPoint = "https://api.unsplash.com/search/photos?";
        const str = `${accessPoint}client_id=${accessKey}&query=${query}
        &collections=${collectionId}&per_page=1&page=${pageNum}`;
        return axios.get(str);
    }
}

export default Database;