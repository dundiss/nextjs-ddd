module.exports = {
    env: {
        mongodb_username: "dev",
        mongodb_password: "Renard+221",
        mongodb_clustername: "cluster0",
        mongodb_database: "ddd-DB",
        MONGODB_URI: `mongodb+srv://dev:Renard+221@cluster0.brwnb.mongodb.net/ddd-DB?retryWrites=true&w=majority`
    },
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