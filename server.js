const express = require('express');
const path = require('path');
const db = require('./server/config/connection');
const routes = require('./server/routes');

const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./server/schemas');
const { authMiddleware } = require('./server/utils/auth');