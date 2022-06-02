<template>
<div v-if="posts.length > 0">
	<h3>Список постов</h3>
	<transition-group name="posts-list">
		<post-item 
		:post="post" v-for="post in posts" 
		:key="post.id"
		@remove="$emit('remove', post)"
		>
		</post-item>
	</transition-group>
  
	</div>
	<h2 v-else>Список постов пуст</h2>

</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
	props: {
		posts: {
			type: Array,
			required: true,
		}
	}
}
</script>

<style scoped>
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active, 
.posts-list-leave-active {
  transition: all 0.5s;
}
.posts-list-enter, 
.posts-list-leave-to  {
  opacity: 0;
  transform: translateY(30px);
}
.posts-list-move {
  transition: transform 1s;
}
</style>