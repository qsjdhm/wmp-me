<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">我的知识体系</block></cu-custom>
		<view class="system-pack">
			<scroll-view scroll-x class="tab-pack bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==tabCur?'tab-checked cur':''" v-for="(item,index) in tabData" :key="index" @tap="tabSelect" :data-id="index">
						{{item}}
					</view>
				</view>
			</scroll-view>
			<scroll-view v-if="tabCur == 0" class="list-pack" scroll-y>
				<view @tap="brochureClick(item)" class="item-pack" v-for="(item,index) in repositoryData" :key="index">
					<view class="icon-pack">
						<img src="../../static/article.png" />
					</view>
					<view class="content-pack">
						<view class="title-pack">
							<view class="title">{{item.name}}</view>
							<view class="dot">
								<img src="../../static/dot.png" />
							</view>
						</view>
						<view class="number-pack">共有文档{{item.number}}篇</view>
					</view>
				</view>
			</scroll-view>
            <scroll-view v-if="tabCur == 1" class="list-pack" scroll-y>
            	<view @tap="brochureClick(item)" class="item-pack" v-for="(item,index) in hybridData" :key="index">
            		<view class="icon-pack">
            			<img src="../../static/article.png" />
            		</view>
            		<view class="content-pack">
            			<view class="title-pack">
            				<view class="title">{{item.name}}</view>
            				<view class="dot">
            					<img src="../../static/dot.png" />
            				</view>
            			</view>
            			<view class="number-pack">共有文档{{item.number}}篇</view>
            		</view>
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
				tabData: ['资产库知识体系', '终端知识体系'],
				repositoryData: [],
                hybridData: [],
				tabCur: 0
			}
		},
		onLoad(option) {
            if (option.type == '2') {
                this.tabCur = 1
            }
		},
		onReady() {
			this.repositoryData = data.brochure.repository;
			this.hybridData = data.brochure.hybrid;
		},
		methods: {
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
			},
			brochureClick (row) {
				let type = 'repository';
				if (this.tabCur == 0) {
					type = 'repository'
				} else {
					type = 'hybrid'
				}
				uni.navigateTo({
					url: '/pages/repository/list?name='+encodeURIComponent(JSON.stringify(row.name))+'&id='+row.id+'&type='+type
				})
			}
		}
	}
</script>

<style>
	.system-pack {
		
	}
	.system-pack .tab-checked {
		color: #209dda;
	}
	.tab-pack {
		margin-bottom: 10upx;
	}
	.list-pack {
		position: absolute;
		top: 240upx;
		width: 100%;
		bottom: 0;
		overflow-y: auto;
	}
	.item-pack {
		display: -webkit-flex; /* Safari */
		display: flex;
		height: 140upx;
		background-color: #fff;
		margin-bottom: 10upx;
	}
	.icon-pack {
		height: 140upx;
		line-height: 140upx;
		width: 100upx;
		padding-right: 20upx;
		text-align: right;
	}
	.icon-pack img {
		width: 42upx;
		height: 42upx;
	}
	
	.content-pack {
		flex: 1;
	}
	.title-pack {
		display: -webkit-flex;
		display: flex;
		height: 80upx;
		line-height: 100upx;
	}
	
	.title-pack .title {
		flex: 1;
		font-size: 28upx;
		font-weight: bold;
		color: #000;
	}
	.title-pack .dot {
		height: 100upx;
		line-height: 100upx;
		width: 100upx;
		text-align: center;
	}
	.title-pack .dot img {
		width: 24upx;
		height: 24upx;
	}
	.number-pack {
		font-size: 24upx;
		letter-spacing: 2upx;
		color: #999;
	}
	
</style>
