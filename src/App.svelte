<script lang="ts">
  import { DEGREES_TO_RADIANS, RADIANS_TO_DEGREES, type Oscillator } from "./script/Oscillator"
  import OscillatorControls from "./svelte/Oscillator.svelte";
  import { v4 as uuid } from "uuid";
  import { onMount } from "svelte";


  export const DEFAULT_RADIUS = 125
  export const DEFAULT_PHASE  = 90
  export const DEFAULT_VALUE  = 0
  export const DEFAULT_UNITS = "Degrees"

  let oscillators: Array<Oscillator>=[ ]
  /** Add 3 Default Oscillators*/
    onAppend()
    onAppend()
    onAppend()
  let animated = false
  let show_croshair = true
  let show_segments = false

  // canvas
  let logical_canvas
  let virtual_canvas
  let logical_canvas_context: CanvasRenderingContext2D
  let virtual_canvas_context: CanvasRenderingContext2D
  let logical_canvas_w
  let logical_canvas_h
  const virtual_canvas_w = 1024
  const virtual_canvas_h = 1024
  let virtual_canvas_scale

  // cursor
  let cursor = {x: 0, y: 0}

  onMount(() => {
    new ResizeObserver(() => onResize()).observe(logical_canvas)

    // init virtual canvas
    virtual_canvas = new OffscreenCanvas(
      virtual_canvas_w, 
      virtual_canvas_h
    )

    // resize
    logical_canvas_w = logical_canvas.width  = logical_canvas.getBoundingClientRect().width
    logical_canvas_h = logical_canvas.height = logical_canvas.getBoundingClientRect().height
    virtual_canvas_scale = Math.min(
      logical_canvas_w / virtual_canvas_w,
      logical_canvas_h / virtual_canvas_h
    )
    logical_canvas_context = logical_canvas.getContext("2d", { antialias: true })
    virtual_canvas_context = virtual_canvas.getContext("2d", { antialias: true })
    logical_canvas_context.imageSmoothingEnabled = true

    cursor = where()
  })

  function onUpdate() {
    if(!virtual_canvas_context) return

    // reset context
    virtual_canvas_context.resetTransform()
    virtual_canvas_context.translate(
      virtual_canvas_w / 2,
      virtual_canvas_h / 2
    )

    // update oscillators
    for(let oscillator of oscillators) {
      oscillator.value += oscillator.delta
    }
    // svelte jank magic
    oscillators=[...oscillators]

    // update cursor
    const _cursor = where()

    // draw spirograph
    virtual_canvas_context.strokeStyle = "#fff"
    virtual_canvas_context.lineCap   = "round"
    virtual_canvas_context.lineJoin  = "round"
    virtual_canvas_context.lineWidth = 2

    virtual_canvas_context.beginPath()
      virtual_canvas_context.moveTo( cursor.x,  cursor.y)
      virtual_canvas_context.lineTo(_cursor.x, _cursor.y)
      virtual_canvas_context.closePath()
    virtual_canvas_context.stroke()

    // update cursor
    cursor = _cursor
  }

  function onRender() {
    if(!logical_canvas_context)  return

    // reset context
    logical_canvas_context.resetTransform()
    logical_canvas_context.clearRect(
      0, 0, 
      logical_canvas_w,
      logical_canvas_h
    )
    logical_canvas_context.translate(
      (logical_canvas_w - virtual_canvas_w * virtual_canvas_scale) / 2,
      (logical_canvas_h - virtual_canvas_h * virtual_canvas_scale) / 2
    );
    logical_canvas_context.scale(
      virtual_canvas_scale,
      virtual_canvas_scale
    )

    // draw spirograph
    logical_canvas_context.drawImage(virtual_canvas, 0, 0)


    logical_canvas_context.translate(
      virtual_canvas_w / 2,
      virtual_canvas_h / 2
    )
    logical_canvas_context.strokeStyle = "#fff"
    logical_canvas_context.lineCap   = "round"
    logical_canvas_context.lineJoin  = "round"
    logical_canvas_context.lineWidth = 2

    // draw radius
    if(show_segments) {
      logical_canvas_context.beginPath()

      let cursor = { x: 0, y: 0 }
      for(let oscillator of oscillators) {
        const
          theta = (oscillator.phase + oscillator.value),
          degrees = oscillator.units === "Degrees" ? theta : theta * RADIANS_TO_DEGREES,
          radians = oscillator.units === "Radians" ? theta : theta * DEGREES_TO_RADIANS;
        
        const _cursor = { ...cursor }
        _cursor.x += oscillator.radius * Math.cos(radians)
        _cursor.y += oscillator.radius * Math.sin(radians)
        logical_canvas_context.moveTo( cursor.x,  cursor.y)
        logical_canvas_context.lineTo(_cursor.x, _cursor.y)
        cursor = _cursor
      }

      logical_canvas_context.closePath()
      logical_canvas_context.stroke()
    }

    // draw cursor
    if(show_croshair) {
      logical_canvas_context.beginPath()
        logical_canvas_context.moveTo(cursor.x - 8, cursor.y)
        logical_canvas_context.lineTo(cursor.x + 8, cursor.y)
        logical_canvas_context.moveTo(cursor.x, cursor.y - 8)
        logical_canvas_context.lineTo(cursor.x, cursor.y + 8)
      logical_canvas_context.closePath()
      logical_canvas_context.stroke()
    } 
  }

  function onResize() {
    if(!logical_canvas) return

    logical_canvas_w = logical_canvas.width  = logical_canvas.getBoundingClientRect().width
    logical_canvas_h = logical_canvas.height = logical_canvas.getBoundingClientRect().height
    virtual_canvas_scale = Math.min(
      logical_canvas_w / virtual_canvas_w,
      logical_canvas_h / virtual_canvas_h
    )
    logical_canvas_context = logical_canvas.getContext("2d", { antialias: true })
    virtual_canvas_context = virtual_canvas.getContext("2d", { antialias: true })
    logical_canvas_context.imageSmoothingEnabled = true

    onRender()
  }

  // cursor
  function where() {
    const _cursor = { x: 0, y: 0 }
    for(let oscillator of oscillators) {
      const 
        theta = (oscillator.phase + oscillator.value),
        degrees = oscillator.units === "Degrees" ? theta : theta * RADIANS_TO_DEGREES,
        radians = oscillator.units === "Radians" ? theta : theta * DEGREES_TO_RADIANS

      _cursor.x += oscillator.radius * Math.cos(radians)
      _cursor.y += oscillator.radius * Math.sin(radians)
    }
    return _cursor
  }

  // player
  function onStep() {
    cursor = where()
    animated = false
    animate()
  }

  function onPlay() {
    cursor = where()
    animated = true
    animate()
  }

  function onPause() {
    animated = false
  }

  function animate() {
    onUpdate()
    onRender()
    if(animated)
      requestAnimationFrame(() => animate())
  }

  // canvas

  function onReset() {
    // reset oscillators
    for(let oscillator of oscillators) {
      oscillator.value = DEFAULT_VALUE
    }
    // svelte jank magic
    oscillators=[...oscillators]
    cursor = where()
    onRender()
  }

  function onClear() {
    // reset context
    virtual_canvas_context.resetTransform()
    virtual_canvas_context.clearRect(
      0, 0,
      virtual_canvas_w,
      virtual_canvas_h
    )
    onRender()
  }

  // oscillators
  function onAppend() {
    oscillators=[...oscillators, nu()]
  }

  function onRemove() {
    if(oscillators.length < 2) return
    
    oscillators.pop()
    oscillators=[...oscillators]
  }

  function nu(): Oscillator {
    return {
      radius: DEFAULT_RADIUS,
      phase : DEFAULT_PHASE ,
      value : DEFAULT_VALUE ,
      delta : oscillators.length + 1,
      units : DEFAULT_UNITS
    }
  }

  let downloading = false

  // download
  async function onDownload() {
    if(!virtual_canvas) return

    downloading = true

      const 
        blob = await virtual_canvas.convertToBlob({ type: "image/png" }),
        href = URL.createObjectURL(blob)

      const a = document.createElement("a")
      a.href     = href
      a.download = uuid()
      a.click ()
      a.remove()

      URL.revokeObjectURL(href)

    downloading = false
  }

