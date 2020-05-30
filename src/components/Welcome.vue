<template>
    <div>
        <!-- 面包屑导航区-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >首页</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图-->
        <el-card>
            欢迎来到正大猪肉推荐系统，请您先填写几道问题，以便我们为您推荐您所需要的猪肉
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-button type="primary"><router-link to="/commendhome">下一步</router-link></el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>

</style>
