<script lang="ts">
	import * as all from "@fortawesome/fontawesome-free/js/all";
	export let name: string;
</script>

<main>
	<h2>Tech Blog by {name}</h2>

	<div class="work-container">
		<!-- Airpods Pro -->
		<div class="airpods-pro-wrapper">
			<div class="work-container-title">Airpods-Pro</div>
			<a href="https://github.com/yumin-jung/Interactive-Web">
				<img
					class="work-container-img"
					src="https://raw.githubusercontent.com/yumin-jung/Interactive-Web/main/Airpods-Pro/data/Airpods-Pro.gif"
					alt="Airpods-Pro"
					height="280"
					width="auto"
				/>
			</a>
		</div>
		<!-- Angry Birds -->
		<div class="angry-birds-wrapper">
			<div class="work-container-title">Angry-Birds</div>
			<a href="https://github.com/yumin-jung/Angry-Birds">
				<img
					class="work-container-img"
					src="https://raw.githubusercontent.com/yumin-jung/Angry-Birds/main/readme-img/stage.png"
					alt="Angry-Birds"
					height="280"
					width="auto"
				/>
			</a>
		</div>
	</div>

	<div>
		<a href="https://github.com/yumin-jung">
			<button class="fa-icon">
				<i class="fa-brands fa-github" />
			</button>
		</a>
		<a href="https://www.instagram.com/self_overcoming">
			<button class="fa-icon">
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

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 85vh;
	}

	.work-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		margin-bottom: 20px;
		border: 2px gray solid;
		border-radius: 8px;
		padding: 40px;
	}

	.work-container-title {
		margin-bottom: 8px;
	}

	.work-container-img {
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s linear;
	}

	.work-container-img:hover {
		transform: scale(1.02);
	}

	.fa-icon {
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

	.fa-icon:hover {
		transform: scale(1.1);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
