<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">{{name}}</block></cu-custom>
		<view class="system-pack">
			<scroll-view class="list-pack" scroll-y>
				<view @tap="goDetail(index)" class="item-pack" v-for="(item,index) in articleList" :key="index">
					<view class="title">{{item.title}}</view>
				</view>
			</scroll-view>
		</view>
	</view>
	
</template>

<script>
	import data from '../data.js'
	export default {
		data() {
			return {
				name: '',
				articleList: []
			}
		},
		onLoad(option) {
			this.name = JSON.parse(decodeURIComponent(option.name));
			let self = this;
		    data.brochure[option.type].forEach((item, index) => {
				if (item.id == option.id) {
					self.articleList = item.children;
				}
			})
		},
		methods: {
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
			},
            goDetail (index) {
                let title = this.articleList[index].title;
                let src = this.articleList[index].src;
                let href = this.articleList[index].href;
                let height = this.articleList[index].height;
            	uni.navigateTo({
            		url: '/pages/accumulate/detail?title='+encodeURIComponent(JSON.stringify(title))+'&src='+encodeURIComponent(JSON.stringify(src))+'&href='+encodeURIComponent(JSON.stringify(href))+'&height='+height
            	})
            }
		}
	}
</script>

<style>
	.list-pack {
		height: 100%;
		width: 100%;
		overflow-y: auto;
		background-color: #fff;
	}
	.item-pack {
		display: -webkit-flex;
		display: flex;
		align-items: center;
		min-height: 140upx;
		border-bottom: 2upx solid #ddd;
		margin: 0 30upx;
		font-weight: 300;
	}
	.item-pack .title {
		font-size: 32upx;
		color: #000;
	}
</style>
