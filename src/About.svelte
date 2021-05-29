<svelte:head>
	<title>About me</title>
</svelte:head>

<div class="wrapper">
	<main>
		<section>
			<h1>My story</h1>
			<div class="my-story">
				<p>I am a passionate web developer with a focus on small and growing businesses. I believe that small companies should have access to beautiful, robust, and efficient websites.</p>
			
				<p>I love seeing companies join the modern web world. Working with me means that you get to work hands on with a developer who cares about you and your business.</p>
			
				<p>One of my better traits is my desire to constantly learn and grow. I like to take online courses, read books, and listen to podcasts to stay up to date on modern web technologies.</p>
			
				<p>In my free time, I like to play guitar, read books, and participate in outdoor activites like camping, inline hockey, and skateboarding. I'm also always on the hunt for the best tasting coffee.</p>
			
				<p>My prefered front-end stack to work in is Svelte, scss, and TypeScript. I'm learning how to build the back-end using Node, Koa, and PostgreSQL. Although this is my desired stack, I am always interested in learning new technologies. </p>
			
				<p>I am currently searching for a career in web development and I am always available for freelance work. Please reach out to me if you'd like to hire me to build your website or want to add me to your team!</p>
			</div>
		</section>
	</main>
</div>



<style lang='scss'>
    @import 'public/global.scss';

	section {
		width: 75vw;
		margin: 0 auto;
		padding-top: 10px;
		padding-bottom: 50px;

		@media only screen and (min-width: 481px) and (max-width: 768px) {
			width: 50vw;
		}

		@media only screen and (min-width: 769px) {
			display: flex;
			justify-content: center;
		}

		h1 {
			border-bottom: 1px solid $main-color;
			padding-bottom: 5px;
			margin-bottom: 10px;

			@media only screen and (min-width: 768px) and (max-width: 1279px) {
				font-size: 4rem;
			}

			@media only screen and (min-width: 769px) {
				border: none;
				padding: 0;
				margin: 0;
			}
		}

		.my-story {

			@media only screen and (min-width: 769px) {
				width: 60%;
				border-left: 2px solid $main-color;
				margin-left: 20px;
				padding-left: 20px;
			}

			p {
				margin-bottom: 20px;
				font-weight: 300;
			}
		}

	}
    
</style>