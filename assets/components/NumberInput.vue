<script>
export default {
	props: ["numberID"],
	data() {
		return {
			num1: null,
			num2: null,
		};
	},
};
</script>

<template>
	<input
		class="number_input"
		type="text"
		inputmode="numeric"
		name=""
		:id="numberID"
		@input="$emit('numberInput')" />
</template>

<style scoped>
input {
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
</style>
