/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/example', async (request, reply) => {
    return { 'some-one': 'here', ah: 'fudge' }
  })

  fastify.post('/example', {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' }
        }
      }
    }
  }, async (request, reply) => {
    const { name } = request.body
    return { [name]: 'here', ah: 'fudge' }
  })
}
