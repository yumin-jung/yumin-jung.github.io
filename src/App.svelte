<script>
	import * as all from "@fortawesome/fontawesome-free/js/all";
</script>

<main>
	<h2
		onMouseOver="this.innerHTML= 'Have a wonderful life!! 🚀'"
		onMouseOut="this.innerHTML='Have a nice day 🌱'"
	>
		Have a nice day 🌱
	</h2>

	<div>
		<a href="https://github.com/yumin-jung">
			<button>
				<i class="fa-brands fa-github" />
			</button>
		</a>
		<a href="https://www.instagram.com/self_overcoming">
			<button>
				<i class="fa-brands fa-instagram" />
			</button>
		</a>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;

		/*  */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 85vh;
	}

	h2 {
		color: rgb(44, 44, 46);
		transition: all 0.8s ease;
	}

	h2:hover {
		transform: scale(1.2);
	}

	button {
		background-color: rgb(99, 99, 102);
		color: rgb(242, 242, 247);
		width: 28px;
		height: 28px;
		border-radius: 4px;
		border: none;
		margin: 0px;
		padding: 4px 6px;
		font-size: 16px;
		cursor: pointer;
		transition: all 0.2s linear;
	}

	button:hover {
		transform: scale(1.2);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
