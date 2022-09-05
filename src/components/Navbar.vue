<template>
	<div class="sticky-top">
		<nav
			class="navbar rounded justify-content-between flex-nowrap flex-row"
			style="margin-bottom: 2rem; background-color: #f4f7fc"
		>
			<div class="container" style="margin-bottom: 7rem">
				<!-- <div class="mb-md-7"> -->
				<div class="row container align-items-center centered-navbar">
					<div class="col-lg-5 col-sm-10">
						<label><b>URL</b></label>
						<input type="text" class="form-control" placeholder="http://localhost" />
					</div>
					<div class="col-lg-5 col-sm-10">
						<label><b>PORT</b></label>
						<input type="text" class="form-control" placeholder="8000" />
					</div>
					<div class="col-lg-2 col-sm-10" style="text-align:right;  margin-top: -10px;">
						<button type="button" class="btn btn-primary col-12" 	style=" background-color: #3C64B1">CONNECT</button>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { defineComponent ,ref} from "vue";
// import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "NavBar",
    // setup(){
    //     	const headers = ref([
	// 		{ text: "ID", value: "id", width: 50  },
	// 		{ text: "Name", value: "name", width: 200  },
	// 		{ text: "Post Code", value: "post_code", width: 200 },
	// 		{ text: "Price", value: "price", width: 200  },
	// 		{ text: "Action", value: "action", width: 200  },
	// 	]);
    // }
	computed: {
		...mapGetters("heroModule", {
			heroes: "heroes",
		}),
		...mapGetters("antiHeroModule", {
			antiHeroes: "antiHeroes",
		}),
	},
});
</script>

<style scoped>
.centered-navbar {
	position: absolute;
	top: 75%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
