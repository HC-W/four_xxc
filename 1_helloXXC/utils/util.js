//获取时间
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
//随机数
const rand=(min,max)=>{
  return Math.floor(Math.random()*(max+1-min)+min)
}
//随机颜色
const randColor=(min,max)=>{
  const r = rand(min, max)
  const g = rand(min, max)
  const b = rand(min, max)
  return "rgb("+r+","+g+","+b+")"

}
// 导出
module.exports = {
  formatTime: formatTime,
  rand:rand,
  randColor:randColor
}
