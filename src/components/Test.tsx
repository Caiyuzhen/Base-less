import React, { FC, ReactElement, useEffect, useState } from 'react'
// import styles from './Test.less'
import './Test.less'



const Test:FC = ():ReactElement => {

	// 定义深色跟浅色模式
	const themeColor = {
		dark: '#000000',
		light: '#FFFFFF'
	}


	//状态开关控制颜色
	const [openDark, setOpenDark] = useState<boolean>(false)

	
	//🔥文档加载完毕时候，获取【上一次记录的色值】以及【上一次记录的状态！】
	useEffect(()=>{
		// ⚡️⚡️初次加载时，获取本地的【主题色值】
		document.body.style.backgroundColor = localStorage.getItem("dark") as string || localStorage.getItem("light") as string
		// ⚡️⚡️获取本地的 openDark 状态, 用于控制开关来切换主题色, 看上一次是开启还是关闭的【状态】！
		setOpenDark(JSON.parse(localStorage.getItem("openDark") as string))
	},[]) 



	// 点击切换主题色的方法
	const changeColor= () :void => {

		setOpenDark(!openDark)

		if(openDark){
			localStorage.setItem("light", themeColor.light)//开关关闭了，所以把浅色模式保存到本地，先做这步
			localStorage.setItem("openDark", JSON.stringify(false))//设置本地的 openDark 状态
			document.body.style.backgroundColor = (localStorage.getItem("light")) as string//然后设置整个网页为浅色背景
			localStorage.removeItem("dark");//然后清除本地的深色模式

		}else{
			localStorage.setItem("dark", themeColor.dark)//开关打开了，所以把深色模式保存到本地，先做这步
			localStorage.setItem("openDark", JSON.stringify(true))//设置本地的 openDark 状态
			document.body.style.backgroundColor = (localStorage.getItem("dark")) as string//然后设置网页为深色背景			
			localStorage.removeItem("light");//然后清除本地的浅色模式

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
·
		<div className="triangle">
			<div className="triangle-border"></div>
		</div>

		<div id="container-allBox">
			<div className="square-one">1</div>
			
			<div className="square-two">2</div>

			<div className="square-three">3</div>
		</div>

		<div>
			<div 
				id='thisBox'
				className={openDark ? 'changeBox_dark' : 'changeBox_light'}
				// style={{backgroundColor:red}}
				>需要改变我的颜色</div>
			<button onClick={ changeColor }>点我改变主题色</button>
		</div>
		
	</>
	)
}


export default Test
