<template>
    <div>
        <HomeHeader :city ="city"></HomeHeader>
        <Swiper :list = "swiperList"></Swiper>
        <HomeIcons :iconList = "iconList"></HomeIcons>
        <Recommend :recommendList = "recommendList"></Recommend>
        <WeekEnd :weekendList = "weekendList"></WeekEnd>
        

    </div>
</template>

<script>
    import HomeHeader from "./components/HomeHeader"
    import Swiper from "./components/HomeSwiper"
    import HomeIcons from "./components/HomeIcons"
    import Recommend from "./components/Recommend"
    import WeekEnd from "./components/WeekEnd"
    import axios from "axios"
    export default {
        name :"Home",
        components:{
            HomeHeader,
            Swiper,
            HomeIcons,
            Recommend,
            WeekEnd,
        },
        data(){
            return {
                city : "",
                swiperList : [],
                iconList : [],
                recommendList : [],
                weekendList : []
            }
        },
        methods:{
            getHomeInfo(){
                // axios.get("/static/mock/index.json")
                axios.get("/api/index.json")
                .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res){
                res = res.data
                console.log(res.data);
                if (res.ret && res.data) {
                    const data = res.data
                    this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList = data.iconList
                    this.recommendList = data.recommendList
                    this.weekendList = data.weekendList
                }
            }
        },
        mounted(){
            this.getHomeInfo();
        }
    }
</script>

<style lang="stylus" scoped>

</style>