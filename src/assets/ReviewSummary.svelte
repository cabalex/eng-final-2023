<script lang="ts">
    import starEmpty from "./star_empty.png"
    import starHalf from "./star_half.png"
    import starFull from "./star_full.png"
  import StarRating from "./StarRating.svelte";

    export let reviews: any[] = [];
    export let smallDisplay = true;

    $: rating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
</script>

{#if smallDisplay}
    <span>
        {rating.toFixed(1)} 
        <StarRating rating={rating} />
        ({reviews.length})
    </span>
{:else}
<div class="reviewSummary">
    <div class="bars">
        {#each [5, 4, 3, 2, 1] as i}
            <div class="barOuter">
                {i}
                <div class="bar">
                    <div class="barFill" style="width: {reviews.filter(r => r.rating == i).length / reviews.length * 100}%"></div>
                </div>
            </div>
        {/each}
    </div>
    <div class="number">
        <h1>{rating.toFixed(1)}</h1>
        <StarRating rating={rating} />
        <span>{reviews.length} reviews</span>
    </div>
</div>
{/if}

<style>
    span {
        color: #70757a;
        font-family: Roboto,Arial,sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.25rem;
    }
    .reviewSummary {
        display: flex;
        flex-direction: row;
        gap: 24px;
    }
    .bars {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .barOuter {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
    }
    .bar {
        width: 100%;
        background-color: #ccc;
        height: 8px;
        border-radius: 8px;
        overflow: hidden;
    }
    .barFill {
        background-color: #fbbc04;
        height: 100%;
    }
    .number {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        font-family: "Google Sans",Roboto,Arial,sans-serif;
        font-size: 3.5rem;
        font-weight: 400;
        letter-spacing: 0;
        line-height: 4rem;
        margin: 0;
    }
</style>