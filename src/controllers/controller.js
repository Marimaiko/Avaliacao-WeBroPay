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
    description, status
}) => {
    const database = await connectDatabase();

    await createContractSchema(database);

    const {
        contract: Contract
    } = database.models;
    const newContract = new Contract({
        description,
        status
    });
    return newContract.save();
};


const updateContract = async ({
    id
}, {description}) => {
    const database = await connectDatabase();

    await createContractSchema(database);

    const {
        contract: Contract
    } = database.models;

    return Contract.update(
        { _id: id}, {
    description
    });
};

const deleteContract = async ({
    id
}) => {
    const database = await connectDatabase();

    await createContractSchema(database);

    const Contract = database.models;

    return Contract.deleteOne({
        _id: id
    });
};


module.exports = {
    getContract,
    createContract,
    updateContract,
    deleteContract
}