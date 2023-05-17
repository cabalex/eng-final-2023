<script lang="ts">
    import ring from "../assets/ring.png";
    import firework from "../assets/firework.png";
</script>

<div class="items">
    <p style="margin-right: 1em">Items</p>
    <div class="ring">
        <img src={ring} alt="Ring" width="75px" height="75px" />
        <div class="text">
            The ring is Bilbo's most important possession in the Hobbit; not just for the power it holds, but for how he uses it in the book. It allows him to become invisible, which is extremely valuable for his role as a thief. His usage of it evolves as his character does: at first, he uses it to escape the goblin caves, but at the end he uses it to charge head-on into the cave where Smaug resides. It is in how he uses his ring, and how he uses it to help others, that we see how Bilbo truly becomes a hero.
        </div>
    </div>
    <hr />
    <div class="firework">
        <img src={firework} alt="Firework" width="75px" height="75px" />
        <div class="text">
            I chose a firework to represent Bilbo's confidence; that is, something that appears faint and small at first, but then grows into something much larger and powerful. Bilbo's confidence appears small at first, but smaller incidents along his journey such as the battle with the trolls and the spiders slowly teach him that he has the ability to stand up for himself. By the end of the book, he is able to stand up to even the most terrifying dragons, for he has learned that he is capable of much more than he thought.
        </div>
    </div>
</div>

<style>
    .items {
        position: fixed;
        bottom: 10px;
        right: 50px;
        z-index: 10;

        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: white;
        color: black;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 1px 4px rgba(0,0,0,.3);
        line-height: 0;
    }
    .text {
        position: fixed;
        bottom: 100px;
        right: 10px;
        background-color: white;
        color: black;
        border-radius: 5px;
        padding: 5px;
        box-shadow: 0 1px 4px rgba(0,0,0,.3);
        line-height: 1.5;
        display: none;
        max-width: 500px;
    }
    .items hr {
        width: 1px;
        background-color: #ccc;
        border: 0;
    }
    .items img {
        transition: filter 0.2s ease-in-out, transform 0.2s ease-in-out;
    }
    .items > * {
        cursor: pointer;
    }
    .items > *:hover > .text {
        display: block;
    }
    .items > .ring:hover img {
        filter: drop-shadow(0 0 5px gold);
        transform: scale(1.1) rotate(-15deg);
    }
    .items > .firework:hover img {
        filter: drop-shadow(0 0 5px red);
        transform: scale(1.1) rotate(-15deg);
    }
</style>