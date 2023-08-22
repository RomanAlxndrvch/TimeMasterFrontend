import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    //withCredentials: true,
})

export const allEmployeesAPI = {
    getEmployeesList() {
        return instance.get<ResponseType<{ allEmployees: EmployeeType[] }>>('employees')
    }
}

/*
export const allEmployeesAPI = {
    getEmployeesList() {
        return instance.get<AxiosResponse<ResponseType<{ allEmployees: EmployeeType[] }>>>('employees')
    }
}
*/


export type ResponseType<D = {}> = {
    status: 'success' | 'error',
    data: D
}

export type EmployeeType = {
    totalAmountHoursPerMonth: number,
    hoursPerDay: number,
    workingDays: [Date],
    _id: string,
    name: string
}