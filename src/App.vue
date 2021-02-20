<!--
 * @Author: huanghq
 * @Date: 2021-02-19 11:20:28
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-20 16:50:54
 * @Description: file content
-->
<template>
    <div id="app">UserLevel-{{ repositories.level }}</div>
</template>

<script>
import { onMounted, reactive, ref } from "@vue/composition-api";
import fetchUserRepositories from "@/api/repositories";

export default {
    name: "App",
    props: {
        user: {
            type: Number,
            default: 32953014,
        },
    },
    setup(props) {
        let repositories = ref([]); // 创建一个响应式的 repositories 变量
        const getUserRepositories = async () => {
            let res = await fetchUserRepositories(props.user);
            repositories.value = res.data;
        };

        onMounted(getUserRepositories);
        
        return {
            repositories,
            getUserRepositories,
        }; // 这里返回的任何内容都可以用于组件其余部分
    },
    watch: {
        user: "getUserRepositories", // 监听user变更-简写
    },
    mounted() {
        // this.getUserRepositories();
    },
    components: {},
};
</script>

<style></style>
