import EncryptionService from '../AuthenticatorService';
import bcrypt from 'bcryptjs';
import logger from '../../../utils/logger';
export default class extends EncryptionService {

    async encrypt(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async compare(password, encryptedPassword) {
        try {
            // Compare password      
            
            logger.customLogger.info('Compare BCrypting.');      
            //console.log(password +"---"+encryptedPassword +" ---- bcrypt");
            const result = await bcrypt.compare(password, encryptedPassword);
            //console.log(result+" ---- bcrypt");
            logger.customLogger.info('Compare BCrypt result : '+ result);      
            return result;
        } catch (error) {
            return false;
        }


    }
}