/*
 * @Author: huanghq
 * @Date: 2021-02-24 17:49:39
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-24 18:14:20
 * @Description: 从假定的外部 API 获取该用户名的仓库，并在用户更改时刷新它
 */
import fetchUserRepositories from '@/api/repositories'
import { ref, onMounted, watch } from "@vue/composition-api";

export default function useUserRepositories(user) {
    const repositories = ref([]); // 创建一个响应式的 repositories 变量
    const getUserRepositories = async () => {
        let res = await fetchUserRepositories(user.value);
        repositories.value = res.data;
    };

    onMounted(getUserRepositories);
    
    watch(user, getUserRepositories) // 在用户的响应式引用上设置一个监听器

    return {
        repositories,
        getUserRepositories,
    }
}