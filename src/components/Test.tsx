import React, { FC, ReactElement, useState } from 'react'
// import styles from './Test.less'
import './Test.less'



const Test:FC = ():ReactElement => {

	// 定义深色跟浅色模式
	const themeColor = {
		dark: '#000000',
		light: '#FFFFFF'
	}


	//状态开关控制颜色
	const [open, setOpen] = useState<boolean>(false)
	// localStorage.setItem("dark", '#000000')

	const changeColor= () :void => {
		setOpen(!open)
		//https://juejin.cn/post/6844904176179216397
		if(open){
			localStorage.setItem("light", '#FFFFFF')//开关关闭了，所以把浅色模式保存到本地
			document.body.style.backgroundColor = localStorage.getItem("light") as string//把浅色模式设置为背景色
		}else{
			//一开始执行这个，因为已经点击了，所以把深色模式保存到本地
			localStorage.setItem("dark", '#000000')//开关打开了，所以把深色模式保存到本地
			document.body.style.backgroundColor = (localStorage.getItem("dark")) as string//把深色模式设置为背景色
			console.log(localStorage.getItem("dark") )
		}

	}

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

		<div id="container-allBox">
			<div className="square-one">1</div>
			
			<div className="square-two">2</div>

			<div className="square-three">3</div>
		</div>

		<div className="change-color">
			<div 
				id='thisBox'
				className={open ? 'changeBox_dark' : 'changeBox_light'}
				// style={{backgroundColor:red}}
				>需要改变我的颜色</div>
			<button onClick={ changeColor }>点我改变主题色</button>
		</div>
		
	</>
	)
}


export default Test
