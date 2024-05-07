import styled from "styled-components";
import updateIcon from "../../assets/update-icon.svg";
import downloadIcon from "../../assets/download-icon.svg";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	gap: 30px;
	padding: 13px 0 11px;

	.title {
		font-size: 14px;
		font-weight: 700;
		color: #404044;
		margin-right: auto;
	}

	.inform {
		font-size: 10px;
		color: #37373A;
		text-align: right;

		span {
			font-weight: 700;
		}
	}
`;
const Button = styled.button`
  padding-left: 26px;
	position: relative;
	transition: scale ease-in-out 0.5s;

	&:hover {
		scale: 1.2;
	}

  &::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export const UpdateButton = styled(Button)`
  color: #94969C;

	&::before {
		background-image: url(${updateIcon});
	}
`;

export const DownloadButton = styled(Button)`
	color: #3C6DFF;

  &::before {
		background-image: url(${downloadIcon});
	}
`;
