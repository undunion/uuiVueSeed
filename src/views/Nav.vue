<template>
    <div class="nav_body">

        <div class="nav_body__inner">
            <router-view/>
        </div>

        <div class="nav uui_flex">
            <router-link
                tag="div"
                class="uui_flex__1"
                v-for="(tab, index) in tabList"
                :key="index"
                :class="{'active': urlName === tab.pageRouter}"
                :to="{name: tab.pageRouter}"
            >
                <p>{{tab.pageName}}</p>
            </router-link>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'Nav',
        data () {
            return {
                tabList: [
                    {
                        pageRouter: 'home',
                        pageName: 'Home',
                    },
                    {
                        pageRouter: 'list',
                        pageName: 'List',
                    },
                    {
                        pageRouter: 'my',
                        pageName: 'My',
                    },
                ],
            };
        },
        computed: {
            urlName () {
                return this.$route.name;
            }
        },
        mounted () {

        },
        methods: {}
    };
</script>

<style lang="less">
    .nav_body {
        height: 100%;
        .nav_body__inner {
            position: absolute;
            top: 0;
            bottom: 70px;
            width: 100%;
        }
    }

    .nav {
        position: absolute;
        bottom: 0;
        height: 70px;
        line-height: 70px;
        width: 100%;
        background: #f8f8f8;
        border-top: 1px solid #e5e5e5;
        text-align: center;
        .flex-1 {
            border: 0;
            font-size: 16px;
        }
        .active {
            color: #46c7d6;
        }
    }
</style>