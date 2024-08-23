
import { useEffect, useLayoutEffect, useState } from 'react';

// Side effects

// Events: addEventListener / remove event listener
// Observer pattern: Subscribe / unsubscribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted / unmounted
// ===
// Call

// 1 update DOM
//   -F8 blog title
// 2 Call API 
// 3 Listen DOM events
//   -Scroll
//   - Resize
// 4. Cleanup
//   - Remove listener / Unsubscribe
//   - Clear timer


// 1. useEffect(callback)
// -gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM

// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted

// 3. useEffect(Callback, [deps])
// - Callback se duoc goi lai moi khi deps thay doi


//-----------
//1. Gọi callback sau khi component them element vào DOM
// 2. Callback luôn được gọi sau khi component mounted
// 3. Cleanup function luôn được gọi trước khi component unmounted
// 4. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)


// const tabs = ['posts', 'comments', 'albums' ]

 //function Content(){
// // const [title, setTitle] = useState('')
// const [posts, setPosts] = useState([])
// const [type, setType] = useState('posts')
// const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect(() => {
//         //
//         //document.title = title
//         //
//         //console.log('Re-render', title)
//         fetch( `https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts);
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             console.log(window.scrollY) //khoảng cách đã cuộn bn px

//             if (window.scrollY >= 200) {
//                 // Show
//                 setShowGoToTop(true)
//             } else {
//                 // Hide
//                 setShowGoToTop(false)
//             }

//         }
//             window.addEventListener('scroll', handleScroll)
//             console.log('addEventlistener');
//             // cleanup function
//             return(
//                 window.removeEventListener('scroll', handleScroll),
//                 console.log('removeEventlistener')
//             )
//     }, [])
//     return(
//         <div>
//             {tabs.map(tab => {
//                 <button
//                  key={tab}
//                  style={type === tab ? {
//                     color: '#fff',
//                     backgroundColor: '#333',
//                  } : {}}
//                  onClick={() => setType(tab)}
//                 >
//                     {tab}
//                 </button>
//             })}
//             {/* <input
//             value={title}
//             onChange={e => setTitle(e.target.value)}
//             />
//             <ul> */}

//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name}</li>
//                 ))}
//             {/* </ul> */}
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20
//                     }}
//                 >
//                     Go to Top
//                 </button>
//             )}
//         </div>
//     )
// }

// - RESIZE
// function Content(){
//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {

//         }

//         window.addEventListener('resize', handleResize)

//         // cleanup function
//         return () => {
//             window.removeEventListener('resize', handleResize)
//         }
//     })
//     return(
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )



// //Timers: setInterval, setTimeout, clearInterval, clearTimeout
// const [countdown, setCountdown] = useState(180)

// useEffect(() => {
//     const timerId = setInterval(() => {
//         setCountdown(prevState => prevState -1 )
//         console.log('cuntdown')
//     }, 1000)
//     return() => clearInterval(timerId)
// }, [])
// return(

//     <div>
//         <h1>{countdown}</h1>
//     </div>
// )


//31. useEffect() with preview avatar | Hàm dọn dẹp Cleanup function
// const [avatar, setAvatar] = useState()

// useEffect(() => {
//     return () => {
//         avatar && URL.revokeObjectURL(avatar.preview)
//     }
// }, [avatar])
//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)

//         setAvatar(file);

//         e.target.valua = null; // Goi dc nhieu anh 1 luc
//     }
// return(
//     <div>
//         <input
//             type='file'
//             onChange={handlePreviewAvatar}
//         />
//         {avatar && (
//             <img src={avatar.preview} alt='' width='80%'/>
//         )}
//     </div>
// )











//FQA
// 1.Callback gọi sau khi elements được mounted vào DOM
// 2. Phân biệt Mounted & Re-render
//3. Có Thể sử dụng nhiều dependencies, ít nhất 1 dependencies thay
//4. Sử dụng dependencies khi nào
// 5. Có nên viết nhiều logic khác nhau trong 1 useEffect
// 6. Phân biệt cách truyền callback qua props
// 7. Khi setState cùng 1 giá trị thì component sẽ không re-render
// 32: useEffect() with fake Chat App | Sử lý các chức năng thời gian thực
// const lessons = [
//     {
//         id: 1,
//         name: 'ReactJS la gi'
//     },
//     {
//         id: 2,
//         name: 'SPA,MPA la gi',

//     },
//     {
//         id: 3,
//         name: 'Arrow function'
//     }
// ]
//  function Content(){
// const [lessonId, setLessonId] = useState(1)

//     useEffect(() => {
//         const handleComment = ({detail}) => {
//             console.log(detail);

//         }
//         window.addEventListener(`lesson-${lessonId}`, handleComment)
//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
//     }, [lessonId])
//     return(
//         <div>
//             <ul>
//                 {lessons.map(lesson => (
//                     <li
//                         key={lesson.id}
//                         style={{
//                             color: lessonId === lesson.id ?
//                                 'red' :
//                                 '#333'
//                         }}
//                         onClick={() => setLessonId(lesson.id)}
//                     >
//                         {lesson.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }




// useEffect
// 1. Cập nhật lại State
// 2. Cập nhật DOM
// 3. Render lại UI
//4. Gọi cleaup nếu deps thay đổi
//5. Gọi useEffect callback


// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
//3. Gọi cleanup nếu deps thay đổi (sync)
//4. Gọi useLayoutEffect callback (sync)
//5. Render lại UI


// 33. useLayoutEffect() hook | Phân biệt useEffect và useLayoutEffect | React JS
function Content(){
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if(count > 3)
            setCount(0)
    })

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}
export default Content