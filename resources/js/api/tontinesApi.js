import axios from "axios";

const tontinesApi = async (token) => {

        try {
            const response = await axios.get('http://localhost:8000/api/tontines',{
                headers: {
                    'authorization': `Bearer ${token}`
                }
            })
            return response.data;
        } catch (err) {
            console.error(err);
        }
}
const tontineApi = async (token, id) => {

    try {
        const response = await axios.get(`http://localhost:8000/api/tontines/${id}`,{
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        return response.data;
    } catch (err) {
        console.error(err);
    }
}


export { tontineApi, tontinesApi};
