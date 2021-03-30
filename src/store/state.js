let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
}

export default {
  // localStorage 本地存储
  // city 优先从 localStorage.city 取值，取不到值就默认为 defaultCity=上海
  city: defaultCity
}
