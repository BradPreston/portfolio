<svelte:head>
    <title>Contact</title>
</svelte:head>

<div class="wrapper">
    <main>
        <h1>Contact</h1>
    
        <a href="tel:2698232628">&#128222; (269) 823-2628</a>
    
        <form method="POST" data-netlify="true">
            <div class="form-container">
                <div class="field-wrapper">
                    <div class="field">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="John Smith" required>
                    </div>
                    <div class="field">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="example@gmail.com" required>
                    </div>
                </div>
                <p>Message</p>
                <textarea name="message" id="message" placeholder="Message" rows="10" required></textarea>
                <div data-netlify-recaptcha="true"></div>
                <input type="submit" value="Send" class="send" />
            </div>
        </form>
    </main>
</div>


<style lang="scss">
    @import 'public/global.scss';

    .wrapper {
        display: flex;
        justify-content: center;
    }

    main {
        width: 75vw;

        @media only screen and (min-width: 769px) {
            width: 50vw;
        }

        @media only screen and (min-width: 1000px) {
            width: 35vw;
        }

        h1 {
            margin-bottom: 20px;
            padding-bottom: 5px;
            border-bottom: 1px solid $main-color;
        }

        a {
            font-size: 1.4rem;
            color: $black;
            text-decoration: none;
        }

        .form-container {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
        }

        .field-wrapper {
            @media only screen and (min-width: 600px) {
                display: flex;
            }
        }

        .field {
            margin-bottom: 10px;

            @media only screen and (min-width: 600px) {
                width: 50%;

                &:first-of-type {
                    margin-right: 10px;
                }
            }

            label {
                font-size: 1.8rem;
            }

            input {
                margin-top: 5px;
                width: 100%;
                border-radius: 5px;
                border: 1px solid $black;
                line-height: 2rem;
            }
        }

        p {
            font-size: 1.8rem;
        }

        textarea {
            margin-top: 5px;
            width: 100%;
            resize: none;
            font-family: inherit;
            border: 1px solid $black;
            border-radius: 5px;
            line-height: 1.2rem;
        }

        .send {
            color: $main-color;
            margin-top: 10px;
            width: auto;
            padding: 8px 15px;
            align-self: center;
            font-size: 1.6rem;
            border: 1px solid $main-color;
            border-radius: 50px;
            background: transparent;

            &:hover {
                background: $main-color;
                color: $white;
            }
        }
    }
</style>