<template>
    <el-container>
        <el-header align="center">
            <div>
            <el-input style="width: 200px" v-model="inputtext" placeholder="请输入你的地址"></el-input>
                <el-button type="premary" style="margin-left: 10px" @click="serchmap">确定</el-button>
                <el-button >重置</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside width="400px">
                <div>已经模拟设立的门店所在商圈为：</div>
                <div>广州天河区正佳广场</div>
                <div>东圃商业大厦</div>
                <div>龙洞步行街</div>
                <div>珠江新城花城汇</div>
                <p></p>
                <div>距离您最近的门店为{{shopxy.name}}</div>
                <div>配送时间大约需要{{(time/60).toFixed(2)}}分钟</div>
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
                state:[{
                    lng:"113.333630",
                    lat:"23.137855",
                    name:"广州天河区正佳广场",
                },{
                    lng:"113.410717",
                    lat:"23.127213",
                    name:"东圃商业大厦",
                },{
                    lng:"113.373598",
                    lat:"23.204412",
                    name:"龙洞步行街",
                },{
                    lng:"113.333565",
                    lat:"23.125732",
                    name:"珠江新城花城汇",
                }
                ],
                inputtext:"",
                porxy:{
                    dx:'113.271431',
                    dy:'23.135336'
                },
                shopxy:{
                    dx:'23.137855',
                    dy:'113.333630',
                    name:''
                },
                time:[]
            }
        },
        created () {
        },
        methods: {
            //获取用户坐标
            serchmap(){
                const that=this
                this.$jsonp(`http://api.map.baidu.com/geocoding/v3/?address=${this.inputtext}&output=json&ak=W6spXtlrFCymkcVz6mUZlHY6St45GDci&callback=showLocation`)
                    .then(function (resp) {
                        if (resp.status==0){
                            that.porxy.dy=resp.result.location.lat.toFixed(6)
                            that.porxy.dx=resp.result.location.lng.toFixed(6)
                        }else{
                            alert("您填写的地址没有解析到结果")
                            return
                        }

                    })
                setTimeout(function () {
                    that.getdistance()
                    that.drivingcar()
                    that.getduration()
                },500)

            },
            //显示轨迹图
            drivingcar(){
                var map = new BMap.Map("allmap");
                var driving = new BMap.DrivingRoute(map, {
                    renderOptions: {
                        map: map,
                        autoViewport: true
                    }
                });
                var start = new BMap.Point(this.shopxy.dy, this.shopxy.dx);
                var end = new BMap.Point(this.porxy.dx, this.porxy.dy);
                driving.search(start, end);
                map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
                map.addControl(new BMap.NavigationControl()) // 添加平移缩放控件
                map.addControl(new BMap.ScaleControl()) // 添加比例尺控件
                map.addControl(new BMap.OverviewMapControl()) // 添加缩略地图控件

                var localSearch = new BMap.LocalSearch(map);
                localSearch.enableAutoViewport(); //允许自动调节窗体大小
            },
            //计算配送距离
            getdistance(){
              var distancey=this.state[0].lng-this.porxy.dy;
              var distancex=this.state[0].lat-this.porxy.dx;
              var distance=distancey*distancey+distancex*distancex;
              var temp=distance;
                for(var i=0, Len = 4; i<Len; i++){
                    distancey=(this.state[i].lng-this.porxy.dx);
                    distancex=(this.state[i].lat-this.porxy.dy);
                    distance=(distancey*distancey)+(distancex*distancex);
                   if(temp>distance) {
                       temp=distance;
                       this.shopxy.dx=this.state[i].lat;
                       this.shopxy.dy=this.state[i].lng;
                       this.shopxy.name=this.state[i].name;
                   }

                }
            },
            //计算配送距离
            getduration(){
                const that=this
                this.$jsonp(`http://api.map.baidu.com/directionlite/v1/driving?origin=${this.porxy.dy},${this.porxy.dx}&destination=${this.shopxy.dx},${this.shopxy.dy}&ak=W6spXtlrFCymkcVz6mUZlHY6St45GDci`)
                    .then(function (resp) {
                        that.time=resp.result.routes[0].duration
                        console.log(that.time)
                        /*this.time=resp.routes.duration*/
                    })
            },
            map() {
                // 百度地图API功能

                var map = new BMap.Map("allmap");
                var point = new BMap.Point(this.porxy.dx,this.porxy.dy);
                map.centerAndZoom(point, 12);
                for(var i=0, pointsLen = this.state.length; i<pointsLen; i++) {
                    var point = new BMap.Point(this.state[i].lng,this.state[i].lat); //将标注点转化成地图上的点
                    var marker = new BMap.Marker(point); //将点转化成标注点
                    map.addOverlay(marker);  //将标注点添加到地图上
                }
                map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
                map.addControl(new BMap.NavigationControl()) // 添加平移缩放控件
                map.addControl(new BMap.ScaleControl()) // 添加比例尺控件
                map.addControl(new BMap.OverviewMapControl()) // 添加缩略地图控件
                var localSearch = new BMap.LocalSearch(map);
                localSearch.enableAutoViewport(); //允许自动调节窗体大小
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
        width: 700px;
    }
</style>
