const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers');
const Curso = require('./Curso');
const Profesor = require('./Profesor');

const rootQuery = `
  union ResultadoBusqueda = Profesor | Curso

  type Query {
    cursos: [Curso]
    profesores: [Profesor]
    curso(id: Int): Curso
    profesor(id: Int): Profesor
  }

  type Mutation {
    profesorAdd(profesor: NuevoProfesor): Profesor
    profesorEdit(profesorId: Int!, profesor: ProfesorEditable): Profesor
    profesorDelete(profesorId: Int!): Profesor
    buscar(query: String!): [ResultadoBusqueda]
  }
`



const schema = makeExecutableSchema({
  typeDefs: [rootQuery , Curso, Profesor],
  resolvers
})

module.exports = schema
