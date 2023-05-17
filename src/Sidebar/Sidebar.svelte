<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import type { Writable } from "svelte/store";
    import { fly } from "svelte/transition";
    import CellphoneArrowDown from "svelte-material-icons/CellphoneArrowDown.svelte";
    import LabelOutline from "svelte-material-icons/LabelOutline.svelte";
    import type { Pin } from "../Map/Pins";
  import ReviewSummary from "../assets/ReviewSummary.svelte";
  import StarRating from "../assets/StarRating.svelte";

    export let selectedItem: Writable<Pin>;

    let elem;

    const documentClick = (e) => {
        if (!elem.contains(e.target)) {
            selectedItem.set(null);
        }
    }

    onMount(() => {
        setTimeout(() => document.addEventListener('click', documentClick), 0);
    })

    onDestroy(() => {
        document.removeEventListener('click', documentClick);
    })
</script>

{#if $selectedItem}
<aside bind:this={elem} transition:fly={{x: -400, duration: 200}}>
    {#if $selectedItem.image}
    <img src={$selectedItem.image} style="object-fit: cover" width="100%" height="200px" alt={$selectedItem.name} />
    {:else}
    <div style="width: 100%; height: 200px; background-color: #ccc" />
    {/if}
    <section class="title">
        <h1 style="margin-bottom: 8px">{$selectedItem.name}</h1>
        {#if $selectedItem.ratings.length}
        <ReviewSummary reviews={$selectedItem.ratings} />
        {/if}
        <span>{$selectedItem.type}</span>
    </section>
    <section style="white-space: pre-wrap">
        {$selectedItem.description}
    </section>
    {#if $selectedItem.bilbosJourney}
    <section style="white-space: pre-wrap">
        <h2 style="margin-bottom: 12px">Bilbo's Journey</h2>
        {$selectedItem.bilbosJourney}
    </section>
    {/if}
    <section class="attributes">
        {#each $selectedItem.attributes as attribute}
        <div class="attribute">
            <svelte:component this={attribute.icon} class="icon" />
            <span class="value">{attribute.value}</span>
        </div>
        {/each}
        <div class="attribute">
            <CellphoneArrowDown />
            <span class="value">Send to your phone</span>
        </div>
        <div class="attribute">
            <LabelOutline />
            <span class="value">Add a label</span>
        </div>
    </section>
    {#if $selectedItem.ratings.length}
    <section>
        <h2 style="margin-bottom: 12px">Review summary</h2>
        <ReviewSummary reviews={$selectedItem.ratings} smallDisplay={false} />
    </section>
    <section>
        <h2>Reviews</h2>
        {#each $selectedItem.ratings as rating}
        <div class="rating">
            <div class="userInfo">
                <span class="name">{rating.user}</span>
                <span class="userAttribute">{rating.userAttributes}</span>
            </div>
            <p class="stars"><StarRating rating={rating.rating} /></p>
            <p style="white-space: pre-wrap">{rating.review}</p>
        </div>
        {/each}
    </section>
    {/if}
</aside>
{/if}

<style>
    aside {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 400px;
        background-color: white;
        color: black;
        z-index: 99;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        overflow-y: auto;
    }
    aside::-webkit-scrollbar {
        height: 6px;
        width: 6px;
    }
    aside::-webkit-scrollbar-thumb {
        background-color: #70757a
    }
    aside::-webkit-scrollbar-track {
        background-color: #f1f3f4;
    }
    section {
        border-bottom: 1px solid #ccc;
        padding: 20px;
    }
    h1, h2 {
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    h1 {
        font-family: "Google Sans", Roboto, Arial, sans-serif;
        font-size: 1.375rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.75rem
    }
    .title {
        display: flex;
        flex-direction: column;
        padding: 16px 24px;
    }
    .title span {
        font-family: Roboto, Arial, sans-serif;
        color: #70757a;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.25rem;
    }
    .attributes {
        display: flex;
        flex-direction: column;
        padding: 16px 0;
    }
    .attribute {
        display: flex;
        align-items: center;
        gap: 24px;
        font-family: Roboto,Arial,sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.25rem;
        padding: 12px 24px;
    }
    .attribute:hover {
        background-color: #eee;
        cursor: pointer;
    }
    .rating {
        padding: 20px;
    }
    .userInfo {
        display: flex;
        flex-direction: column;
    }
    .userInfo .name {
        color: #202124;
        font-size: 15px;
        margin: 0;
    }
    .userInfo .userAttribute {
        font-size: 14px;
        color:  #70757a
    }
    .rating .stars {
        margin-top: 10px;
    }
    .rating p {
        margin: 0;
    }
</style>