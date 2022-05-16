import FantasyMovies from '../../entities/FantasyMovies';
import mongoose from 'mongoose';
import FantasyMoviesRepository from '../Repository';
import logger from '../../../utils/logger';

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
        logger.customLogger.info('Fantasy Repo: Persist');
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

    async get(fantasyMoviesId) {
        logger.customLogger.info('Fantasy Repo: Get');    
        const result = await this.model.findById(fantasyMoviesId);          
        const {id, title, genre, language, release, time,overview } = result;
        return new FantasyMovies(id, title, genre, language, release, time,overview  );
    }
    
    async deleteFantasy(fantasyMovieId) {
        logger.customLogger.info('Fantasy Repo: Delete Fantasy');
        const result =await this.model.deleteOne({_id:fantasyMovieId});
        const {id, firstName, lastName, email, password, favourites } = result;   
        return new FantasyMovies(id, firstName, lastName, email, password, favourites );
    }
    
}