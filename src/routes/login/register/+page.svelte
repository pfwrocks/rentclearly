<script lang="ts">
	import Login from "../Login.svelte";
    import { page } from '$app/stores';
    const confirmPassword = true;
</script>

<hgroup>
    <h1>Sign Up</h1>
    <h2>Help us bring transparency to housing</h2>
</hgroup>

<Login endpoint={$page.url.pathname} {confirmPassword} buttonText="Register"/>

<p>or <a href='/login/'>login</a></p>