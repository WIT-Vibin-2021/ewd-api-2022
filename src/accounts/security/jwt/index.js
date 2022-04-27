import jwt from 'jsonwebtoken';

import SecurityTokenService  from '../SecurityTokenService';

export default  class extends SecurityTokenService {

  generate(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY );
  }

  decode(accessToken) {
    return jwt.verify(accessToken,  process.env.JWT_SECRET_KEY);
  }
}