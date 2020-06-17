import React, {Component} from 'react';

/**
 * props 的使用
 *
 */
class Demo01 extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul>
				{this.props.navs.map((item,key)=>{
					return <li key={key}>
						<a href={item.link}>{item.name}-{key}</a>
					</li>
				})}
			</ul>
		);
	}
}

export default Demo01;