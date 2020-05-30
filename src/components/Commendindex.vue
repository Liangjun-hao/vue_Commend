<template>
    <div>
    <!-- 面包屑导航区-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >首页</el-breadcrumb-item>
            <el-breadcrumb-item >推荐结果</el-breadcrumb-item>
        </el-breadcrumb>

    <!-- 卡片视图-->
        <el-card>
            <el-row :gutter="20">
                <el-col :span="4">
                    <el-button type="primary"><router-link to="/commendshop">下一步</router-link></el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "Commendindex",
        data(){
            return{
            }
        },
        created() {
            let aaId=this.$route.params.options
            axios.get('http://106.14.117.35:5005/api/v1/get_option',{options:aaId})
            .then(function (resp) {
                console.log(resp)
            })
           
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
