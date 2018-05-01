//import selectExpenceTotal from '../../selectors/expences-total.js'


const expences =  [{
  id: 1,
  discription: 'Gum',
  note: '',
  amount: 195,
  createdAt: 100
},{
  id: 2,
  discription: 'Rent',
  note: '',
  amount: 109500,
  createdAt: -1000
},{
  id: 3,
  discription: 'Credit card',
  note: '',
  amount: 4000,
  createdAt: 1000
}]

const getExpencesTotal = x => x.map( e => e.amount ).reduce( (acc,curr) => acc + curr)

const total = getExpencesTotal(expences)
console.log(total)
