<script>
export default {
	data() {
		return {
			result: null,
			grow: false,
		};
	},
	methods: {
		setResult(number) {
			this.result = number;

			this.grow = true;
			setTimeout(function () {
				this.grow = false;
			}, 200);
		},
	},
};
</script>
<template>
	<input
		disabled
		class="result"
		type="text"
		inputmode="numeric"
		name=""
		id="result"
		ref="result"
		:value="result" />
</template>
<style scoped>
input {
	margin: 0 20xp;
	padding: 0;
	padding: 1px 2px;
	background-color: rgb(142, 157, 171);
	color: inherit;
	margin-top: 5px;
	width: 200px;
	height: 80px;
	border-radius: 5px;
	border: none;
	background-color: lightslategrey;
	text-align: center;
	font-size: 20px;
	transition: 0.5s;
}
.grow {
	scale: 1.15;
}
</style>
