const MONTHMAP = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function formateDate (date) {
  let tempDate = new Date(date)
  let month = MONTHMAP[tempDate.getMonth()]
  let day = tempDate.getDate()
  let year = tempDate.getFullYear()
  return `${month} ${day}, ${year}`
}