import accountService from "../services";

export default (dependencies) => {

    const createAccount = async (request, response, next) => {  
        console.log("---- Account Contoller---Create Account--");           
        const { firstName, lastName, email, password } = request.body;        
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);  
          
        response.status(201).json(account);
    };
    const getAccount = async (request, response, next) => {
        console.log("---- Account Contoller---Get Account--");           
        //input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        // const output = dependencies.accountsSerializer.serialize(account);
        //output
        response.status(200).json(account);
    };
    const listAccounts = async (request, response, next) => {
        console.log("---- Account Contoller---List Account--");           
        // Treatment
        const accounts = await accountService.find(dependencies); 
        //output
        response.status(200).json(accounts);
    };
    const getByEmail = async (request, response, next) => {
        console.log("---- Account Contoller---getBy Eamil--");           
        const emailId = request.params.id;    
        const account = await accountService.getByEmail(emailId, dependencies); 
        response.status(200).json(account);
    };
    const authenticateAccount = async (request, response, next) => {
        try {            
            console.log("---- Auth Account ---");  
 
            const { email, password } = request.body;
            const token = await accountService.authenticate(email, password, dependencies);                                   
            response.status(200).json({ token: `BEARER ${token}` });
        } catch (error) {
            response.status(401).json({ message: 'Unauthorised' });
        }
    };
    const verifyToken = async (request, response, next) => {
        try { 
        // Input
        const authHeader = request.headers.authorization;

        // Treatment
        console.log("---- VerifyToken Account Controller 2 ---");
        //console.log(authHeader);
        
        const accessToken = authHeader.split(" ")[1];  // Example : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1haWxAZ21haWwuY29tIiwiaWF0IjoxNjU"
        console.log("-----Access Token -> " + accessToken);
        const user = await accountService.verifyToken(accessToken, dependencies);

        //output
        next();
    }catch(err){
        //Token Verification Failed
        next(new Error(`Verification Failed ${err.message}`));
        }
    };
    const addFavourite = async (request, response, next) => {
        try {
            console.log("---- Add Fav Controller ---");
            //console.log(dependencies);

            const { movieId } = request.body;                
            const id = request.params.id;
            const account = await accountService.addFavourite(id, movieId, dependencies);
            response.status(200).json(account);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };
    const getFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            console.log("Control getFavourites"); 
            const favourites = await accountService.getFavourites(id, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    const deleteFavourites = async (request, response, next) => {
        try {
            const id = request.params.id;
            const movieid = request.params.movieid;
            console.log("Control delet Favourites"); 
            const favourites = await accountService.deleteFavourites(id, movieid, dependencies);
            response.status(200).json(favourites);
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        createAccount,
        getAccount,    
        listAccounts,
        getByEmail,
        authenticateAccount,
        verifyToken,
        addFavourite,
        getFavourites,
        deleteFavourites
    };
};