import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
})

export const allEmployeesAPI = {
    getEmployeesList() {
        return instance.get<ResponseType<{ allEmployees: employeeType[] }>>('employees')
    }
}


export type ResponseType<D = {}> = {
    status: 'success' | 'error',
    data: D
}

export type employeeType = {
    totalAmountHoursPerMonth: number,
    hoursPerDay: number,
    workingDays: [Date],
    _id: string,
    name: string
}