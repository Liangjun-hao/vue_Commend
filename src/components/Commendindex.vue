<template>
    <div>
    <!-- 面包屑导航区-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >首页</el-breadcrumb-item>
            <el-breadcrumb-item >推荐结果</el-breadcrumb-item>
        </el-breadcrumb>

    <!-- 卡片视图-->
        <el-card>
            <h4>您好，根据您填写问卷的结果，我们推荐您购买以下猪肉</h4>
            <el-table
                    v-loading="loading"
                    :data="shopList"
                    border
                    style="width: 100%">
                <el-table-column type="index"></el-table-column>
                <el-table-column
                        prop="introduce"
                        label="名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        label="图片"
                        width="180">
                    <template v-slot="scope">
                        <img :src="scope.row.picture_address" style="width: 50px;height: 50px">
                    </template>
                </el-table-column>
                <el-table-column
                        prop="money"
                        label="价格/元"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="pork_parts"
                        label="部位">
                </el-table-column>
                <el-table-column
                        prop="weight"
                        label="重量/500g">
                </el-table-column>
            </el-table>
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
                loading:true,
                shopList:[],
            }
        },
        created() {
            const that=this
            let aaId=this.$route.params.options
            if (aaId==null){
                alert("请先填写问卷！")
                this.$router.push("/commendhome")
            }else{
                axios.post('http://106.14.117.35:5005/api/v1/get_option',{options:aaId})
                    .then(function (resp) {
                        that.shopList=resp.data
                        that.loading=false
                    })
            }

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
