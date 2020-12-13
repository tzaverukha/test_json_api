<template>
	<div id="app">

		<header>
			Поставь лайк квартире!
		</header>

		<main>
			<div class="card-list">
				<div class="card-item"
					v-for="flat in entitles" :key="flat.id"
				>
					<flat-card
						class="card-item__content"
						:flat="flat"
					/>
				</div>
			</div>
		</main>

		<footer>Made by Taras Zaverukha</footer>

	</div>
</template>

<script>
	import { mapActions, mapGetters } from 'vuex';
	import FlatCard from '@/components/blocks/FlatCard.vue';

	export default {
		name: 'App',
		components: {
			FlatCard,
		},
		computed: mapGetters([
			'entitles',
		]),
		mounted() {
			this.init();
		},
		methods: mapActions([
			'init',
		]),
	};
</script>

<style lang="stylus">
	@import '~normalize-styl'
	#app
		font-family Avenir, Helvetica, Arial, sans-serif
		font-size 16px
		line-height 1.3
		text-align center
		color #000000
		background-color #e6e6e6
		min-height 100vh
		display flex
		flex-direction column
	header
		margin 10px 0 5px
		position relative
	main
		flex-grow 1
		margin 0 auto
		width 100%
		max-width 1240px
		padding 0 10px
		box-sizing border-box
	footer
		margin 20px 0
	.card-list
		display flex
		flex-wrap wrap
	.card-item
		width 33.3333%
		flex none
		padding 10px
		box-sizing border-box
		@media screen and (max-width: 1200px)
			width 50%
		@media screen and (max-width: 760px)
			width 100%
		&__content
			height 100%
</style>
