

import {createLogger,transports, format}  from 'winston';

//----Logging-----//

const customLogger = createLogger(
    {
        transports:[
            new transports.Console({
                format: format.combine(
                    format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
                    format.colorize(),
                    format.simple(),
                    format.errors({stack:true}),            
                ),
            }),
            new transports.File({
                filename:'Custom.log',
                level:'info',
                format:format.combine(format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),format.json())
            }),
            new transports.File({
                filename:'Custom_Error.log',
                level:'error',
                format:format.combine(format.timestamp(),format.json())
            }),
        ],
       
        meta: true, 
        msg: "HTTP {{req.method}} {{req.url}}", 
        expressFormat: true, 
        colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
        ignoreRoute: function (req, res) { return false; } 
    }
);

// const customLogger = createLogger(
//     {
//         transports:[
//             new transports.File({
//                 filename:'Custom.log',
//                 level:'info',
//                 format:format.combine(format.timestamp(),format.json())
//             }),
//             new transports.File({
//                 filename:'Custom_Error.log',
//                 level:'error',
//                 format:format.combine(format.timestamp(),format.json())
//             }),
//         ]
//     }
// );

module.exports ={customLogger};