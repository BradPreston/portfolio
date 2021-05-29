<svelte:head>
    <title>Blog</title>
</svelte:head>

<div class="wrapper">
    <main>
        <p>My blog is currently under construction. In the meantime, please visit my Twitter account!</p>
        <a href="https://www.twitter.com/braddoescoding" target="_blank">Twitter<span class="arrow">&#8594;</span></a>
    </main>
</div>


<style lang="scss">
    @import 'public/global.scss';

    main {
        padding-top: 20px;
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 50vw;
        margin: 0 auto;
        text-align: center;

        p {
            margin-bottom: 10px;
            font-weight: 200;
        }

        a {
            color: #1DA1F2;
            border-bottom: 1px solid #1DA1F2;
            text-decoration: none;
            padding-bottom: 5px;
            font-weight: 300;
            font-size: 1.6rem;
            width: 70px;

            &:hover {
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

            .arrow {
                padding-left: 5px;  
                border-bottom: 1px solid transparent;
            }
        }
    }    
</style>