<script>
	import ApartmentCard from "../components/ApartmentCard.svelte";
import Search from "../components/Search.svelte";

</script>
<header>
    <hgroup>
      <h1>Welcome to RentClearly</h1>
      <h2>Uncovering how much an apartment <strong class="primary">really</strong> costs</h2>
    </hgroup>
</header>

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