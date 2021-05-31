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


<style type='text/scss'>
    @import 'public/global.scss';
    @import './scss/contact.scss';
</style>