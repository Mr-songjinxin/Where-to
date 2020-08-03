
<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id" >
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            
            <div class="swiper-pagination"  slot="pagination"></div>    
        </swiper>
    </div>

    

</template>

<script>
    export default {
        name:"HomeSwiper",
        props:{
            list:Array  
        },
        data(){
            return{
                swiperOption:{
                     autoplay : false,
                     pagination: '.swiper-pagination',
                     loop: true,
                },
                // swiperList:[{
                //     id:"0001",
                //     imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"
                // },{ 
                //     id:"0002",
                //     imgUrl:"http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg"}]
            }
        },
        computed : {
            showSwiper () {
                return this.list.length;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff
.wrapper
    // overflow: hidden
    // width: 100%
    // height: 0
    // padding-bottom: 31.25% 
    height :31.25vw
    background : #111
    .swiper-img
        width : 100%
    //  swiper-pagination-bullet-active
    //      background  :white  !!!import
</style>