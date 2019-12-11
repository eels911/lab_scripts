class Customer {
    constructor(id, name, phone){
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
class Ticket{
    constructor(id, customerId, price){
        this.id = id;
        this.customerId = customerId;
        this.price = price;
    }
}

class Hotel{
    constructor(id, name, customerId, address){
        this.id = id;
        this.name = name;
        this.customerId = customerId;
        this.address = address;

    }
}
class Visa{
    constructor(id, customerId, expires){

        this.id =id;
        this.customerId = customerId;
        this.expires = expires;
    }
}

function regBtnClick() {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let succsess = true;

            if (succsess) {

                resolve(new Customer(1, "Vasiliy Vasilevich Vasilkov", "89112223344"));
            } else {

                reject("Ошибка при регистрации!");
            }
        }, 1000);
    });
}

function buyTicket(customer) {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let succsess = true;

            if (succsess) {

                resolve(new Ticket(1, 1, 24000));
            } else {

                reject("Ошибка при покупке!");
            }
        }, 1000);
    });
}


function bookHotel(customer) {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let succsess = true;

            if (succsess) {

                //добавление в базу данных

                resolve(new Hotel(1, "Merigold Hotel", 1, "India"));
            } else {

                reject("Ошибка при бронировании!");
            }
        }, 1000);
    });
}

function getVisa(customer) {

    return new Promise((resolve, reject) => {

        setTimeout(function () {

            let succsess = true;

            if (succsess) {

                //добавление в базу данных

                resolve(new Visa(1, 1, "20-12-2020"));
            } else {

                reject("Ошибка при получении визы!");
            }
        }, 1000);
    });
}

let visa = getVisa().then((result) => {
    
    console.log(result);
}).catch((err) => {
    
    console.log(err);
});