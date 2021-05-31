<script>
    export let title;
    export let link;
    export let image;
    export let alt;
</script>

<div class="card">
    <img class="image" src={image} alt={alt} />
    <div class="card-content">
        <h3>{title}</h3>
        <a href={link} target="_blank">Visit site <span class="arrow">&#8594;</span></a>
    </div>
</div>

<style type="text/scss">
    @import 'public/global.scss';
    @import '../scss/portfolio_card.scss'
</style>