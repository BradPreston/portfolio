<!-- <script>
  import router from 'page';
  import { current } from '../main.js';
  // Routes
  import Home from '../Home.svelte';
  import About from '../About.svelte';
  import Portfolio from '../Portfolio.svelte';
  import Blog from '../Blog.svelte';
  import Contact from '../Contact.svelte';
  import NotFound from '../NotFound.svelte';

  // Route Config
  router('/', () => page = Home);
  router('/about', () => page = About);
  router('/portfolio', () => page = Portfolio);
  router('/blog', () => page = Blog);
  router('/contact', () => page = Contact);
  router('/*', () => page = NotFound);

  let page;
  export let current;

  // Start Router
  router.start();
</script>

<nav>
  <a href='/' class={current === 'home' ? 'active' : ''} on:click={() => {current = 'home'}}>Home</a>
  <a href='/about' class={current === 'about' ? 'active' : ''} on:click={() => {current = 'about'}}>About</a>
  <a href='/portfolio' class={current === 'portfolio' ? 'active' : ''} on:click={() => {current} = 'portfolio'}>Portfolio</a>
  <a href='/blog' class={current === 'blog' ? 'active' : ''} on:click={() => current = 'blog'}>Blog</a>
  <a href='/contact' class={current === 'contact' ? 'active' : ''} on:click={() => current = 'contact'}>Contact</a>
</nav>

<svelte:component this={page} />

<style lang="scss">
  @import 'public/global.scss';

nav {
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid $main-color;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  position: fixed;
  top: 0;
  background: $white;

  .active {
    color: $main-color;
    border-bottom: 3px solid $main-color;
  }

  a {
    font-size: 1.8rem;
    line-height: 45px;
    padding: 0 10px;
    color: $black;
    text-decoration: none;
    text-transform: capitalize;
    border-bottom: 3px solid transparent;
    transition: .25s ease;

    &:hover {
      border-bottom: 3px solid $main-color;
      color: $main-color;
    }
  }
}

</style> -->