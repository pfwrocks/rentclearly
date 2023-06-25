<script lang="ts">
    import { fade } from 'svelte/transition';
    export let endpoint: string;
    export let confirmPassword: boolean = false;
    export let buttonText:string = "Login"
    let password = "";
    let password2 = "";
    let alertReady = false;

    $: passwordsMatch = password === password2;
    $: showAlert = confirmPassword && !passwordsMatch && alertReady;
    let timeout: NodeJS.Timeout | null  = null;

    const shouldAlert = () => {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null
        }
        timeout = setTimeout(() => alertReady = true, 500);
    }

</script>

<form method="POST" action={endpoint}>
    <input
        type="email"
        name="login"
        placeholder="Login"
        aria-label="Login"
        autocomplete="nickname"
        required
    />
    <input
        type="password"
        name="password"
        placeholder="Password"
        aria-label="Password"
        autocomplete="current-password"
        bind:value={password}
        required
    />
    {#if confirmPassword}
        <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            aria-label="Confirm Password"
            autocomplete="current-password"
            bind:value={password2}
            on:keypress={shouldAlert}
            required
        />
    {/if}

    {#if !confirmPassword}
        <fieldset>
            <label for="remember">
            <input type="checkbox" role="switch" id="remember" name="remember" />
            Remember me
            </label>
        </fieldset>
    {/if}

    {#if showAlert}
    <small class="alert" transition:fade={{ delay: 150, duration: 300 }}>
        Passwords do not match
    </small>
    {/if}

    <button type="submit" class="contrast">{buttonText}</button>
</form>

<style>
    .alert {
        color: red;
    }
</style>