<script lang="ts">
	import ApartmentCard from "../components/ApartmentCard.svelte";
    import Search from "../components/Search.svelte";
    import { page } from '$app/stores';


    // TRPC Testing
    import { trpc } from '$lib/trpc/client';
    import type { RouterInputs, RouterOutputs } from '$lib/trpc/router';
    import { TRPCClientError } from '@trpc/client';

    let res = null;
    let buttonText = 'press the button to load data';
    let loading = false;

    const loadData = async () => {
      loading = true;
      res = await trpc($page).apartments.list.query();
      buttonText = JSON.stringify(res);
      loading = false;
    };

</script>
<header>
    <hgroup>
      <h1>Welcome to RentClearly</h1>
      <h2>Uncovering how much an apartment <strong class="primary">really</strong> costs</h2>
    </hgroup>
</header>

<!-- trpc testing -->
<a
  href="#load"
  role="button"
  class="secondary"
  aria-busy={loading}
  on:click|preventDefault={loadData}>Load</a
>
<p>{buttonText}</p>

<main>
    <section>
        <h1>Apartments</h1>
          <Search/>
        <div class="grid">
            <ApartmentCard/>
            <ApartmentCard/>
        </div>
    </section>
</main>

<style>
    header {
        text-align: center;
    }
    strong {
        color: var(--primary)
    }
</style>