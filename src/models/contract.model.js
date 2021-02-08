class contract {
    constructor(status, title, description, name, email, price, phone) {
        this.status = status;
        this.title = title;
        this.description = description;
        this.name = name;
        this.email = email;
        this.price = price;
        this.phone = phone;
    }

}

const type = ["Kladde", "Sendt", "Accepteret", "Anmodede om revision"];

//shouldn't be filled here, just for brevity

var contracts = [
    new contract(
        type[0],
        "Top Construction A/S",
        "Reparation af vinduesramme.",
        "Anders Andersen",
        "anders@topconstruction.dk",
        56000,
        "31 10 10 10"
    ),
    new contract(
        type[1],
        "Electric ApS",
        "Installation af stikkontakt til køkkenmaskiner.",
        "Lars Larsen",
        "lars@electric.dk",
        12000,
        "81 81 81 81"
    ),
    new contract(
        type[1],
        "Electric ApS",
        "Installation af stikkontakt til køkkenmaskiner.",
        "Lars Larsen",
        "lars@electric.dk",
        12000,
        "81 81 81 81"
    ),
    new contract(
        type[2],
        "VVS KING A/S",
        "Installation af toilet i badeværelset.",
        "Kim Olesen",
        "kim@vvsking.dk",
        55000,
        "12 12 12 12"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    ),
    new contract(
        type[3],
        "RENGØRING ApS",
        "Rengøring efter renovering.",
        "Laura Nielsen",
        "laura@rengøring.dk",
        5000,
        "23 23 23 23"
    )
];

export default contracts