const {Box, Text} = require("ink");
const React = require("react");

const Container = ({text, width = 56, height = 10}) =>{

	return <Box
		paddingX={2}
		borderStyle="bold"
		width={width}
		height={height}
	>
		<Text>
			{text}
		</Text>
	</Box>
}


module.exports = Container
