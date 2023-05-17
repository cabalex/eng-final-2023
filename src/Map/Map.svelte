<script lang="ts">
    import { onMount } from "svelte";
    import PlusThick from "svelte-material-icons/PlusThick.svelte";
    import MinusThick from "svelte-material-icons/MinusThick.svelte";
    import map from "../assets/map.png";
    import pinImg from "../assets/pin.png";
    import mountainPinImg from "../assets/mountain_pin.png";
    import hotelPinImg from "../assets/hotel_pin.png";
    import restaurantPinImg from "../assets/restaurant_pin.png";
    import forestPinImg from "../assets/forest_pin.png";
    import forestPinGrey from "../assets/forest_pin_grey.png";
    import Pins from "./Pins";

    export let selectedItem;

    let mouseCoords: {x: number, y: number} = {x: 0, y: 0};
    let mapX = 0;
    let mapY = 0;
    let dragging = false;
    let mapElement;
    let mapMouseCoords = {x: 0, y: 0};
    let zoom = 0.5;

    onMount(() => {
        const { width, height } = mapElement.getBoundingClientRect();
        mapX = -width / 2 * zoom;
        mapY = -height / 2 * zoom;
    });


    function mouseDown(e) {
        dragging = true;
        mouseCoords = {x: e.clientX, y: e.clientY};
    }

    function mouseMove(e) {
        if (dragging) {
            const dx = e.clientX - mouseCoords.x;
            const dy = e.clientY - mouseCoords.y;
            mapX += dx * zoom;
            mapY += dy * zoom;
        }
        mouseCoords = { x: e.clientX, y: e.clientY };

        // Calculate map coordinates relative to the current zoom level and map position
        mapMouseCoords = {
            x: (e.clientX * zoom - mapX) / zoom / zoom,
            y: (e.clientY * zoom - mapY) / zoom / zoom
        };
    }


    function mouseUp() {
        dragging = false;
    }

    function changeZoom(newZoom: number) {
        const oldZoom = zoom;
        zoom = Math.max(0.125, Math.min(2, newZoom));

        const { width, height } = mapElement.getBoundingClientRect();

        mapMouseCoords = {
            x: width / 2,
            y: height / 2
        };

        mapX -= (mapMouseCoords.x * zoom - mapMouseCoords.x * oldZoom) * zoom;
        mapY -= (mapMouseCoords.y * zoom - mapMouseCoords.y * oldZoom) * zoom;

    }

</script>

<main>
    <div class="zoom">
        <button on:click={() => changeZoom(zoom + 0.1)}><PlusThick /></button>
        <hr />
        <button on:click={() => changeZoom(zoom - 0.1)}><MinusThick /></button>
    </div>
    <div class="debug">(mouse: {Math.round(mapMouseCoords.x)}, {Math.round(mapMouseCoords.y)}) (map: {Math.round(mapX)}, {Math.round(mapY)}) (zoom: {zoom.toFixed(3)})</div>
    <div class="map"
        bind:this={mapElement}
        style={`left: ${mapX / zoom}px; top: ${mapY / zoom}px; ${dragging ? "cursor: grabbing" : ""}`}
        on:mousedown={mouseDown}
        on:mouseup={mouseUp}
        on:mouseleave={mouseUp}
        on:mousemove={mouseMove}
        on:mousewheel={e => { e.preventDefault(); changeZoom(zoom * (1 - e.deltaY / 2000), true) } }
    >
        <img src={map} alt="Map" style={`width: ${8192 * zoom}px`} />
        {#each Pins as pin}
            <img
                class="pin"
                class:active={$selectedItem === pin}
                src={
                    pin.type.includes("Mountain") || pin.name === "Goblin Caves" ? mountainPinImg :
                    pin.type.includes("Restaurant") ? restaurantPinImg :
                    pin.type.includes("hotel") ? hotelPinImg :
                    pin.name === "Trollshaws" ? forestPinGrey :
                    pin.type.includes("Forest") ? forestPinImg :
                    pinImg
                }
                alt="pin"
                style={`left: ${pin.coords[0] * zoom}px; top: ${pin.coords[1] * zoom}px`}
                on:click={() => selectedItem.set(pin)}
            />
        {/each}
    </div>
</main>

<style>
    main {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    .pin {
        transform: translate(-50%, -60%) scale(0.4);
        z-index: 1;
        position: absolute;
        cursor: pointer;
    }
    .debug {
        position: fixed;
        right: 0;
        top: 0;
        z-index: 99;
        background-color: white;
        color: black;
    }
    .zoom {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 5;
        border-radius: 5px;
        overflow: hidden;
        background-color: white;
        color: black;

        box-shadow: 0 1px 4px rgba(0,0,0,.3);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .zoom hr {
        width: 20px;
        border-color: transparent;
        background-color: #dadce0;
        margin: 0 auto;
    }
    .zoom button {
        padding: 0;
        width: 30px;
        height: 30px;
        background-color: #fff;
        color: #444;
        font-weight: bold;
    }
    .map {
        user-select: none;
        position: absolute;
    }
    .map img {
        user-select: none;
        -webkit-user-drag: none;
        transition: filter 0.1s ease-in-out;
    }
    .active {
        filter: drop-shadow(0 10px 5px rgba(0, 0, 0, 0.5));
    }
</style>