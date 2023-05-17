<script lang="ts">
    import starEmpty from "./star_empty.png"
    import starHalf from "./star_half.png"
    import starFull from "./star_full.png"
    
    export let rating: number;
</script>

<span>
{#each [1, 2, 3, 4, 5] as i}
    <img height="14px" src={rating >= i ? starFull : rating >= i - 0.5 ? starHalf : starEmpty} alt="star" />
{/each}
</span>