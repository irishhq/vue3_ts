<!--
 * @Author: huanghq
 * @Date: 2021-02-19 11:20:28
 * @LastEditors: huanghq
 * @LastEditTime: 2021-02-23 17:57:39
 * @Description: file content
-->
<template>
    <div>
        <div @click="changeUser" class="btn">更改用户</div>
        <user-repositories :user="userId">
            hello tomorrow
        </user-repositories>
    </div>
</template>

<script>
import UserRepositories from '@/components/UserRepositories';
export default {
    name: "App",
    data() {
        return {
            userId: 32953014
        }
    },
    watch: {
        // user: "getUserRepositories", // 监听user变更-简写: 用于user发生变化时执行此操作
    },
    mounted() {
        // this.getUserRepositories();
    },
    methods: {
        changeUser() {
            this.userId = 32953434
        },
    },
    components: { UserRepositories },
};
</script>

<style>
.btn {
    border: 1px solid #999;
    padding: 10px 20px;
    cursor: pointer;
}
</style>
