
export class Person {
    public id?: number;
    public email?: string;
    public lastName: string;
    public firstName: string;
    public phone: string;
    public salary: string;
    constructor(
        id = 0,
        email = '',
        lastName = '',
        firstName = '',
        phone = '',
        salary = ''
    ) {
        this.id = id;
        this.email = email;
        this.lastName = lastName;
        this.firstName = firstName;
        this.phone = phone;
        this.salary = salary;
    }
}