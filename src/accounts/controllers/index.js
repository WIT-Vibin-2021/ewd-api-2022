import accountService from "../services";

export default (dependencies) => {

    const createAccount = async (request, response, next) => {  
        // console.log("vibin");  
        // console.log(dependencies);      
        const { firstName, lastName, email, password } = request.body;        
        const account = await accountService.registerAccount(firstName, lastName, email, password, dependencies);  
          
        response.status(201).json(account);
    };
    const getAccount = async (request, response, next) => {
        //input
        const accountId = request.params.id;
        // Treatment
        const account = await accountService.getAccount(accountId, dependencies);
        // const output = dependencies.accountsSerializer.serialize(account);
        //output
        response.status(200).json(account);
    };
    const listAccounts = async (request, response, next) => {
        // Treatment
        const accounts = await accountService.find(dependencies);
        //output
        response.status(200).json(accounts);
    };
    const authenticateAccount = async (request, response, next) => {
        try {
            console.log("-------Controller Class---------");    
            console.log(dependencies);  

            const { email, password } = request.body;
            const token = await accountService.authenticate(email, password, dependencies);
            console.log("-------Controller Class---2------"); 
            console.log(token);
            response.status(200).json({ token: `BEARER ${token}` });
        } catch (error) {
            response.status(401).json({ message: 'Unauthorised' });
        }
    };


    return {
        createAccount,
        getAccount,
        authenticateAccount,
        listAccounts
    };
};