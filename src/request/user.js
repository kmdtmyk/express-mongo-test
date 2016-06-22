import superagent from 'superagent'

const root = '/api/v1/users/'

export default class {

  static get(_id){
    return superagent.get(root + _id)
  }

  static query(query){
    return superagent.get(root).query(query)
  }

  static new(){
    return superagent.get(root + 'new')
  }

  static save(user, callback){
    if(user._id){
      return superagent.patch(root + user._id).send(user)
    }
    return superagent.post(root).send(user)
  }

  static delete(_id){
    return superagent.delete(root + _id)
  }

}
