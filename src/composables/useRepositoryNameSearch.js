/*
 * @Author: huanghq
 * @Date: 2021-02-24 17:55:05
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-24 18:11:43
 * @Description: 使用searchQuery字符串搜索存储库
 */
import { computed } from "@vue/composition-api";
export default function useRepositoriesNameSearch(repositories) {
    
    const searchQuery = ref('')
    const repositoriesMatchingSearchQuery = computed(() => {
        return repositories.value.filter(() => {
            repositories => repositories.userPoint.userId.includes(searchQuery.value)
        })
    })
     
    return {
        searchQuery,
        repositoriesMatchingSearchQuery
    }
}