import EncryptionService from '../AuthenticatorService';
import bcrypt from 'bcryptjs';

export default class extends EncryptionService {

    async encrypt(password) {
        const salt = await bcrypt.genSalt(10);
        return bcrypt.hash(password, salt);
    }

    async compare(password, encryptedPassword) {
        try {
            // Compare password            
            console.log(password +"---"+encryptedPassword +" ---- bcrypt");
            const result = await bcrypt.compare(password, encryptedPassword);
            console.log(result+" ---- bcrypt");
            return result;
        } catch (error) {
            return false;
        }


    }
}