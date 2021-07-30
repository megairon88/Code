class Employee {
    constructor (id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getID() {
        let id = this.id;
        return id;
    }
    getFirstName() {
        let firstName = this.firstName;
        return firstName;
    }
    getLastName() {
        let lastName = this.lastName;
        return lastName;
    }
    getName() {
        let name = this.firstName + ' ' + this.lastName;
        return name;
    }
    getSalary() {
        let salary = this.salary;
        return salary;
    }
    getAnnualSalary() {
        let annualSalary = this.salary*12;
        return annualSalary;
    }
    raiseSalary(percent) {
        let raiseSalary = this.salary*( 1 + percent/100);
        return raiseSalary;
    }
}
let employee1 = new Employee(1, 'Tran', 'Dinh', 17000000);
document.write('ID: ' +employee1.id + '<br>');
document.write('Ho va ten: ' +employee1.getName() + '<br>');
document.write('Luong/ thang: ' +employee1.getSalary() +'<br>');
document.write('Luong/ nam: ' +employee1.getAnnualSalary() + '<br>');
let salaryPerMonthRaise = employee1.raiseSalary(20);
document.write('Luong thang sau khi tang: ' +salaryPerMonthRaise +'<br>');
document.write('Luong nam sau khi tang: ' +(salaryPerMonthRaise*12) +'<br>');