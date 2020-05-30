<template>
    <el-container>
        <el-header align="center">
            <div>
            <el-input style="width: 200px" v-model="inputtext" placeholder="请输入你的地址"></el-input>
                <el-button type="premary" style="margin-left: 10px" @click="map">确定</el-button>
                <el-button >重置</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside width="400px">
                <div>距离您最近的门店为</div>
                <div>配送时间大约需要</div>
                {{messageItems}}
            </el-aside>
            <el-main>
                <div id="allmap" ref="allmap">
                    <el-input v-model="inputtext" placeholder="请输入内容"></el-input>
                </div>
            </el-main>
        </el-container>
    </el-container>
    <!--地图区域-->
    <!--信息输入区域-->


</template>

<script>
    import BMap from 'BMap'
    export default {
        name: "Commendmap",
        data () {
            return {
                inputtext:"",
                messageItems:[]
            }
        },
        created () {
            this.getItems()

        },
        methods: {
            map() {
                // 百度地图API功能
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(113.271431,23.135336);
                map.centerAndZoom(point, 12);
                // 创建地址解析器实例
                var myGeo = new BMap.Geocoder();
                // 将地址解析结果显示在地图上,并调整地图视野
                myGeo.getPoint(this.inputtext, function (point) {
                    if (point) {
                        map.centerAndZoom(point, 12);
                        map.addOverlay(new BMap.Marker(point));
                        if ((point.lng!=113.271431)&&(point.lat!=23.135336)){
                            alert("已经成功查询到您的地址，坐标为："+point.lng+','+point.lat)
                        }else{
                            alert("您选择地址没有解析到结果!");
                        }
                    }
                }, "广州市");
            },

        },
        mounted(){
            //调用上面个的函数
            this.map()
        }
    }
</script>


<style scoped>
    #allmap{
        height: 400px;
        width: 800px;
    }
</style>
