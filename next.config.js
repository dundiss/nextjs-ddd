const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "dev",
                mongodb_password: "Renard+221",
                mongodb_clustername: "cluster0",
                mongodb_database: "ddd-DB-dev",
                MONGODB_URI: `mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority`
            }
        }
        return {
            env: {
                mongodb_username: "dev",
                mongodb_password: "Renard+221",
                mongodb_clustername: "cluster0",
                mongodb_database: "ddd-DB",
                MONGODB_URI: `mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority`,
                SECRET="6c41f269486f8c945b4e625a64a228bc1b91055fa110baba0fbf83f2ee639936"
            }
        }
    }
};
// module.exports = {
//     webpack: (config, { isServer }) => {
//         // Fixes npm packages that depend on `fs` module
//         if (!isServer) {
//             config.node = {
//                 fs: 'empty'
//             }
//         }

//         return config
//     }
// };