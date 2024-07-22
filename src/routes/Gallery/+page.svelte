<script>
    // @ts-nocheck
    import Tat1 from '$lib/assets/tats/tat1.jpg';
    import Tat2 from '$lib/assets/tats/tat2.jpg';
    import Tat3 from '$lib/assets/tats/tat3.jpg';
    import Tat4 from '$lib/assets/tats/tat4.jpg';
    import Tat5 from '$lib/assets/tats/tat5.jpg';
    import Tat6 from '$lib/assets/tats/tat6.jpg';
    import Tat7 from '$lib/assets/tats/tat7.jpg';
    import Tat8 from '$lib/assets/tats/tat8.jpg';

    let slider;
    let scrolling;
    let w;

    let toggle = () => {
        scrolling = !scrolling;
    }

</script>

<svelte:window bind:innerWidth={w}/>
<div class="slider md:mt-0 mt-5" onclick={toggle} reverse="true" style="
        transform: {w < 800?  "": "translateY(20%)"};
        --width: {w < 800? "100vw":"50vw"};
        --height: 60vh;
        --quantity: 5;"
    >
    <div class="list">
        <div class="item" style="--position: 1"><img src={Tat2} alt=""></div>
        <div class="item" style="--position: 2"><img src={Tat1} alt=""></div>
        <div class="item" style="--position: 3"><img src={Tat3} alt=""></div>
        <div class="item" style="--position: 4"><img src={Tat4} alt=""></div>
        <div class="item" style="--position: 5"><img src={Tat5} alt=""></div>
        <div class="item" style="--position: 6"><img src={Tat6} alt=""></div>
        <div class="item" style="--position: 7"><img src={Tat7} alt=""></div>
        <div class="item" style="--position: 8"><img src={Tat8} alt=""></div>
    </div>
</div>

<style>

    .slider {
        height: var(--height);
        overflow: hidden;
        mask-image: linear-gradient(
            to right,
            transparent,
            #000 5% 90%,
            transparent
        );
    }
    .slider .list{
        display: flex;
        width: 100%;
        min-width: calc(var(--width) * var(--quantity));
        position: relative;
    }
    
    .slider .list .item{
        width: var(--width);
        height: var(--height);
        position: absolute;
        left: 100%;
        animation: autoRun 20s linear infinite;
        transition: filter 0.2s;
        animation-delay: calc( (10s / var(--quantity)) * (var(--position) - 1) )!important;
    }
    
    .slider .list .item img{
        @apply object-cover w-full h-full rounded-2xl shadow-stone-700
    }
    
    .slider:active .item{
        animation-play-state: paused!important;
        filter: blur(15px);
    }
    
    .slider .item:active{
        filter: blur(0);
    }
    
    .slider[reverse="true"] .item{
        animation: reversePlay 10s linear infinite;
    }

    @keyframes autoRun{
        from{
            left: 100%;
        }to{
            left: calc(var(--width) * -1);
        }
    }
    @keyframes reversePlay{
        from{
            left: calc(var(--width) * -1);
        }to{
            left: 100%;
        }
    }
</style>