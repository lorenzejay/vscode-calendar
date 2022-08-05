<script lang="ts">
    let startWorkTimer: boolean = false;
    let startBreakTimer: boolean = false;
    let workTime: number = 10000; //in ms
    let breakTime: number = 5000; //in ms
    
    $: console.log("workTime",workTime)
</script>


{#if !startWorkTimer}
<div class="container">
    <label for="TimeInput">How many minutes do you want to focus for?</label>
    <select name="TimeInput" on:change={(e) => workTime = parseInt(e.currentTarget.value ) * 1000}>
        <option value={10}>10 mins</option>
        <option value={25}>25 mins</option>
        <option value={45}>45 mins</option>
        <option value={60}>1 Hour</option>
    </select>
    <label for="TimeInputBreak">How many minutes will you go on break?</label>
    <select name="TimeInputBreak" on:change={(e) => breakTime = parseInt(e.currentTarget.value)}>
        <option value={5}>5 mins</option>
        <option value={10}>10 mins</option>
        <option value={15}>15 mins</option>
    </select>
    <button class="start-btn" on:click={() => startWorkTimer = true}>Start</button>
</div>
{/if}
{#if startWorkTimer && breakTime && startBreakTimer}
<div>
    <p>{workTime}</p>
</div>
{/if}



<style>
    .start-btn{
        margin-top: 5px;
    }
    .container{
        display: flex;
        flex-direction: column;
    }
    select {
        padding: 10px 15px;
    }
</style>