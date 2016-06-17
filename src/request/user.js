import superagent from 'superagent'


export default class {

  static get(_id){
    return superagent.get('/api/users/' + _id)
  }

  static query(query){
    return superagent.get('/api/users/').query(query)
  }

  static new(){
    return superagent.get('/api/users/new')
  }

  static save(user, callback){
    if(user._id){
      return superagent.patch('/api/users/' + user._id).send(user)
    }
    return superagent.post('/api/users').send(user)
  }

  static delete(_id){
    return superagent.delete('/api/users/' + _id)
  }


}
