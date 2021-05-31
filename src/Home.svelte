<script>
    import { c } from './stores.js';
</script>

<svelte:head>
    <title>Home</title>
</svelte:head>

<div class="wrapper">
    <main>
        <section>
            <h1>My name is Brad Preston</h1>
            <h2>I am a web developer from Kalamazoo, MI</h2>
            <a href="/about" on:click={() => c.set('about')}>My story<span class="arrow">&#8594;</span></a>
        </section>
    </main>
</div>


  <style type="text/scss">
    @import 'public/global.scss';
    @import './scss/home.scss';
  </style>