import { Container } from '../Container/Container.styled'
import { DownloadButton, StyledHeader, UpdateButton } from './Header.styled'


const Header = () => {
	return (
		<Container>
			<StyledHeader>
				<p className="title">
				AI Prediction
				</p>
				<div className="inform">
					<p>Last update: <span>13.03.2024</span></p>
					<p>Date added to the platform: <span>17.12.2023</span></p>
				</div>
				<UpdateButton>Update</UpdateButton>
				<DownloadButton>Download</DownloadButton>
			</StyledHeader>
		</Container>
	)
}

export default Header