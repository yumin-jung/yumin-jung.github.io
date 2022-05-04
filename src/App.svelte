<script>
	import * as all from "@fortawesome/fontawesome-free/js/all";
	let src = "/image/svelte.png";
</script>

<main>
	<h1>Hi~ 🙂</h1>
	<h2>Have a nice day 🌱</h2>
	<div>
		This blog is implemented with
		<img {src} alt="svelte" style="width: 2%; height: 2%;" />
	</div>

	<a href="https://github.com/yumin-jung">
		<button>
			<i class="fa-brands fa-github" />
		</button>
	</a>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #505050;
		font-size: 4em;
		font-weight: 100;
	}

	div {
		font-size: 2em;
	}

	button {
		border-radius: 16px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
