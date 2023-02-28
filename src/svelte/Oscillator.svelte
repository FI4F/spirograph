<script lang="ts">
  import { DEGREES_TO_RADIANS, RADIANS_TO_DEGREES, type Oscillator } from "../script/Oscillator";
  import { onMount } from "svelte"

  export let oscillator: Oscillator
  export let disabled: boolean = false

  let _units
  onMount(() => {
    _units = oscillator.units
  })

  $: step = oscillator.units === "Radians" ? +DEGREES_TO_RADIANS.toFixed(5) : 1;

  function onChange(e) {
    if(_units != oscillator.units) {
      switch(_units) {
        case "Radians": {
          oscillator.units = "Radians"
          oscillator.phase = +(oscillator.phase * DEGREES_TO_RADIANS).toFixed(5)
          oscillator.delta = +(oscillator.delta * DEGREES_TO_RADIANS).toFixed(5)
          oscillator.value = +(oscillator.value * DEGREES_TO_RADIANS).toFixed(5)
        } break;
        case "Degrees": {
          oscillator.units = "Degrees"
          oscillator.phase = +(oscillator.phase * RADIANS_TO_DEGREES).toFixed(5)
          oscillator.delta = +(oscillator.delta * RADIANS_TO_DEGREES).toFixed(5)
          oscillator.value = +(oscillator.value * RADIANS_TO_DEGREES).toFixed(5)
        }
      }
    }
  }

</script>

<div class="w-full flex flex-row p-2 rounded-xl">
  
  <input type="number" { disabled } class="text-center w-32 p-2 rounded-l-xl bg-base-100" bind:value={ oscillator.radius }/>
  <input type="number" { disabled } { step } class="text-center w-32 p-2 bg-base-100" bind:value={ oscillator.phase } />
  <input type="number" { disabled } { step } class="text-center w-32 p-2 bg-base-100" bind:value={ oscillator.value } />
  <input type="number" { disabled } { step } class="text-center w-32 p-2 bg-base-100" bind:value={ oscillator.delta } />

  <select { disabled } class="rounded-r-xl bg-base-100" bind:value={ _units } on:change={ onChange } >
    <option>Degrees</option>
    <option>Radians</option>
  </select>

</div>

