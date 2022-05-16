import Account from '../../entities/Accounts';
import mongoose from 'mongoose';
import AccountRepository from '../Repository';
import logger from '../../../utils/logger';

export default class extends AccountRepository {

    constructor() {
        super();
        const accountsSchema = new mongoose.Schema({
            firstName: String,
            lastName: String,
            email: {type: String, unique: true, index: true},
            password: String,
            favourites: [Number]
        });
        this.model = mongoose.model('Account', accountsSchema);
    }
 
    async persist(accountEntity) {
        // const {firstName, lastName, email, password} = accountEntity;
        // const result = new this.model({firstName, lastName, email, password});
        // await result.save();
        // accountEntity.id=result.id;
        // return accountEntity;
        logger.customLogger.info('Account Repo: Persist');
        const {firstName, lastName, email, password} = accountEntity;
        const mongooseContact = new this.model({ firstName, lastName, email, password});
        await mongooseContact.save();
        accountEntity.id=mongooseContact.id;
        return new Account(mongooseContact.id, mongooseContact.firstName, mongooseContact.lastName, mongooseContact.email, mongooseContact.password);
    }

    async merge(accountEntity) {
        logger.customLogger.info('Account Repo: Merge');
        const {id, firstName, lastName, email, password, favourites } = accountEntity;
        await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites });
        //console.log({id, firstName, lastName, email, password, favourites });
        return accountEntity;
    }

    async remove(userId) {
        logger.customLogger.info('Account Repo: Remove');
        return this.model.findOneAndDelete(userId);
    }

    async deleteFavourites(userId, moviesId) {
        //const {id, firstName, lastName, email, password, favourites } = accountEntity;
        //await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites });
        logger.customLogger.info('Account Repo: Delete Favourite');
        const result =await this.model.findOneAndUpdate({_id:userId},
        { $pull: { favourites: moviesId } });  
        const {id, firstName, lastName, email, password, favourites } = result;   
        return new Account(id, firstName, lastName, email, password, favourites );
    }

    async get(userId) {
        logger.customLogger.info('Account Repo: Get Users');
        //console.log(userId); 
        const result = await this.model.findById(userId);
        //console.log("-------Acc Repo Get get Id---------");    
        //console.log(result);

        const {id, firstName, lastName, email, password, favourites } = result;
        return new Account(id, firstName, lastName, email, password, favourites );
    }

    async getByEmail(userEmail) {
        //console.log("-------Acc Repo Get byEmail---------");    
        logger.customLogger.info('Account Repo: Get Users by email id');
        //console.log(userEmail);  
        const result = await this.model.findOne({email: userEmail});

        //console.log("-------Acc Repo Get byEmail  RESULT---------");    
        //console.log(result.email); 
        return new Account(result.id, result.firstName, result.lastName, result.email, result.password,result.favourites);
    }

    async find() {
        const accounts = await this.model.find();
        return accounts.map((result) => {
            return new Account(result.id, result.firstName, result.lastName, result.email, result.password, result.favourites);
        });
    }

    async getFavourites(userId) {
        logger.customLogger.info('Account Repo: Get Favourite');
        //console.log(userId); 
        const result = await this.model.findById(userId);
        //console.log("-------Acc Repo Get FAV get Id---------");    
        //console.log(result);

        const {id, firstName, lastName, email, password, favourites } = result;
        return new Account(id, firstName, lastName, email, password, favourites );
    }    
    
}