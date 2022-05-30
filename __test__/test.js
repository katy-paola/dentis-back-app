/* eslint-disable no-undef */
import request from 'supertest'
import app from '../src/index.js'

describe('GET /', () => {
    it('responds with Bienvenido a la API de Dentis Web!!', (done) => {
        request(app)
            .get('/')
            .expect('Bienvenido a la API de Dentis Web!!', done)
    })
})
