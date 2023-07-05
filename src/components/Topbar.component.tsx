import { useState } from "react";
import "./App.css";
import { Box, Flex } from "@chakra-ui/react";

function Topbar() {
	//   const [count, setCount] = useState(0)

	return (
		<>
			<Flex
				as='nav'
				align='center'
				justify='space-between'
				wrap='wrap'
				padding={4}
				bg='gray.800'
				color='white'
			>
				<Box>{/* Your logo or brand */}</Box>

				<Box display={{ base: "block", md: "none" }}>
					{/* Hamburger menu icon or mobile menu toggle */}
				</Box>

				<Box
					display={{ base: "none", md: "flex" }}
					width={{ base: "full", md: "auto" }}
					alignItems='center'
					flexGrow={1}
				>
					{/* Navigation links */}
				</Box>

				<Box display={{ base: "none", md: "flex" }} alignItems='center'>
					{/* Additional topbar items (e.g., user avatar, notifications) */}
				</Box>
			</Flex>
		</>
	);
}

export default Topbar;
