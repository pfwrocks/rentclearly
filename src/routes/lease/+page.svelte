<script>
	import Leases from "./Leases.svelte";
import UploadLease from "./UploadLease.svelte";

</script>

<section>
    <article class="grid">
        <div>
            <h2>Upload a Lease</h2>
            <UploadLease />
        </div>

        <div>
          <h2>Leases You've Uploaded</h2>
          <Leases/>
        </div>
    </article>
</section>