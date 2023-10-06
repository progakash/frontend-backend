import {ref} from 'vue'
import axios from 'axios'

export default function useStudent() {
    const url = "api url";
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
            error.value = err;
        }
    }

    return {
        studentData,
        error,
        getAllStudent
    }
}