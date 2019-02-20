import axios from 'axios'
///
export const getList = () => {
  return axios
    .get('/api/users',  {
        headers: {'Content-Type': 'application/json'}
    })
    .then(res =>{
        return res.data
    })

}
///
export const addItem = email =>{
  return axios
  .post('/api/users',{
      email:email
  },
  {
      headers: {'Content-Type': 'application/json'}
  })
  .then(res =>{
      console.log(res)
  })

}
///
export const deleteItem = id=>{
  axios.delete('api/users/$(id)',
  {
    headers: {'Content-Type': 'application/json'}
  })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
///
export const updateItem = (email,id,name)=>{
  return axios
  .put('/api/users/$(id)',{
      email:email,
      name:name,
      id:id
  },
  {
      headers: {'Content-Type': 'application/json'}
  })
  .then(res =>{
      console.log(res)
  })
  .catch(err=>{
      console.log(err)
  })

}
