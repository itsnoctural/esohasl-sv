<script lang="ts">
	import { intlFormatFromNow } from '$lib/date';

	let { id, title, game_name, views, created_at } = $props();
</script>

<a href="/script/{id}" aria-label={title}>
	<div class="flex flex-col gap-y-3">
		<img
			src="/thumbnails/{id}.avif"
			width="305"
			height="172"
			class="aspect-video w-full rounded-lg object-cover"
			alt=""
		/>

		<div class="flex gap-x-3">
			<div class="flex w-full flex-col">
				<span class="font-medium">{title}</span>
				<span class="text-muted-foreground text-sm">{game_name}</span>
				<div class="text-muted-foreground flex text-sm">
					<span>{views} views</span>
					<span class="before:mx-2 before:content-['•']">{intlFormatFromNow(created_at)}</span>
				</div>
			</div>
		</div>
	</div>
</a>
