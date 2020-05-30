<template>
    <el-container class="home-container">
        <!--头部区域-->
        <el-header>
            <div class="headertext">
                <span  style="margin-left: 10px">欢迎您来到正大猪肉推荐系统</span>
            </div>
        </el-header>

        <!--主体区域-->
        <el-container>
            <!--侧边栏-->
            <el-aside width="200px">
                <!-- 侧边栏菜单区-->
                    <el-menu
                            default-active=" "
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            :router="true"
                            active-text-color="#ffd04b"
                            :default-active="$route.path"
                    >
                        <el-menu-item index="/commendhome" >
                            <i class="el-icon-menu"></i>
                            <span slot="title">填写问卷</span>
                        </el-menu-item>
                        <el-menu-item index="/commendindex">
                            <i class="el-icon-menu"></i>
                            <span slot="title">推荐结果</span>
                        </el-menu-item>
                        <el-menu-item index="/commendshop">
                            <i class="el-icon-menu"></i>
                            <span slot="title">选购猪肉</span>
                        </el-menu-item>
                        <el-menu-item index="/commendmap">
                            <i class="el-icon-menu"></i>
                            <span slot="title">配送页面</span>
                        </el-menu-item>
                    </el-menu>

            </el-aside>
            <!--右侧栏-->
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>

</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                //是否折叠
                //被激活的链接地址
                activePath:'',
            }
        },

        created() {
        },
        methods:{
        }
    }
</script>

<!--suppress CssUnusedSymbol -->
<style scoped>
    .home-container {
        height: 100%;
    }
    .el-header {
        background-color: #373d41;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        align-items: center;
        color: #fff;
        font-size: 20px;
    > div {
        display: flex;
        align-items: center;
    span {
        margin-left: 15px;
    }
    }
    }

    .el-aside {
        background-color: #333744;
    .el-menu {

    }
    }

    .el-main {
        background-color: #eaedf1;
    }

    .iconfont {
        margin-right: 10px;
    }

    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.1em;
        cursor: pointer;
    }
</style>
