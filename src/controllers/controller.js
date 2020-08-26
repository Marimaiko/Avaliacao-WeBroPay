const { Sequelize } = require('sequelize');

let database;
let contractSchema;

const connectDatabase = async () => {
    database = database || new Sequelize('webropay', 'candidate01', 'webropay', {
        host: 'webropay.czeruqgah1kf.us-east-1.rds.amazonaws.com',
        dialect: 'postgres',
        define: {
            timestamps: false
        }
      });

    return database;
}

const createContractSchema = async (database) => {
    if (contractSchema) {
        return;
    }

    contractSchema = database.define('contract', {
        id: {
            type: Number,
            primaryKey: true,
            autoIncrement: true
        },
        description: String,
        status: String
    });
}

const getContract = async () => {
    const database = await connectDatabase();

    await createContractSchema(database);

    const {
        contract
    } = database.models;

    const contracts = await contract.findAll();

    return contracts;
};

const createContract = async ({
    id, description, status
}) => {
    const database = await connectDatabase();

    await createContractSchema(database);

    const {
        contract
    } = database.models;

     contract = new Contract({
        id,
        description,
        status
    });

    contract.save();
};

// const jane = await User.create({ name: "Jane" });
// // Jane exists in the database now!
// console.log(jane instanceof User); // true
// console.log(jane.name); // "Jane"

// const updateContract = async ({
//     id
// }, {
//     name
// }) => {
//     const database = await connectDatabase();

//     await createUserSchema(database);

//     const {
//         User
//     } = database.models;

//     return User.update({
//         _id: id
//     }, {
//         name
//     });
// };


module.exports = {
    getContract,
    createContract
}