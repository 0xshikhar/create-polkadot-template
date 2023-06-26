import Navbar from "../components/navigation/navbar";

export default function MainLayout({ children} : ReactProps) {
	return (
		<div>
			<Navbar />
			{children}
		</div>
	);
}
