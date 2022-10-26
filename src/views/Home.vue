<template>
	<div v-if="loading" class="d-flex flex-row justify-content-center"></div>
	<div v-if="heroes.count > 0">
		<div class="container" style="margin-bottom: 7rem">
			<div class="row align-items-center centered-navbar">
				<div class="col-lg-5 col-sm-10">
					<h4>HOUSE LIST</h4>
				</div>
				<div class="col-lg-5 col-sm-10"></div>
				<div class="col-lg-2 col-sm-10" style="text-align: right; margin-left: -10px">
					<button
						type="button"
						class="btn col-12"
						style="background-color: #22bb66; color: #fffff"
						data-bs-toggle="modal"
						href="#ModalAdd"
					>
						CREATE
					</button>
				</div>
			</div>
			<br />

			<EasyDataTable
				:headers="headers"
				:items="heroes.payload"
				:loading="loading"
				table-class-name="customize-table"
				v-model:server-options="serverOptions"
				border-cell
			>
				<template #item-action="item">
					<div class="operation-wrapper align-items-center" style="justify-content: center">
						<button
							type="button"
							class="btn btn-sm"
							style="border-radius: 100px; margin-left: 30px; background-color: #fff7e6; color: #ff9900"
							data-bs-toggle="modal"
							href="#ModalView"
							@click="showItem(item.id)"
						>
							<b>VIEW DETAIL</b>
						</button>
						<button
							type="button"
							class="btn btn-sm"
							style="border-radius: 100px; margin-left: 10px; background-color: #fdf4f7; color: #b93e5c"
							@click="deleteItem(item.id)"
						>
							<b>DELETE </b>
						</button>
					</div>
				</template>
			</EasyDataTable>
		</div>

		<div class="container centered-sucess" v-if="check_success == true">
			<div
				class="cookiesContent"
				id="cookiesPopup"
				style="
					width: 250px;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					text-align: center;
				"
			>
				<img src="../assets/11zon_cropped.png" />
				<span style="font-size: 22px; color: #91959a"><b>Success</b></span>
				<span>Create a Successful!</span>
				<br />
				<button class="btn" @click="clear()" style="background-color: #ffffff; color: #898b8f; border: 0.5px solid">
					CONTINUE
				</button>
			</div>
		</div>
		<div v-else></div>

		<div class="container centered-sucess" v-if="check_err == true">
			<div
				class="cookiesContent"
				id="cookiesPopup"
				style="
					width: 250px;
					box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
					text-align: center;
				"
			>
				<img src="../assets/11zon_cropped_err.png" />
				<span style="font-size: 22px; color: #91959a"><b>Fali</b></span>
				<span>Let's try one again</span>
				<br />
				<button class="btn" @click="clear()" style="background-color: #ffffff; color: #898b8f; border: 0.5px solid">
					TRY AGAIN
				</button>
			</div>
		</div>
		<div v-else></div>
	</div>
	<div class="modal fade" id="ModalAdd" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel" style="margin-top: 16px; margin-left: 12px">Create</h5>
				</div>
				<div class="modal-body modal-b">
					<div class="row container">
						<div class="col">
							<label for="inp" class="inp">
								<input
									type="text"
									class="form-control label-one"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.name"
								/>
								<span class="label" v-if="heroForm.name !== ``">Name</span>
								<span class="label1" v-else>Name</span>
								<span class="focus-bg"></span>
							</label>
						</div>

						<div class="col">
							<label for="inp" class="inp">
								<input
									type="text"
									class="form-control"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.post_code"
								/>
								<span class="label" v-if="heroForm.post_code !== ``">Post Code</span>
								<span class="label1" v-else>Post Code</span>
								<span class="focus-bg"></span>
							</label>
						</div>

						<div class="col">
							<label for="inp" class="inp">
								<input type="text" class="form-control" id="inp" placeholder="&nbsp;" v-model="heroForm.price" />
								<span class="label" v-if="heroForm.price !== ``">Post Code</span>
								<span class="label1" v-else>Post Code</span>
								<span class="focus-bg"></span>
							</label>
						</div>
					</div>

					<div class="container">
						<div class="col">
							<label for="inp" class="inp">
								<textarea
									type="text"
									class="form-control textarea"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.description"
								/>
								<span class="label" v-if="heroForm.description !== ``">Description</span>
								<span class="label1" v-else>Description</span>
								<span class="focus-bg"></span>
							</label>
						</div>
					</div>
				</div>
				<div class="modal-footer" style="justify-content: center">
					<button
						class="btn col-2"
						data-bs-dismiss="modal"
						aria-label="Close"
						style="background-color: #ffffff; color: #898b8f; border: 0.5px solid"
						@click="clear()"
					>
						CANCEL
					</button>
					<button
						class="btn col-2"
						data-bs-dismiss="modal"
						aria-label="Close"
						style="background-color: #22bb66; color: #fbfdff"
						@click="onSubmit()"
					>
						CREATE
					</button>
				</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="ModalView" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-lg modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel" style="margin-top: 16px; margin-left: 12px">
						Item Detail - {{ activeId }}
					</h5>
				</div>
				<div class="modal-body modal-b">
					<div class="row container">
						<div class="col">
							<label for="inp" class="inp">
								<input
									type="text"
									class="form-control label-one"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.name"
								/>
								<span class="label" v-if="heroForm.name !== ``">Name</span>
								<span class="label1" v-else>Name</span>
								<span class="focus-bg"></span>
							</label>
						</div>

						<div class="col">
							<label for="inp" class="inp">
								<input
									type="text"
									class="form-control"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.post_code"
								/>
								<span class="label" v-if="heroForm.post_code !== ``">Post Code</span>
								<span class="label1" v-else>Post Code</span>
								<span class="focus-bg"></span>
							</label>
						</div>

						<div class="col">
							<label for="inp" class="inp">
								<input type="text" class="form-control" id="inp" placeholder="&nbsp;" v-model="heroForm.price" />
								<span class="label" v-if="heroForm.price !== ``">price</span>
								<span class="label1" v-else>price</span>
								<span class="focus-bg"></span>
							</label>
						</div>
					</div>

					<div class="container">
						<div class="col">
							<label for="inp" class="inp">
								<textarea
									type="text"
									class="form-control textarea"
									id="inp"
									placeholder="&nbsp;"
									v-model="heroForm.description"
								/>
								<span class="label" v-if="heroForm.description !== ``">Description</span>
								<span class="label1" v-else>Description</span>
								<span class="focus-bg"></span>
							</label>
						</div>
					</div>
				</div>

				<div class="modal-footer" style="justify-content: center">
					<button
						class="btn col-2"
						data-bs-dismiss="modal"
						aria-label="Close"
						style="background-color: #ffffff; color: #898b8f; border: 0.5px solid"
						
					>
						CANCEL
					</button>
					<button
						class="btn col-2"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
						data-bs-dismiss="modal"
						style="background-color: #f6a623; color: #fbfdff"
                        @click="updateHeroAction(payload)"
					>
						UPDATE
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- modal view -->
	<div class="modal fade" id="ModalView1" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel">Modal 1</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">Show a second modal and hide this one with the button below.</div>
				<div class="modal-footer">
					<button
						class="btn btn-primary"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
						data-bs-dismiss="modal"
					>
						Open second modal
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- modal Del -->
	<div class="modal fade" id="ModalDel" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel">Modal 2</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">Show a second modal and hide this one with the button below.</div>
				<div class="modal-footer">
					<button
						class="btn btn-primary"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
						data-bs-dismiss="modal"
					>
						Open second modal
					</button>
				</div>
			</div>
		</div>
	</div>

	<!-- modal create -->
	<div class="modal fade" id="ModalCreate" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
		<div class="modal-dialog modal-sm modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalToggleLabel">Modal 2</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">Show a second modal and hide this one with the button below.</div>
				<div class="modal-footer">
					<button
						class="btn btn-primary"
						data-bs-target="#exampleModalToggle2"
						data-bs-toggle="modal"
						data-bs-dismiss="modal"
					>
						Open second modal
					</button>
				</div>
			</div>
		</div>
	</div>
	<!-- footer -->
	<footer class="text-center text-white" style="background-color: #f4f7fc">
		<div class="container p-4 pb-0">
			<section class="">
				<form action="">
					<div class="row d-flex justify-content-center">
						<div class="col-md-5 col-12">
							<div class="form-outline form-white mb-4 inp">
								<select class="form-select" v-model="userInput">
									<option value="Open this select menu" selected>Open this select menu</option>
									<option v-for="post in post_code.payload" :key="post.post_code" :value="post">
										{{ post.post_code ? post.post_code : "test" }}
									</option>
								</select>
							</div>

							<br />

							<div v-if="userInput !== `Open this select menu`" style="color: #3c64b1" class="centered-label">
								<b>
									<span>Average : {{ payload_ch.payload.average ? payload_ch.payload.average : 'wait...'}} </span><br />
									<span>Median : {{ payload_ch.payload.median ? payload_ch.payload.median : 'wait...' }} </span>
								</b>
							</div>
						</div>
					</div>
				</form>
			</section>
		</div>
		<div class="text-center p-4"></div>
	</footer>
