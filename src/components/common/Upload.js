// import React from 'react'
// import {Uploadurl,UploadIcon} from '@/utils/imgs.js'
// import {Upload} from 'antd'
// import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
// export default  class UploadImg extends React.Component{
//   constructor(props){
//       super(props)
//       this.state={                  
//         imageUrl:'',
//       }
//   }
//     imgChange(e){
//         if(e.file.response&&e.file.response.data){
//             this.props.onChange(e.file.response.data.url)
//             console.log(e.file.response.data.url)
//         }
//     }
//     render(){
//         const uploadButton = (
//             <div>
//               {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
//               <div className="ant-upload-text">上传图片</div>
//             </div>
//           );
//         return (
//             <Upload
//             name="file"
//             listType="picture-card"
//             className="avatar-uploader"
//             multiple={false}
//             action={Uploadurl+'/api/v1/upload/img'}
//             onChange={this.imgChange.bind(this)}
//         >
//              {/* {fileList.length >= 8 ? null : uploadButton} */}
//              {/* { imageUrl? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton} */}
//             {this.props.imgurl ? <img src={this.props.imgurl} alt="avatar" style={{ width: '100%' }} /> :uploadButton}
//             {/* {this.state.value && <img src={UploadIcon} alt="avatar" style={{ width: '100%' }} />} */}
//         </Upload>
//         )
//     }
// }
import React from 'react'
import {Uploadurl,UploadIcon} from '@/utils/imgs.js'
import { Upload } from 'antd'

const QfUpload = (props)=>{
  const onChange = (e)=>{
    console.log('e',e)
    if(e.file.response && e.file.response.data) {
      const url =  e.file.response.data.url

      // 对后端响应数据进行过滤
      props.onChange(url)
    }
  }
  return(
    // <Upload
    //   name="file"
    //   action={Uploadurl+'/api/v1/upload/img'}
    //   multiple={false}
    //   listType="picture-card"
    //   className="avatar-uploader"
    //   onChange={onChange}
    // >
    //   {!props.value && <img src={UploadIcon} alt="avatar" style={{ width: '100%' }} />}
    // </Upload>
    <>
    </>
  )
}

export default QfUpload

