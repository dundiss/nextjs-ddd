const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            env: {
                mongodb_username: "dev",
                mongodb_password: "Renard+221",
                mongodb_clustername: "cluster0",
                mongodb_database: "ddd-DB-dev",
                MONGODB_URI: `mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority`,
                NEXTAUTH_SECRET: "3ef5e0d81d6e18e2fff7ee232be81e8d",
                NEXT_ATLAS_URI: 'mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority',
                NEXT_ATLAS_DATABASE: 'ddd-DB'
            }
        }
    }
    return {
        env: {
            mongodb_username: "dev",
            mongodb_password: "Renard+221",
            mongodb_clustername: "cluster0",
            mongodb_database: "ddd-DB",
            MONGODB_URI: `mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority`,
            NEXTAUTH_SECRET: "3ef5e0d81d6e18e2fff7ee232be81e8d",
            secret: "3ef5e0d81d6e18e2fff7ee232be81e8d",
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