</script>

<div class="drawer drawer-end">
  <input id="my-drawer" type="checkbox" class="drawer-toggle"/>
  <div class="drawer-content">
    <label for="my-drawer" class="btn drawer-button text-3xl float-right order-last">
      <span><i class="ph-list"></i></span>
    </label>
    <canvas bind:this={ logical_canvas } class="absolute w-screen h-screen pointer-events-none"/>    
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <div class="flex flex-col bg-base-200 h-full p-4 gap-2 rounded-xl">
      <div class="flex flex-row gap-2">
        { #if animated }
          <button class="flex-1 btn btn-ghost text-3xl" on:click={ onPause } disabled={ !animated }>
            <span><i class="ph-pause"></i></span>
          </button>
        {:else}
          <button class="flex-1 btn btn-ghost text-3xl" on:click={ onPlay  } disabled={  animated }>
            <span><i class="ph-play"></i></span>
          </button>
        {/if}
        <button class="flex-1 btn btn-ghost text-3xl" on:click={ onStep } disabled={ animated }>
          <span><i class="ph-skip-forward"></i></span>
        </button>
        <button class="flex-1 btn btn-ghost text-3xl" on:click={ onReset } disabled={ animated }>
          <span><i class="ph-arrows-clockwise"></i></span>
        </button>
      </div>
      <div class="flex flex-row gap-2">
        <button class="flex-1 btn btn-ghost text-3xl" on:click={ () => { show_croshair=!show_croshair; onRender() }}>
          <span><i class="ph-crosshair-simple"></i></span>
        </button>
        <button class="flex-1 btn btn-ghost text-3xl" on:click={ () => { show_segments=!show_segments; onRender() }}>
          <span><i class="ph-line-segments"></i></span>
        </button>
        <button class="flex-1 btn btn-ghost text-3xl" on:click={ onClear } disabled={ animated }>
          <span><i class="ph-eraser"></i></span>
        </button>
      </div>
      <div class="flex flex-row gap-2">
        <button class="flex-1 btn btn-ghost text-3xl" disabled={ animated || downloading} on:click={ onDownload }>
          <span><i class="ph-floppy-disk"></i></span>
        </button>
      </div>
      <div class="flex flex-row gap-2">
        <span class="flex-1 text-center">Radius</span>
        <span class="flex-1 text-center">Phase </span>
        <span class="flex-1 text-center">Value </span>
        <span class="flex-1 text-center">Delta </span>
        <span class="flex-1 text-center">Units </span>
      </div>
      <div >
        { #each oscillators as oscillator }
          <OscillatorControls { oscillator } disabled={ animated }/>
        { /each }
      </div>
      <div class="flex flex-row gap-2">
        <button class="flex-1 btn btn-ghost text-3xl" disabled={ animated } on:click={ onAppend }>
          <span><i class="ph-plus"></i></span>
        </button>
        <button class="flex-1 btn btn-ghost text-3xl" disabled={ animated } on:click={ onRemove }>
          <span><i class="ph-minus"></i></span>
        </button>
      </div>
    </div>
  </div>
</div>



