<template>
    <div>
        <!-- 面包屑导航区-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item >首页</el-breadcrumb-item>
            <el-breadcrumb-item >选购猪肉</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 卡片视图-->
        <el-card>
            <!--选购表格-->
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
            <el-table-column
                    label="选购数量">
                <template v-slot="scope">
                    <el-input-number v-model="scope.row.num" @change="handleChange" label="描述文字"></el-input-number>
                </template>
            </el-table-column>
        </el-table>
            <el-row :gutter="20" >
                <el-col :span="4">
                    <el-button type="primary"><router-link to="/commendmap">确认挑选，下一步</router-link></el-button>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>

<script>
    import {AxiosInstance as axios} from "axios";

    export default {
        name: "Commendshop",
        data(){
            return {
                loading:true,
                shopList:[],
            };
        },
        created() {
            this.getshopList()

        },
        methods: {
            getshopList(){
                const that=this
                this.$axios.get('http://106.14.117.35:5005/api/v1/get_items')
                .then(function (resp) {
                    that.shopList=resp.data
                    that.loading=false
                })
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style scoped>
    .el-table{
        margin-bottom: 20px;
    }
</style>
