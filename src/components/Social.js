import React from 'react'
import SOCIALS from '../data/social'

const Social_props = props => {
	const { id, title, link, image } = props.social_prop
	return (
		<div style={{ display: 'inline-block', width: 30, margin: 10 }}>
			<h6>{title}</h6>
			<a href={link} target='_blank'>
				<img src={image} alt='profile' style={{ width: 20, hight: 12 }} />
			</a>
		</div>
	)
}

const Social = () =>
	SOCIALS.map(SOCIAL => (
		<Social_props key={SOCIAL.id} social_prop={SOCIAL}></Social_props>
	))
export default Social
