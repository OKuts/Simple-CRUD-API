import http from "http";
import {listener} from "../src/listener";
import request from 'supertest'
import {users} from "../src/data/usersData";

const server = http.createServer(listener)

describe('server tests', () => {
  users.length = 0

  it('Retrieve empty array by GET /api/users', done => {
    request(server)
      .get('/api/users')
      .set('accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, [], done)
  })

  it('Create new user by POST /api/users', done => {
    let user = {
      username: 'Alex',
      age: 53,
      hobbies: ['js', 'ts']
    }

    request(server)
      .post('/api/users')
      .send(user)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(res => {
        res.text.includes(JSON.stringify(user));
      })
      .expect(201, done);
  });

  it('Retrieve new user by GET /api/users/:id', done => {
    request(server)
      .get(`/api/users/${users[0].id}`)
      .set('accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, JSON.stringify(users[0]), done)
  })

  it('Delete new user by DELETE /api/users/:id', done => {
    request(server)
      .delete(`/api/users/${users[0].id}`)
      .expect(204, done);
  })

  it('Assert that user deleted by GET /api/users/:id', done => {
    request(server)
      .get('/api/users/5813d139-4b2c-4aac-b623-7ce7bd55f8d4')
      .expect(404, done)
  })

  users.length

})
