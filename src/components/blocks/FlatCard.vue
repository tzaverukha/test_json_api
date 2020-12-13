<template>
	<div class="flat-card">
		<div class="flat-card__title">{{flat.attributes.title}}</div>
		<div class="flat-card__attrs-list">
			<div class="flat-card__attr flat-card-attr"
				v-for="(value, key) in flatAttrs" :key="key"
			>
				<div class="flat-card-attr__key">{{key}}:</div>
				<div class="flat-card-attr__value" v-html="value"></div>
			</div>
		</div>
		<div class="flat-card__btn-like"
			:class="{'flat-card__btn-like--is-liked': flat.like}"
			@click="changeEntitleLike(flat.id)"
		>Like</div>
	</div>
</template>

<script>
	import { mapActions} from 'vuex';

	export default {
		name: 'flat-card',
		props: {
			flat: Object,
		},
		computed: {
			flatAttrs() {
				const attrs = this.flat.attributes;
				const addrs = attrs.address;
				const agent = this.flat.relationships.attributes
				return {
					'Количество комнат': attrs.rooms,
					'Адрес': `г.&nbsp${addrs.city}, ул.&nbsp${addrs.street}, д.&nbsp${addrs.house}, кв.&nbsp${addrs.room}`,
					'Площадь': `${attrs.area}&nbsp${attrs.unit}`,
					'Агент': `${agent.last_name} ${agent.first_name} ${agent.middle_name}`,
				};
			},
		},
		methods: mapActions(['changeEntitleLike']),
	};
</script>

<style lang="stylus">
	.flat-card
		position relative
		text-align left
		border 1px solid #000
		padding 10px
		box-sizing border-box
		&__title
			font-weight 600
			padding-right 30px
		&__btn-like
			cursor pointer
			padding 3px 3px 2px
			border 1px solid black
			border-radius 3px
			position absolute
			top 5px
			right 5px
			user-select none
		&__btn-like--is-liked
			background yellow
	.flat-card-attr
		display flex
		justify-content space-between
		margin-top 10px
		&__key
			margin-right 20px
		&__value
			text-align right
</style>
