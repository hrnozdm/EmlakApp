import { useEffect } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllPost} from "../redux/PosSlice";
import { EnvironmentOutlined } from '@ant-design/icons';

const PostPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  const postData = useSelector((state) => state.pos.postData);
  console.log("postdata", postData);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex gap-12 items-center">
          <h1 className="text-2xl">My List</h1>
          <Button
            style={{
              backgroundColor: "#F4D03F",
              borderColor: "yellow",
              color: "black",
            }}
            size="large"
            onClick={() => navigate("/profile/addPost")}
          >
            İlan Oluştur
          </Button>
        </div>
        
        <div className="flex justify-between">
        <div>
          {postData?.length > 0 ? (
            <>
              {postData.map((post, index) => (
                <div key={index} className="flex my-10 border-b-2 max-w-[500px] py-10" onClick={()=>navigate(`/profile/postdetail/${post?._id}`)}>
                  <div>
                    <img src={post?.img} alt="" width={100} height={500} />
                  </div>
                  <div className="mx-5">
                    <h1 className="font-bold">{post?.title}</h1>
                    <p className="my-1"><span><EnvironmentOutlined /></span>{post?.address},<span>{post?.city}</span></p>
                    <p className="bg-yellow-300 text-center">{post?.price}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Hiç İlan Yok</p>
          )}
        </div>

        <div>
           <p>Message</p>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default PostPage;
