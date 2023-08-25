import axios from "axios";
import {EmployeeRespondType} from "utils/types";
import {ResponseType} from "utils/types"

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/employees',
    //withCredentials: true,
})

export const allEmployeesAPI = {
    getEmployeesList() {
        return instance.get<ResponseType<{ allEmployees: EmployeeRespondType[] }>>('')
    },
    getEmployeeById(id: string) {
        return instance.get<ResponseType<{ employee: EmployeeRespondType }>>(id)
    }
}


