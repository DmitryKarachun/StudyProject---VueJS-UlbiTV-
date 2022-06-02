// eslint-disable-next-line vue/multi-word-component-names
<template>
	<div class="navbar">
		<h2 @click="$router.push('/')">Карачун</h2>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Посты</my-button>
			<my-button @click="$router.push('/about')">О Карачуне</my-button>
		</div>
		
	</div>
</template>

<script>
export default {
	// eslint-disable-next-line vue/multi-word-component-names
	name : 'my-navbar',
}

</script>

<style scoped >
.navbar {
	height: 80px;
	background: rgb(22, 187, 165);
	box-shadow: 2px 2px 4px whitesmoke;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
.navbar__btns {
	margin-left: auto
}
</style>