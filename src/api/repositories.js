/*
 * @Author: huanghq
 * @Date: 2021-02-20 13:49:47
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-20 16:30:42
 * @Description: file content
 */
import axios from 'axios';
const fetchUserRepositories = (user)=> {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:3000/user/detail?uid=${user}`).then((res) => {
            if (200 === res.status) resolve(res)
        })
    })
}
export default fetchUserRepositories;