<!--
 * @Author: huanghq
 * @Date: 2021-02-22 13:50:38
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-24 18:19:08
 * @Description: file content
-->
<template>
    <div id="app">
        UserLevel-{{ repositories.level }} <hr>
        UserId-{{repositories.userPoint}}
        <slot></slot>
        <hr>
        <!-- {{repositoriesMatchingSearchQuery}} -->
    </div>
</template>
<script>
import { toRefs, toRef, isRef } from "@vue/composition-api";
import fetchUserRepositories from "@/api/repositories";
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'

export default {
    components: {
        // RepositoriesFilters, RepositoriesSortBy, RepositoriesList
    },
    props: {
        user: {
            type: Number,
            default: 32953014,
        },
    },
    /**
     * @description: 
     * @param {*} props
     * @return {*}
     */
    setup(props) {
        // toRefs函数解释: 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的ref(对象)。
        console.log('user before ', props.user)
        console.log('props       ', props)
        console.log('toRefs      ', toRefs(props))
        console.log('toRef       ', toRef(props, 'user'))
        console.log('checked     ', isRef(props));
        console.log('checked     ', isRef(props.user));

        // props:   Observer
        // toRefs:  { user: RefImpl }　普通对象，对象的每个属性都是指向原始对象响应属性的ref对象
        // toRef:   
        const { user } = toRefs(props) // toRefs的好处，可以在不失去响应性的情况下解构

        const { repositories, getUserRepositories } = useUserRepositories(user)

        return { 
            repositories,
            getUserRepositories
        }


        // ref函数解释：接受一个内部值并返回一个响应式且可变的 ref 对象。ref对象具有指向内部值的单个property ".value"。
        
        // 组件职责三：使用 filters 对象筛选仓库
        // const {
        //     filters,
        //     updateFilters,
        //     filteredRepositories,
        // } = useRepositoryFilters(repositoriesMatchingSearchQuery)

        // return {
        //     repositories: filteredRepositories, // 在 `repositories` 名称下暴露过滤后的结果
        //     getUserRepositories,
        //     searchQuery,
        //     repositoriesMatchingSearchQuery,
        //     filters,
        //     updateFilters,
        // }; // 这里返回的任何内容都可以用于组件其余部分
    },
    /**
     * @description: 组件-二: 使用searchQuery字符串搜索存储库
     * @param {*}
     * @return {*}
     */
     
}
</script>