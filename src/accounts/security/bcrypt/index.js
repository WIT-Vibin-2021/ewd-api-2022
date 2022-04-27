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
            const result = await bcrypt.compare(password, encryptedPassword);
            return result;
        } catch (error) {
            return false;
        }


    }
}