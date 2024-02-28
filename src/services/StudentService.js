import axios from "axios";

const EMPLOYEE_BASE_URL= "http://localhost:4041/RestApp09/student/api/register";

class StudentService {
    saveStudent(student){
        return axios.post(EMPLOYEE_BASE_URL, student);
    }
}

export default new StudentService();