import React from 'react';
import Header from '../components/header/header';
import { useSelector } from 'react-redux';

const PostDetail = () => {
 const postData = useSelector((state) => state.pos.postData);
  return (
    <div>
        {/* //Harita Eklenecek konumu */}
        <Header/>
        <div className="container mx-auto">
            <div>
              
            </div>

            <div>

            </div>
        </div>
    </div>
  )
}

export default PostDetail
