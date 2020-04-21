<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">按钮</block></cu-custom>
		<view>
			<u-parse :content="article" @preview="preview" @navigate="navigate" ></u-parse>
		</view>
		
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'

	export default {
		components: {
		    uParse
		},
		data() {
			return {
				article: '<h1>【01】讲解前端技术向中台代码库概念（完成）</h1><div class="lake-content-editor-core lake-engine lake-typography-classic" data-lake-element="root" data-selection-634279="%7B%22path%22%3A%5B%5B15%2C0%2C0%2C2%2C0%2C1%5D%2C%5B15%2C0%2C0%2C2%2C0%2C1%5D%5D%2C%22uuid%22%3A%22634279%22%2C%22active%22%3Atrue%7D"><h2 id="TceRx"data-lake-id="fcd553f1b1b65d331d9eacaad2e87529_h2_0" style="padding: 7px 0px; margin: 0px; font-weight: 700; font-size: 24px; line-height: 32px;">常规下的中台</h2><p data-lake-id="46757b6f3256833b80a52f1383eef484_p_0" style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">据我了解，中台概念起源于淘宝，但最佳应用应该属于老美的航母群策略，也就是10人以内的一支特种部队在战斗的最前沿侦查，独立决策，一旦发现目标，迅速呼叫强大的中台航母群对其进行<strong>各种形式</strong>的打击。</p><p data-lake-id="968ff3a2cd9ee57e14ab9b44d12275de_p_1"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">那么如果中台应用到互联网是什么样的，今天下午刚跟做教育行业的同事讨论了一下，简而意赅的表达就是：对外输出的是网校网站、各个卖课站点，后台就需要有个订单的中台系统，可以把各个站点的订单信息交易汇总。并且会把各种支付方式聚合到一起，就合成了“中台系统-支付中心”。</p><h2 id="BKXab"data-lake-id="f788c33ab378e8eb04a4001133d1ab53_h2_1"style="padding: 7px 0px; margin: 0px; font-weight: 700; font-size: 24px; line-height: 32px;">前端技术向的中台</h2><p data-lake-id="b37f1972e4d322f36358a87c55de509f_p_2"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">由于前端岗位的特殊性，不是靠某一行业的业务而吃一辈子，所以初步在做架构的时候不能只专注于某一种业务，而是需要做出更全面、更通用、耦合性更低的技术架构。这样就可以在针对某一些业务进行落地的时候对业务深挖，逐步形成更专业的行业解决方案。</p><p data-lake-id="f521db3d419153941ccb35d816e7104f_p_3"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">上面说了这么多，其实都是引子，都是为了引出“中台代码库”的概念。</p><p data-lake-id="a4705d82c7cf46c2f11ce11846b5c043_p_4"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">中台代码库我们准备打算这么应用，它包含以下内容：</p><ul data-lake-id="771e52a882de82d1384f17667422205b_ul_0"lake-indent="0"style="list-style-type: disc; margin: 0px; padding-left: 23px; font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word;"><li data-lake-id="0abdcced5821390d432ebf32ec66d695_li_0">组件（二次封装的组件，避免重复造轮子，需版本控制）</li><li data-lake-id="895aaf704c7daea14702c55cb554b495_li_1">模板<span>（比如列表页、左侧树右侧列表等通用页面）</span></li><li data-lake-id="3ef16d2e61daed9dfe8a79bad0e18a33_li_2">模块（后期考虑各种应用，比如刀具管理、生产计划等）</li><li data-lake-id="39439024335cea3a771519d76e6cb018_li_3">路由权限（考虑以后会基于代码库衍生出各个项目，所以基本的权限+系统设置需要有）</li><li data-lake-id="7fc4f0b036fec43e1a708794728d75bb_li_4">通用功能（websocket、多语言、工作流等）</li><li data-lake-id="fe7c7edc06cd11877800f703a4fbc74f_li_5">项目通用配置（快速联调ip、皮肤、顶部菜单还是左侧菜单等）</li><li data-lake-id="3d66967f3c510d3ca620897506dba784_li_6">通用工具方法</li><li data-lake-id="a406a6e0bd321a653220b58a3ca2930c_li_7">...</li></ul><p data-lake-id="e8f27b7d941a60cdc305283ec18271ec_p_5"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">而且它还具备以下特性：</p><ul data-lake-id="5bcbeaac3c5b82962fe77105b68dc5c9_ul_1"lake-indent="0"style="list-style-type: disc; margin: 0px; padding-left: 23px; font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word;"><li data-lake-id="34da6bda4f6aa370c8dd13d5cdc4dce5_li_8">组件、模板有demo页面（快速copy代码和查看demo功能）</li><li data-lake-id="21ce9f72cd9635d6fe78f801a0a038c1_li_9">有整套系统的上手文档机制</li><li data-lake-id="c0b6bb477adbc2929581dc67c54b244d_li_10">有模拟后台数据机制（yapi、mock）</li><li data-lake-id="27929ebb67d54f0dc56235ecba88c23c_li_11">有健全的版本管理机制</li><li data-lake-id="50179b9bc9aeb35e637181d074806ab9_li_12">有健全的项目样式管理机制</li><li data-lake-id="3082f0102f89727c9d7f6600ff7233a1_li_13">所使用的类库版本根据功能需要是最新、最稳定的（vue、element等）</li><li data-lake-id="066c999285befd6b4b2bd678774f9d5a_li_14">各种组件、通用配置、通用功能需尽可能的向下兼容</li></ul><p data-lake-id="f23fb9c519ff30bfe03d0b2cc2cac85d_p_6"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;"><br></p><p data-lake-id="99c45704c1145569d51f4f0321db3be5_p_7"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">下面给一张脑图归纳一下</p><div data-card-type="block"data-lake-card="localdoc"id="bjWJJ"><a href="https://www.yuque.com/office/yuque/0/2020/xmind/634279/1584537476419-5c81b0ac-75bb-43c1-8acc-652d1a0af76d.xmind" style="word-wrap: break-word;color: #096DD9;touch-action: manipulation;background-color: rgba(0,0,0,0);text-decoration: none;outline: none;cursor: pointer;transition: color .3s;">中台代码库.xmind</a></div><h2 id="IMVzz"data-lake-id="5bd589b1b4871fe9750867cb382a60cf_h2_2"style="padding: 7px 0px; margin: 0px; font-weight: 700; font-size: 24px; line-height: 32px;">中台代码库如何不断健壮</h2><p data-lake-id="ca1606076d8469c9735f5ca6c20af7ba_p_8"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">结合我司实际情况，在云平台的基础只上有vt-mes，vt-scada等等上层应用，所以我们采用下图的方式不断丰富中台代码库</p><p data-lake-id="7aceb1cd393868b8ffaf06aed880d774_p_9"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;"><span data-card-type="inline"data-lake-card="image"class="lake-card-margin-top lake-card-margin-bottom"><img data-role="image" src="https://cdn.nlark.com/yuque/0/2020/png/634279/1587468527868-5fbb0f15-89a9-4b33-9726-b04e7612e550.png" data-raw-src="https://cdn.nlark.com/yuque/0/2020/png/634279/1587468527868-5fbb0f15-89a9-4b33-9726-b04e7612e550.png" class="image lake-drag-image" alt="前端中台代码库架构图.png" title="前端中台代码库架构图.png" style="visibility: visible; border: none; box-shadow: none; width: 746px; height: 660px;"></span></p><p data-lake-id="ee8a3760df05d7589c4c2c71c66a715e_p_10"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">简述下来就是，在做各类型应用的时候，都把中台代码库的源码克隆一份，然后在开发的过程中积累到通用组件、通用模板或通用的功能等代码时，就把这些代码补充到中台代码库，<strong>并在中台代码库中将已成熟的组件、模板或功能进行封装&amp;版本管理，再有新项目用到时，直接安装或copy源码即可</strong>。就这样中台代码库一步步的得到丰富。</p><p data-lake-id="72074fd76e06d1a8dc49da225c7224f3_p_11"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;"><span style="color: #F5222D;"><strong>由于公司业务的推动，后期还需要再次基础上考虑微前端的应用。</strong></span></p><h2 id="K1x3e"data-lake-id="0e2b79bc48183f264022f2f8a3f2c165_h2_3"style="padding: 7px 0px; margin: 0px; font-weight: 700; font-size: 24px; line-height: 32px;">总结</h2><p data-lake-id="42df45347b3a35f3c8793653bb621b30_p_12"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">大家看到这里应该知道了前端技术向的“中台代码库”是什么概念了吧，其实总结为有版本控制、有通用配置的大轮子。</p><p data-lake-id="ff8473efaf89163d1f0560b749f02d14_p_13"style="font-size: 14px; color: rgb(38, 38, 38); line-height: 1.74; letter-spacing: 0.05em; outline-style: none; overflow-wrap: break-word; margin: 0px;">下一章开始手摸手的教大家如何从vue-element-admin改造出我上述所说的“中台代码库”。</p></div>'
			}
		},
		onLoad() {
			uni.request({ //接口请求
					url: 'https://www.yuque.com/docs/share/e214ff68-7cfd-49db-830d-1fc210fc2d92?#',
					data: {
						book_id: 866817,
						mode: 'html'
					},
					success: (res) => {
							console.log(res)
							// this.article = res.data;
							// this.article = res.data.content.rendered;
							// this.banner_title = res.data.title.rendered;
							// this.banner_img = res.data.featured_image_src;
							// console.log(this.article);
					}
			})
		},
		methods: {
			preview(src, e) {
			  // do something
			},
			navigate(href, e) {
			  // do something
			}
		}
	}
</script>

<style>
	@import url("@/components/u-parse/u-parse.css");
</style>
