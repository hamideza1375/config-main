export default function normalizationState(array) {
  let obj = {}
  array.forEach(a => (obj[a._id] = a))
  this.value = () => { return Object.values(obj) }
  this.remove = (id) => { delete obj[id] }
  this.find = (id) => { return obj[id] ? obj[id] : {} }
  this.findIndex = (id) => { return Object.keys(obj).findIndex((_id) => (_id === id)) }
}