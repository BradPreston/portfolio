<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<script>
    import Card from './components/portfolio_card.svelte';
</script>

<div class="wrapper">
    <main>
        <h1>Portfolio</h1>
        <section>
            <Card
                title="Aaron's Music Service"
                link="http://www.aaronsmusicservice.com"
                image="images/build.png"
                alt="Aaron's Music Service"
            />

            <Card
                title="Photos with Paul"
                link="http://www.photoswithpaul.com"
                image="images/bird.jpg"
                alt="Photos With Paul"
            />
        </section>
    </main>
</div>

<style lang="scss">
    @import 'public/global.scss';
    @import './scss/portfolio.scss';
</style>