<script lang="ts">
	import Login from "./Login.svelte";
    import { page } from '$app/stores';
</script>

<hgroup>
    <h1>Sign in</h1>
    <h2>A minimalist layout for Login pages</h2>
</hgroup>

<Login endpoint={$page.url.pathname}/>

<p>or <a href='/login/register'>register</a></p>