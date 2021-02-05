import React from 'react';
import ButtonIcon from '@bit/nexxtway.react-rainbow.button-icon';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faStar } = require('@fortawesome/free-regular-svg-icons');
const {
	faTrashAlt,
	faPencilAlt,
	faLocationArrow,
	faArrowDown,
} = require('@fortawesome/free-solid-svg-icons');
const css = {margin: 5}

export default (
	<div>
		<ButtonIcon variant="border" size="large" icon={<FontAwesomeIcon icon={faStar} style={css} />} />
		<ButtonIcon
			variant="border"
			size="medium"
			icon={<FontAwesomeIcon icon={faLocationArrow} />}
			style={css}
		/>
		<ButtonIcon variant="border" size="small" icon={<FontAwesomeIcon icon={faPencilAlt} />} style={css} />
		<ButtonIcon variant="border" size="x-small" icon={<FontAwesomeIcon icon={faTrashAlt} />} style={css} />
		<ButtonIcon variant="border" size="xx-small" icon={<FontAwesomeIcon icon={faArrowDown} />} style={css} />
	</div>
)