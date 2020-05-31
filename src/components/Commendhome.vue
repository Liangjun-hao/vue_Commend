<template>
    <div>
        <div>
            <!-- 面包屑导航区-->
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item >首页</el-breadcrumb-item>
                    <el-breadcrumb-item >填写问卷</el-breadcrumb-item>
                </el-breadcrumb>

                <!-- 卡片视图-->
                <el-card>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <!--第一题-->
                        <div class="let">
                            <div>1您每月在购买生鲜猪肉上的支出</div>
                            <el-radio-group v-model="radio1">
                                <p><el-radio label="A">400以下</el-radio></p>
                                <p><el-radio label="B">400-800</el-radio></p>
                                <p><el-radio label="C">800-1200</el-radio></p>
                                <p><el-radio label="D">1200以上</el-radio></p>
                            </el-radio-group>
                        </div>
                    </div></el-col>
                    <el-col :span="6" :offset="6"><div class="grid-content bg-purple">
                        <div class="let">
                            <div>2您购买正大生鲜猪肉的频率是</div>
                            <el-radio-group v-model="radio2">
                                <p><el-radio label="A">1周3-4次</el-radio></p>
                                <p><el-radio label="B">1周1次</el-radio></p>
                                <p><el-radio label="C">1个月1次</el-radio></p>
                                <p><el-radio label="D">其他</el-radio></p>
                            </el-radio-group>
                        </div>
                    </div></el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple">
                        <div class="let">
                            <div>3您选择购买正大猪肉的原因是</div>
                            <el-radio-group v-model="radio3">
                                <p><el-radio label="A">种类齐全</el-radio></p>
                                <p><el-radio label="B">服务态度</el-radio></p>
                                <p><el-radio label="C">味道较好</el-radio></p>
                                <p><el-radio label="D">其他</el-radio></p>
                            </el-radio-group>
                        </div>
                    </div>
                    </el-col>
                    <el-col :span="6" :offset="6"><div class="grid-content bg-purple">
                        <div class="let">
                            <div>4您对正大猪肉的评价是</div>
                            <el-radio-group v-model="radio4">
                                <p><el-radio label="A">很满意</el-radio></p>
                                <p><el-radio label="B">较满意</el-radio></p>
                                <p><el-radio label="C">一般</el-radio></p>
                                <p><el-radio label="D">不满意</el-radio></p>
                            </el-radio-group>
                        </div>
                    </div></el-col>
                </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content bg-purple">
                            <div class="let">
                                <div>5您购买生鲜猪肉的渠道是</div>
                                <el-radio-group v-model="radio5">
                                    <p><el-radio label="A">农贸市场</el-radio></p>
                                    <p><el-radio label="B">超市</el-radio></p>
                                    <p><el-radio label="C">电商</el-radio></p>
                                    <p><el-radio label="D">其他</el-radio></p>
                                </el-radio-group>
                            </div>
                        </div>
                        </el-col>
                        <el-col :span="6" :offset="6"><div class="grid-content bg-purple">
                            <div class="let">
                                <div>6影响您购买生鲜猪肉的主要因素是</div>
                                <el-radio-group v-model="radio6">
                                    <p><el-radio label="A">价格</el-radio></p>
                                    <p><el-radio label="B">口感</el-radio></p>
                                    <p><el-radio label="C">营养价值</el-radio></p>
                                    <p><el-radio label="D">安全性</el-radio></p>
                                    <p><el-radio label="E">其他</el-radio></p>
                                </el-radio-group>
                            </div>
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content bg-purple">
                            <div class="let">
                                <div>7以下几种猪肉部位您会选择哪种购买</div>
                                <el-radio-group v-model="radio7">
                                    <p><el-radio label="A">腿部肉</el-radio></p>
                                    <p><el-radio label="B">五花肉</el-radio></p>
                                    <p><el-radio label="C">瘦肉</el-radio></p>
                                    <p><el-radio label="D">猪蹄</el-radio></p>
                                    <p><el-radio label="E">其他</el-radio></p>
                                </el-radio-group>
                            </div>
                        </div>
                        </el-col>
                        <el-col :span="6" :offset="6"><div class="grid-content bg-purple">
                            <div class="let">
                                <div>8网购生鲜猪肉时，您关心的问题是</div>
                                <el-radio-group v-model="radio8">
                                    <p><el-radio label="A">猪肉新鲜度</el-radio></p>
                                    <p><el-radio label="B">猪肉包装</el-radio></p>
                                    <p><el-radio label="C">配送速度</el-radio></p>
                                    <p><el-radio label="D">售后服务</el-radio></p>
                                </el-radio-group>
                            </div>
                        </div></el-col>
                    </el-row>
                    <el-row :gutter="20">
                        <el-col :span="6"><div class="grid-content bg-purple">
                            <div class="let">
                                <div>9网购生鲜猪肉时，您最长能接受的配送时间是</div>
                                <el-radio-group v-model="radio9">
                                    <p><el-radio label="A">半小时内</el-radio></p>
                                    <p><el-radio label="B">一小时内</el-radio></p>
                                    <p><el-radio label="C">3小时内</el-radio></p>
                                    <p><el-radio label="D">半天内</el-radio></p>
                                </el-radio-group>
                            </div>
                        </div>
                        </el-col>
                    </el-row>
                <el-row :gutter="20">
                    <el-col :span="4">
                        <el-button type="primary" @click="pushParms">下一步</el-button>
                    </el-col>
                </el-row>
            </el-card>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Commendhome",
        data(){
            return{
                radio1:"",
                radio2:"",
                radio3:"",
                radio4:"",
                radio5:"",
                radio6:"",
                radio7:"",
                radio8:"",
                radio9:"",


            }
        },
        created() {
        },
        methods:{
            pushParms(){
                if(this.radio1==""||this.radio2==""||this.radio3==""||this.radio4==""||this.radio5==""||this.radio6==""||this.radio7==""||this.radio8==""||this.radio9==""){
                    alert("请完整填写问卷")
                    return
                }
                let params = {
                    options: this.radio1+this.radio2+this.radio3+this.radio4+this.radio5+this.radio6+this.radio7+this.radio8+this.radio9
                }
                this.$router.push({
                    path:'commendindex',
                    name:'Commendindex',
                    params:params
                })
                console.log(params)
            },
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
    &:last-child {
         margin-bottom: 0;
     }
    }
    .el-col {
        border-radius: 4px;

    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .let {
        margin-left: 20px;
    }
</style>
