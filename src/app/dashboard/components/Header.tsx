export const Header = ({
	title,
	children,
}: Readonly<{
	title: string;
	children: React.ReactNode;
}>) => {
	return (
		<div className="flex justify-between pt-8 pb-4 px-6">
			<h2 className="text-xl sm:text-3xl font-semibold">{title}</h2>
			{children}
		</div>
	);
};
