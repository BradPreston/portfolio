<footer>
    <p>&copy; 2021 | Brad Preston</p>
</footer>

<style lang="scss">
    @import 'public/global.scss';

    footer {
        height: 40px;
        background: #000;
        color: $white;
        width: 100vw;
        position: fixed;
        bottom: 0;
        z-index: 100000;

        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-weight: 200;
            font-size: 1.4rem;
        }
    }
</style>