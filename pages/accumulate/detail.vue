<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">{{title}}</block></cu-custom>
		<view>
            <image :src="src" :style="{width: upxWidth, height: upxHeight}"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '',
                src: '',
                href: '',
                height: 0
			}
		},
        computed: {
            upxWidth() {
                return uni.upx2px(750) + 'px';
            },
            upxHeight() {
                return uni.upx2px(this.height) + 'px';
            }
        },
		onLoad(option) {
            this.title = JSON.parse(decodeURIComponent(option.title));
            this.src = JSON.parse(decodeURIComponent(option.src));
            this.href = JSON.parse(decodeURIComponent(option.href));
            this.height = option.height;
		},
		methods: {
		}
	}
</script>

<style>
</style>
