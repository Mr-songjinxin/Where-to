
<template>
    <ul class="list">
		<li class="item">A</li>
		<li class="item">B</li>
		<li class="item">C</li>
		<li class="item">D</li>
		<li class="item">E</li>
	</ul>
</template>

<script>
    export default {
        name:"Alphabet"
    }
</script>

<style lang="stylus" scoped>

@import '~styles/varibles.styl'
.list
        display: flex
        flex-direction: column
        justify-content: center
        position: absolute
        top: 1.58rem
        right: 0
        bottom: 0
        width: .44rem
        // background :red
        .item
            line-height: .4rem
            text-align: center
            color: $bgColor

</style>