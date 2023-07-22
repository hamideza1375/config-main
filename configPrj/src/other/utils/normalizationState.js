export default function normalizationState(array, setarray) {
  let obj = {}
  array.forEach(a => (obj[a._id] = a))
  this.value = () => { return Object.values(obj) }
  this.remove = (id) => { delete obj[id]; setarray({...this}) }
  this.find = (id) => { return obj[id] ? obj[id] : {} }
  this.findIndex = (id) => { return Object.keys(obj).findIndex((_id) => (_id === id)) }
  this.changeIndex = (id) => { return (array[id] ? Object.values(obj)[id] :{}) }
  this.save = () => { setarray({...this}) }
  // this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }
}

// export default function normalizationState(array, setarray) {
//   let obj = {}
//   array.forEach(a => (obj[a._id] = a))
//   this.value = () => { return Object.values(obj) }
//   this.remove = (id) => { delete obj[id] }
//   this.find = (id) => { return obj[id] ? obj[id] : {} }
//   this.findIndex = (id) => { return Object.keys(obj).findIndex((_id) => (_id === id)) }
//   this.changeIndex = (id) => { return array[id] ? Object.values(obj)[id] :{} }
//   this.save = () => { setarray({...this}) }
//   // this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }
// }