export type ResponseType<D = {}> = {
    status: 'success' | 'error',
    data: D
}

export type EmployeeRespondType = {
    totalAmountHoursPerMonth: number,
    hoursPerDay: number,
    workingDays: [Date],
    _id: string,
    name: string,
    password: string
}

export type EmployeeType = EmployeeRespondType &
    { isLoggedIn: boolean }


//React hook form type
export type IFormInput = {
    password: number | string
}