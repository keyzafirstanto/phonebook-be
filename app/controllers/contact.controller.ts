import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { Context } from "@utils";

const prisma = new PrismaClient();

interface ContactCreateInput {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  is_favorite: number;
}

const typeDefs = `
  type Contact {
    id: String!
    first_name: String
    last_name: String
    phone: String
    address: String
    is_favorite: Int
    createdAt: String
    updatedAt: String
  }

  input ContactCreateInput {
    first_name: String
    last_name: String
    phone: String
    address: String
    is_favorite: Int
  }

  type Mutation {
    create(data: ContactCreateInput!): Contact
    update(id: String!, data: ContactCreateInput!): Contact
    delete(id: String!): Contact
  }

  type Query {
    findAll(first_name: String): [Contact!]!
    findOne(id: String!): Contact
  }
`;

const resolvers = {
  Query: {
    findAll: (_parent: any, args: { first_name: string }, context: Context) => {
      let where = {};
      if (args.first_name) {
        where = {
          first_name: {
            contains: args.first_name,
            mode: "insensitive",
          },
        };
      }
      return prisma.contact.findMany({
        where,
        orderBy: [{ is_favorite: "desc" }],
      });
    },
    findOne: (_parent: any, args: { id: string }, context: Context) => {
      return prisma.contact.findUnique({ where: { id: args.id } });
    },
  },
  Mutation: {
    create: (_parent: any, args: { data: ContactCreateInput }, context: Context) => {
      return prisma.contact.create({ data: args.data });
    },
    update: (_parent: any, args: { id: string; data: ContactCreateInput }, context: Context) => {
      return prisma.contact.update({ where: { id: args.id }, data: args.data });
    },
    delete: (_parent: any, args: { id: string }, context: Context) => {
      return prisma.contact.delete({ where: { id: args.id } });
    },
  },
};

export default makeExecutableSchema({ resolvers, typeDefs });
