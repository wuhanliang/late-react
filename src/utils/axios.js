import axios from 'axios'
let baseUrl = process.env.VUE_APP_API_URL

console.log(baseUrl)

//超时配置
axios.defaults.timeout = 500000

//设置默认头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

//http request 请求拦截器
axios.interceptors.request.use((config)=>{
	const authorization = localStorage.getItem('authorization')


})