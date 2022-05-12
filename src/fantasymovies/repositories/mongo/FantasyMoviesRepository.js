import FantasyMovies from '../../entities/FantasyMovies';
import mongoose from 'mongoose';
import FantasyMoviesRepository from '../Repository';

export default class extends FantasyMoviesRepository {

    constructor() {
        super();
        const fantasyMoviesSchema = new mongoose.Schema({
            title: String,
            genre: String,
            language: String,
            release: String,
            time: String,
            overview:String,
            //casts: [String]
        });
        this.model = mongoose.model('FantasyMovies', fantasyMoviesSchema);
    }
 
    async persist(fantasyMoviesEntity) {
    console.log("---- Fantasy Repo--");        
      //console.log(fantasyMoviesEntity);        
        const {title,genre,language,release,time,overview} = fantasyMoviesEntity;
        const mongooseFM = new this.model({ title,genre,language,release,time, overview});
        await mongooseFM.save();
        fantasyMoviesEntity.id=mongooseFM.id;
        return new FantasyMovies(
            mongooseFM.id, 
            mongooseFM.title, 
            mongooseFM.genre,
            mongooseFM.language,
            mongooseFM.release,
            mongooseFM.time,
            mongooseFM.overview,
            //mongooseFM.casts
            );
    }

    // async merge(fantasyMoviesEntity) {
    //     const {id, firstName, lastName, email, password, favourites } = fantasyMoviesEntity;
    //     await this.model.findByIdAndUpdate(id, { firstName, lastName, email, password, favourites });
    //     console.log({id, firstName, lastName, email, password, favourites });
    //     return fantasyMoviesEntity;
    // }

    // async remove(userId) {
    //     return this.model.findOneAndDelete(userId);
    // }

    // async get(userId) {
    //     console.log("-------Acc Repo Get get Id---------");    
    //     console.log(userId); 
    //     const result = await this.model.findById(userId);
    //     console.log("-------Acc Repo Get get Id---------");    
    //     console.log(result);

    //     const {id, firstName, lastName, email, password, favourites } = result;
    //     return new FantasyMovies(id, firstName, lastName, email, password, favourites );
    // }   
    
}