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
				<view class="item-pack" v-for="(item,index) in repositoryData" :key="index">
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
            	<view class="item-pack" v-for="(item,index) in hybridData" :key="index">
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
	export default {
		data() {
			return {
				tabData: ['资产库知识体系', '终端知识体系'],
				repositoryData: [
					{
						id: 0,
						name: '嘴亲嘴教学系列',
						number: 24,
                        children: [
                            {
                                title: '【01】讲解前端技术向中台代码库概念（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02eNd.jpg',
                                height: 5644
                            },
                            {
                                title: '【02】克隆vue-element-admin源码并去除多余结构（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02ZAH.jpg',
                                height: 5690
                            },
                            {
                                title: '【03】图标方案改进（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02m4A.jpg',
                                height: 8862
                            },
                            {
                                title: '【04】引入VT UI 2.0设计元素（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02u9I.jpg',
                                height: 9030
                            },
                            {
                                title: '【05】建立文档化服务（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02EHe.jpg',
                                height: 15424
                            },
                            {
                                title: '【06】引入成熟的权限整体方案-上（完成）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【07】引入成熟的权限整体方案-中',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【08】引入成熟的权限整体方案-下',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【09】搭建YApi和mock对接假数据',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【10】通过lerna和私有cnpm教你写组件并控制版本',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【11】用TS写组件',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【12】引入bpmn.js作为工作流前端绘制方案',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【13】引入websocket作为前后端即时通讯（ing）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【14】集成通用类库（antV、日历、大数据表格）',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            },
                            {
                                title: '【15】通过node或webpack实现模板代码插入效果',
                                src: 'https://s1.ax1x.com/2020/04/24/J02K3t.jpg',
                                height: 14176
                            }
                        ]
					},
					{
						id: 1,
						name: '前端评级系列',
						number: 4
					},
					{
						id: 2,
						name: '前端技术树系列',
						number: 4
					},
					{
						id: 3,
						name: '规划与布局',
						number: 10
					}
				],
                hybridData: [
                    {
                    	id: 0,
                    	name: 'uni-app填坑指南',
                    	number: 24
                    }
                ],
				tabCur: 0
			}
		},
		onLoad(option) {
            if (option.type == '2') {
                this.tabCur = 1
            }
		},
		methods: {
			tabSelect(e) {
				this.tabCur = e.currentTarget.dataset.id;
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
