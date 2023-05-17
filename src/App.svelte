<script lang="ts">
  import MapMarker from "svelte-material-icons/MapMarker.svelte";
  import Walk from "svelte-material-icons/Walk.svelte";
  import Directions from "svelte-material-icons/Directions.svelte";
  import Items from './Items/Items.svelte';
  import Map from './Map/Map.svelte';
  import Sidebar from './Sidebar/Sidebar.svelte';
  import { writable } from "svelte/store";

  const selectedItem = writable(null);
</script>

<div class="titleBar">
  <h1>
    <MapMarker width="30px" height="30px" />
    <span style="color: #4285F4; margin-left: 0.5ch">H</span>
    <span style="color: #EA4335">o</span>
    <span style="color: #FBBC05">b</span>
    <span style="color: #4285F4">b</span>
    <span style="color: #34A853">i</span>
    <span style="color: #EA4335">t</span>
    <span style="color: #777; margin-left: 0.5ch">Maps</span>
  </h1>
</div>
<div class="info">
  <h2 style="font-size: 20px; margin: 15px; display: flex; gap: 10px; align-items: center">
    <Directions height="24px" width="24px" />
    Hobbiton to Lonely Mountain
  </h2>
  <p style="margin: 10px;">Drag around the map to move it. Pins highlighted in green are important parts of Bilbo's journey.</p>
  <div class="route" style="border-left: 5px solid #1a73e8">
    <Walk width="30px" height="30px" />
    <div class="routeName">
      <h2>Bilbo's Journey</h2>
      <span>Travel Bilbo's historic route</span>
    </div>
    <div class="routeTime">
      <h2>14 months</h2>
      <span>950 mi</span>
    </div>
  </div>
  <div class="route">
    <Walk width="30px" height="30px" />
    <div class="routeName">
      <h2>Via Great East Road</h2>
      <span>Fastest route now due to traffic conditions</span>
    </div>
    <div class="routeTime">
      <h2>9 months</h2>
      <span>900 mi</span>
    </div>
  </div>
</div>

{#if $selectedItem}
  <Sidebar selectedItem={selectedItem} />
{/if}

<Map selectedItem={selectedItem} />
<Items />

<style>
  .titleBar {
    position: fixed;
    left: 10px;
    top: 10px;
    width: 350px;
    padding: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,.3);
    background-color: white;
    color: black;
    border-radius: 5px;
    font-family: 'Google Sans', Roboto, sans-serif;
    font-weight: 400;
    font-size: 16px;
    z-index: 100;
  }
  .titleBar h1 {
    margin: 0;
    font-size: 24px;
    display: flex;
    align-items: center;
  }
  .titleBar span {
    margin: 0;
  }
  .info {
    position: fixed;
    left: 10px;
    top: 70px;
    width: 370px;
    background-color: white;
    box-shadow: 0 1px 4px rgba(0,0,0,.3);
    border-radius: 5px;
    color: black;
    z-index: 5;
  }
  .info h2 {
    margin: 0;
  }
  .route {
    display: flex;
    align-items: center;
    border-top: 1px solid #ccc;
    gap: 10px;
    padding: 10px;
  }
  .routeName {
    flex-grow: 1;
  }
  .routeName span {
    display: block;
    color: #777;
    font-size: 14px;
    margin: 0;
    line-height: 1.1em;
  }
  .routeTime {
    text-align: right;
    white-space: nowrap;
  }
</style>