</template>

<script lang="ts">
import "vue3-easy-data-table/dist/style.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import { mapGetters, mapActions } from "vuex";
import { defineComponent, ref } from "vue";
import { HeroModel , payloadModel} from "@/models/heroModel";

export default defineComponent({
	name: "Heroes",
	components: { EasyDataTable: Vue3EasyDataTable },
	// Vue 3
	setup() {
		let userInput = ref(`Open this select menu`);
		let userInput1 = ref(``);
		let activeId = ref(0);
		let check_success = ref(false);
		let check_err = ref(false);
		let name = ref(``);
		let post_code1 = ref(``);
		let post_code2 = ref(``);
		let description = ref(``);

		const headers = ref([
			{ text: "ID", value: "id", width: 50 },
			{ text: "Name", value: "name", width: 200 },
			{ text: "Post Code", value: "post_code", width: 200 },
			{ text: "Price", value: "price", width: 200 },
			{ text: "Action", value: "action", width: 200 },
		]);

		const serverOptions = ref({
			page: 1,
			rowsPerPage: 100,
			sortBy: "age",
			sortType: "desc",
		});

		const heroForm = ref<HeroModel>({
			id: 0,
			name: ``,
			desc: ``,
			price: ``,
			post_code: ``,
		});

		const payload = ref<payloadModel>({
			id: 0,
			name: ``,
			desc: ``,
			price: ``
		});

		const items = ref([heroForm]);
		const editingTracker = ref("10");
        // const payload = ref<HeroModel>({
        //     id: 0,
        //     name: ``,
        //     desc: ``,
        //     price:``,
        // });

		return {
			heroForm,
			editingTracker,
			headers,
			items,
			serverOptions,
			userInput,
			userInput1,
			activeId,
			check_success,
			check_err,
			name,
			post_code1,
			post_code2,
			description,
            payload
		};
	},
	watch: {
		userInput: {
			handler(val) {
				console.log("val", val.post_code);
				this.getHeroesPayloadAction(val.post_code);
			},
		},
	},
	computed: {
		...mapGetters("heroModule", {
			heroes: "heroes",
			loading: "loading",
			post_code: "post_code",
			payload_ch: "payload",
		}),
	},

	methods: {
		...mapActions("heroModule", [
			"getHeroesAction",
			"removeHeroAction",
			"addHeroAction",
			"updateHeroAction",
			"getHeroesPostCodesAction",
			"getHeroesPayloadAction",
		]),
		showItem(id: number) {
			this.activeId = id;
			var showHero: any;
			for (let i = 0; i < this.heroes.payload.length; i++) {
				console.log(i);
				if (id == this.heroes.payload[i].id) {
					this.heroForm = this.heroes.payload[i];
				}
			}

            this.payload  = {
            id: this.activeId,
            name: this.heroForm.name,
            desc: this.heroForm.desc,
            price: this.heroForm.price
		}
    },
		async deleteItem(id: number) {
			console.log("deleteItem", id);
			await this.removeHeroAction(id);
			await this.getHeroesAction("100");
		},

		clear() {
			this.check_success = false;
			this.check_err = false;
			this.heroForm.name = ``;
			this.heroForm.post_code = ``;
			this.heroForm.price = ``;
		},

		onSubmit() {
			// Payload  400
			let payload = {
				name: this.heroForm.name,
				desc: "desc",
				price: 999,
			};
			this.addHeroAction(payload);
            

			let status = 400;

			if (status == 200) {
				this.check_success = true;
			} else {
				this.check_err = true;
			}

			console.log("onSubmit");
		},
	},
	async mounted() {
		console.log("MOUNTED");
		await this.getHeroesAction("100");
		await this.getHeroesPostCodesAction();
	},
});
</script>

