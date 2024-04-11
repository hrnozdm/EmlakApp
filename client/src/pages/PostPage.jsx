import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const PostPage = () => {
  const navigate=useNavigate();
  const postData=useSelector((state) =>state.pos.postData);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex gap-12 items-center" >
          <h1 className='text-2xl'>My List</h1>
          <Button style={{ backgroundColor: '#F4D03F', borderColor: 'yellow', color: 'black' }} size="large" onClick={()=>navigate('/profile/addPost')}>İlan Oluştur</Button>
        </div>

        <div>
           <p>{postData.title}</p>
           <img src={postData.img} alt="" width={50} height={50}/>
        </div>
      </div>
    </div>
  )
}

export default PostPage
