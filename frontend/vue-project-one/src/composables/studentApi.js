import {ref} from 'vue'
import axios from 'axios'

export default function useStudent() {
    const url = "http://127.0.0.1:8000/api/student";
    const studentData = ref([]);
    const error = ref(null);

    //get all student data
    const getAllStudent = async () => {
        studentData.value = [];
        error.value = null;
        try {
            const resp = await axios(url);
            console.log(resp.data);
            studentData.value = resp.data;
        } catch (err) {
            console.log('error', err);
            error.value = err;
        }
    }

    return {
        studentData,
        error,
        getAllStudent
    }
}