<style scoped>
.centered-footer {
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.centered-label {
	text-align: left;
}
.customize-table {
	--easy-table-body-row-height: 70px;
	--easy-table-body-row-font-size: 14px;
}
.inp {
	position: relative;
	margin: auto;
}
.label {
	position: absolute;
	top: 16px;
	left: 9px;
	font-size: 14px;
	color: rgba(rgb(196, 30, 30), 0.5);
	font-weight: 400;
	transform-origin: 0 0;
	transform: translate3d(0, 0, 0);
	transition: all 7.2s ease;
	pointer-events: none;
}
.label1 {
	position: absolute;
	top: 23px;
	left: 9px;
	font-size: 16px;
	color: #bad5fc;
	font-weight: 400;
	transform-origin: 0 0;
	transform: translate3d(0, 0, 0);
	transition: all 7.2s ease;
	pointer-events: none;
}
input {
	height: 45px;
	font-size: 15px;
}
.label {
	color: rgb(82, 78, 78);
	transform: translate3d(0, -12px, 0) scale(0.65);
}
.label1 {
	color: rgb(82, 78, 78);
	transform: translate3d(0, -12px, 0) scale(0.95);
}
thead,
tbody,
tfoot,
tr,
td,
th {
	border-color: inherit;
	border-style: solid;
	border-width: 1px;
}
.textarea {
	display: block;
	width: 720px;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	height: 200px;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0.375rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.label-one {
	display: block;
	width: 340px;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.5;
	color: #212529;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-radius: 0.375rem;
	transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.modal-b {
	--bs-modal-header-border-color: #ffffff !important;
	--bs-modal-footer-border-color: #ffffff !important;
}

body {
	font-family: "Roboto", sans-serif;
	padding: 0;
	margin: 0;
	background-color: #f5f5f5;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
}

.cookiesContent {
	width: 320px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #fff;
	color: #000;
	text-align: center;
	border-radius: 20px;
	padding: 30px 30px 70px;
}

button.close {
	width: 30px;
	font-size: 20px;
	color: #c0c5cb;
	align-self: flex-end;
	background-color: transparent;
	border: none;
	margin-bottom: 10px;
}

img {
	width: 82px;
	margin-bottom: 15px;
}

p {
	margin-bottom: 40px;
	font-size: 18px;
}

button.accept {
	background-color: #ed6755;
	border: none;
	border-radius: 5px;
	width: 200px;
	padding: 14px;
	font-size: 16px;
	color: white;
	box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
}
.centered-sucess {
	position: absolute;
	top: 90%;
	left: 84%;
	transform: translate(-50%, -50%);
	margin-top: -240px;
}
.vue3-easy-data-table__header th .header.direction-left {
	justify-content: center !important;
}
</style>
