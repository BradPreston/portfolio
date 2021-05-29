<script>
	import { c } from './stores';
	import router from 'page';
	import { onDestroy } from 'svelte';
	// Routes
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Portfolio from './Portfolio.svelte';
	import Blog from './Blog.svelte';
	import Contact from './Contact.svelte';
	import NotFound from './NotFound.svelte';
	import Footer from './components/Footer.svelte';
  
	// Route Config
	router('/', () => page = Home);
	router('/about', () => page = About);
	router('/portfolio', () => page = Portfolio);
	router('/blog', () => page = Blog);
	router('/contact', () => page = Contact);
	router('/*', () => page = NotFound);
  
	let page;
	let currentPage;

	const unsubscribe = c.subscribe(active => {
		currentPage = active;
	});

	onDestroy(unsubscribe);

	
	const toggleNav = () => {
		let navLinks = document.getElementById('nav-links');

		if (navLinks.style.display !== 'flex') {
			navLinks.style.display = 'flex';
		} else {
			navLinks.style.display = 'none';
		}

		navLinks.addEventListener('click', () => {
			navLinks.style.display = 'none';
		});
	}

	// Start Router
	router.start();
  </script>
  
  <nav>
	  <div id="nav-links">
		  <a href='/'
		  class={$c === 'home' ? 'active' : ''}
		  on:click={() => c.set('home')}>
		  Home
		</a>
		<a href='/about'
		class={$c === 'about' ? 'active' : ''}
		on:click={() => c.set('about')}>
		About
	</a>
	<a href='/portfolio'
	class={$c === 'portfolio' ? 'active' : ''}
	on:click={() => c.set('portfolio')}>
	Portfolio
</a>
<a href='/blog'
class={$c === 'blog' ? 'active' : ''}
on:click={() => c.set('blog')}>
Blog
</a>
<a href='/contact'
class={$c === 'contact' ? 'active' : ''}
on:click={() => c.set('contact')}>
Contact
</a>
</div>
<button class="mobile-nav-button" on:click={toggleNav}>
	<span></span>
	<span></span>
	<span></span>
  </button>

</nav>
  
  <svelte:component this={page} />
  
  <Footer />

  <style lang="scss">
	@import 'public/global.scss';

	nav {
		width: 100vw;
		height: 50px;
		position: fixed;
		top: 0;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		border-bottom: 1px solid $main-color;
		background: $white;
		z-index: 1000;

		button {
			height: 30px;
			width: 40px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			border: none;
			margin-right: 10px;

			@media only screen and (min-width: 768px) {
				display: none;
			}

			span {
				width: 100%;
				height: 7px;
				background: $black;
				border-radius: 10px;
			}
		}

		#nav-links {
			display: none;
			flex-direction: column;
			align-items: flex-end;
			position: absolute;
			z-index: 1000000;
			top: 50px;
			background: rgba($white, .9);
			width: 100vw;
			height: 100vh;
			padding-right: 10px;

			@media only screen and (min-width: 768px) {
				display: flex !important;
				flex-direction: row;
				height: 50px;
				top: 0;
				align-items: center;
				justify-content: center;
				padding-right: 0;
				background: transparent;
			}

			a {
				font-size: 2rem;
				color: $black;
				text-decoration: none;
				text-transform: capitalize;
				margin: 5px 0;
				transition: .25s ease;
				font-weight: 300;
				
				@media only screen and (min-width: 768px) {
					padding: 0 10px;
					border-bottom: 3px solid transparent;
					line-height: 45px;
					font-size: 1.8rem;

					&:hover {
						color: $main-color;
						border-bottom: 3px solid $main-color;
					}
				}

				&:first-of-type {
					margin-top: 10px;

					@media only screen and (min-width: 768px) {
						margin: 0;
					}
				}
			}

			.active {
				color: $main-color;

				@media only screen and (min-width: 768px) {
					border-bottom: 3px solid $main-color;
				}
			}
		}
	}
  
//   nav {
// 	width: 100vw;
// 	height: 50px;
// 	border-bottom: 1px solid $main-color;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	font-weight: 300;
// 	position: fixed;
// 	top: 0;
// 	background: $white;
  
// 	.active {
// 	  color: $main-color;
// 	  border-bottom: 3px solid $main-color;
// 	}
  
// 	a {
// 	  font-size: 1.8rem;
// 	  line-height: 45px;
// 	  padding: 0 10px;
// 	  color: $black;
// 	  text-decoration: none;
// 	  text-transform: capitalize;
// 	  border-bottom: 3px solid transparent;
// 	  transition: .25s ease;
  
// 	  &:hover {
// 		border-bottom: 3px solid $main-color;
// 		color: $main-color;
// 	  }
// 	}
//   }
  
  </style>