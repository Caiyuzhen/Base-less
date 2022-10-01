import React, { FC, ReactElement } from 'react'
// import styles from './Test.less'
import './Test.less'


const Test:FC = ():ReactElement => {
  return (
	<>
		<div id='wrap-one'>
			{/* 两个元素需要用同一个样式的话，就需要用到less的【混合】，避免重复代码 */}
			<div className='inner'>
				<div className="inner-text">🌞Hey</div>
			</div>
		</div>

		<div id='wrap-two'>
			<div className='inner2'>
				{/* 两个元素需要用同一个样式的话，就需要用到less的【混合】，避免重复代码 */}
				<div className="inner-text2">🌞Hey</div>
			</div>
		</div>

		<div className="triangle">
			<div className="triangle-border"></div>
		</div>

		
	</>
  )
}


export default Test
