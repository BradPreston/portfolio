<script>
    import { c } from './stores.js';
</script>

<div class="wrapper">
    <main>
        <section>
            <h1>My name is Brad Preston</h1>
            <h2>I am a web developer from Kalamazoo, MI</h2>
            <a href="/about" on:click={() => c.set('about')}>My story<span class="arrow">&#8594;</span></a>
        </section>
    </main>
</div>


  <style lang="scss">
      @import 'public/global.scss';

    main {
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, .75), rgba(0, 0, 0, .75)), url('/images/desk.jpeg');
        background-position: 100%;
        background-size: cover;
        background-attachment: fixed;

        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (min-width: 481px) {
            background-position: 75%;
        }

        @media only sreen and (min-width: 769px) {
            background-position: center center;
        }

        h2 {
            color: $white;
            margin-bottom: 20px;            
        }

        a {
            color: white;
            border-bottom: 1px solid $main-color;
            text-decoration: none;
            padding-bottom: 5px;
            font-weight: 300;
            font-size: 1.6rem;
            display: flex;
            width: 84px;
            transition: .25s ease;

            @media only screen and (min-width: 769px) {
                font-size: 2rem;
                width: 103px;
            }

            .arrow {
                padding-left: 5px;
                border-bottom: 1px solid transparent;
            }

            &:hover {
                color: $main-color;

                .arrow {
                    animation-name: slidingArrow;
                    animation-duration: .75s;
                    animation-iteration-count: infinite;

                    @keyframes slidingArrow {
                        0% {
                            padding-left: 5px;
                        }
                        50% {
                            padding-left: 7px;
                        }
                        100% {
                            padding-left: 5px;
                        }
                    }
                }
            }
        }
    }
  </style>