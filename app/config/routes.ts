export const ROUTES = {
	HOME: "/",
	SERVICES: "/#services",
	LOCATE: "/#locate",
	TESTIMONIALS: "/#testimonial",
	CONTACT: "/contact-us",
} as const;

export type RouteKey = keyof typeof ROUTES;

export interface NavItem {
	title: string;
	href: string;
	button?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
	{
		title: "Our Services",
		href: ROUTES.SERVICES,
	},
	{
		title: "Locate Us",
		href: ROUTES.LOCATE,
	},
	{
		title: "Testimonials",
		href: ROUTES.TESTIMONIALS,
	},
	{
		title: "Get Quote",
		href: ROUTES.CONTACT,
		button: true,
	},
];
