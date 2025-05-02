<script lang="ts">
	import { cva } from 'class-variance-authority';
	import { clsx } from 'clsx/lite';
	import { twMerge } from 'tailwind-merge';

	const buttonVariants = cva(
		"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0",
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
					outline:
						'border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground',
					secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80'
				},
				size: {
					default: 'h-9 px-4 py-2 has-[>svg]:px-3',
					sm: 'h-8 rounded-md text-xs px-3 has-[>svg]:px-2.5',
					icon: 'size-9'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	let props = $props();
</script>

<svelte:element
	this={props.as ? props.as : 'button'}
	href={props.as ? props.href : undefined}
	{...props}
	class={twMerge(
		clsx(buttonVariants({ variant: props.variant, size: props.size, class: props.class }))
	)}>{@render props.children()}</svelte:element
>
