const express = require('express');
const path = require('path');
const db = require('./server/config/connection');
const routes = require('./server/routes');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./server/schemas');
const { authMiddleware } = require('./server/utils/auth');


require("dotenv").config();

async function startApolloServer(typeDefs, resolvers) {
    const app = express();
    const PORT = process.env.PORT || 3001;

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    await server.start();
    server.applyMiddleware({ app })

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    const app = express();
    const PORT = process.env.PORT || 3001;

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());


    mongoose.connect(process.env.MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
    });

    db.once('open', () => {
        app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
    });
}

startApolloServer(typeDefs, resolvers)