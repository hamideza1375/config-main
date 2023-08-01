export default function normalizationState(array, setarray = () => { }) {
  let obj = {}
  array.forEach(a => (obj[a._id] = a))
  this.newArray = Object.values(obj)
  this.value = () => { return this.newArray }
  this.remove = (id) => { delete obj[id]; this.newArray = Object.values(obj)}
  this.find = (id) => { return obj[id] ? obj[id] : {} }
  this.findIndex = (id) => { return this.newArray.findIndex((_id) => (_id === id)) }
  this.changeIndex = (index) => { return (array[index] ? this.newArray[index] : {}) }
  this.push = (data) => { this.newArray.push(data); obj[data._id] = data }
  this.unshift = (data) => { this.newArray.unshift(data); obj[data._id] = data }
  this.splice = (num1, num2, data) => { data ? this.newArray.splice(num1, num2, data) : this.newArray.splice(num1, num2) }
  this.slice = (num1, num2) => { this.newArray = this.newArray.slice(num1, num2) }
  this.sort = (key) => { this.newArray.sort((a, b) => (a[key] - b[key])); }
  this.reverse = () => { this.newArray.reverse() }
  this.match = (key, value) => { this.newArray = this.newArray.filter((m) => (m[key].match(value))) }
  this.reduce = (key) => { let val = this.newArray; let x = 0; for (let i in val) { x += Number(val[i][key]) } return x }
  this.save = () => { setarray({ ...this }) }
  setarray({ ...this })
}

// const arr = [{ _id: '1', value: 'sal' }, { _id: '2', value: '2' }, { _id: '3', value: 'basalbasal' }, { _id: '6', value: 'basalbasal' }]
// const state = new normalizationState(arr)

//   const state = { ...category }
//   state.remove('2')
//   state.find('3').title = '000'
//   state.changeIndex('0').title = 'indexchange'
//   state.unshift({ _id: '0', title: 'unshift' })
//   state.push({ _id: '6', title: '-656' })
//   state.splice(1, 0, { _id: 'A', title: 'A' })
//   state.sort('title')
//   state.reverse()
//   state.slice(1, 2)
//   state.match('title', '0')
//   console.log(state.reduce('value'));
//   state.save()

// this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }


// export default function normalizationState(array, setarray) {
//   let obj = {}
//   array.forEach(a => (obj[a._id] = a))
//   this.value = () => { return Object.values(obj) }
//   this.remove = (id) => { delete obj[id]; setarray({...this}) }
//   this.find = (id) => { return obj[id] ? obj[id] : {} }
//   this.findIndex = (id) => { return Object.keys(obj).findIndex((_id) => (_id === id)) }
//   this.changeIndex = (id) => { return (array[id] ? Object.values(obj)[id] :{}) }
//   this.save = () => { setarray({...this}) }
//   setarray({...this})
//   // this.save = () => { setarray({value:this.value, remove:this.remove, find:this.find, findIndex:this.findIndex, changeIndex:this.changeIndex, save:this.save}) }
// }
