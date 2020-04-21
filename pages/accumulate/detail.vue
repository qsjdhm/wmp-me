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
				article: "1"
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
							this.article = res.data;
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
